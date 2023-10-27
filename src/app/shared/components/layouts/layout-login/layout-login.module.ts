import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutLoginComponent } from './layout-login.component';

const routes: Routes = [{ path: '', component: LayoutLoginComponent }];

@NgModule({
  declarations: [LayoutLoginComponent],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [LayoutLoginComponent],
})
export class LayoutLoginModule {}
