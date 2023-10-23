import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserFormRegister } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user/user.service';
import { v4 as uuidv4 } from 'uuid';
import { UserFormLogin } from './../../../../shared/models/user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  public loginForm!: FormGroup<UserFormLogin>;
  public registrationForm!: FormGroup<UserFormRegister>;
  public showLogin = true;
  public showRegister = false;
  public showSuccessLogin = false;
  public showSuccessRegister = false;

  constructor(private userService: UserService, private router: Router) {
    this.createFormLogin();
    this.createFormRegister();
    this.userService.logout();
  }

  createFormLogin(user?: UserFormLogin): void {
    this.loginForm = new FormGroup<UserFormLogin>({
      email: new FormControl(user?.email, Validators.required),
      password: new FormControl(user?.password, Validators.required),
    });
  }

  createFormRegister(user?: UserFormRegister): void {
    this.registrationForm = new FormGroup<UserFormRegister>({
      newEmail: new FormControl(user?.newEmail, Validators.required),
      newPassword: new FormControl(user?.newPassword, Validators.required),
      firstName: new FormControl(user?.firstName, Validators.required),
      lastName: new FormControl(user?.lastName, Validators.required),
    });
  }

  tryLogin() {
    const loginInfo = this.loginForm.value;
    const userLogged = this.userService.login(
      loginInfo.email ?? '',
      loginInfo.password ?? ''
    );
    // this.showLogin = false;
    // this.showSuccessLogin = true;

    if (userLogged) {
      this.router.navigateByUrl('deck/list');
    }
  }

  showRegistrationForm() {
    this.showLogin = false;
    this.showRegister = true;
    this.createFormLogin();
    this.createFormRegister();
  }
  showLoginForm() {
    this.showLogin = true;
    this.showRegister = false;
    this.createFormLogin();
    this.createFormRegister();
  }

  tryRegister() {
    const registerInfo = this.registrationForm.value;
    const newUser = <User>{
      id: uuidv4(),
      email: registerInfo.newEmail,
      password: registerInfo.newPassword,
      firstName: registerInfo.firstName,
      lastName: registerInfo.lastName,
    };

    const userRegistered = this.userService.add(newUser);

    this.showLoginForm();

    this.showRegister = false;
    this.showSuccessRegister = true;
  }
}
