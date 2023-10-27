import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ValidationMessageModule } from './../../shared/components/validation-message/validation-message.module';

import { ReactiveFormsModule } from '@angular/forms';
import { IgxIconModule, IgxInputGroupModule } from 'igniteui-angular';
import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './pages/login-form/login-form.component';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    IgxInputGroupModule,
    IgxIconModule,
    ValidationMessageModule
  ],
})
export class LoginModule {}
