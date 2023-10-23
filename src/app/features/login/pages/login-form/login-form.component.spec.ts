import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './login-form.component';
import { IgxInputGroupModule, IgxIconModule, IgxButtonModule, IgxRippleModule } from 'igniteui-angular';

const MAIL_GROUP_NAME = 'email';
const PASSWORD_GROUP_NAME = 'password';
const NEW_MAIL_GROUP_NAME = 'newEmail';
const NEW_PASSWORD_GROUP_NAME = 'newPassword';
const FIRST_NAME_GROUP_NAME = 'firstName';
const LAST_NAME_GROUP_NAME = 'lastName';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [ ReactiveFormsModule, NoopAnimationsModule, IgxInputGroupModule, IgxIconModule, IgxButtonModule, IgxRippleModule ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not allow login until valid',  async () => {
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls[MAIL_GROUP_NAME].setValue('test@example.com');
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls[PASSWORD_GROUP_NAME].setValue('123456');
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should not allow register until valid',  async () => {
    expect(component.registrationForm.valid).toBeFalsy();
    component.registrationForm.controls[NEW_MAIL_GROUP_NAME].setValue('test@example.com');
    expect(component.registrationForm.valid).toBeFalsy();
    component.registrationForm.controls[FIRST_NAME_GROUP_NAME].setValue('John');
    expect(component.registrationForm.valid).toBeFalsy();
    component.registrationForm.controls[LAST_NAME_GROUP_NAME].setValue('Doe');
    expect(component.registrationForm.valid).toBeFalsy();
    component.registrationForm.controls[NEW_PASSWORD_GROUP_NAME].setValue('123456');
    expect(component.registrationForm.valid).toBeTruthy();
  });
});
