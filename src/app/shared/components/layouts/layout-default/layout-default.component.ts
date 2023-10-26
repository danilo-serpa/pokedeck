import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-layout-default',
  templateUrl: './layout-default.component.html',
  styleUrls: ['./layout-default.component.scss']
})
export class LayoutDefaultComponent {
  userName: string = '';

  constructor(private userService: UserService,
    private router: Router){
    this.userName = this.userService.getCurrentUser().firstName;
  }

  logout(): void {
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }
}
