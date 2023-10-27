import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IgxIconModule, IgxNavbarModule } from 'igniteui-angular';
import { ToastModule } from '../../toast/toast.module';
import { LayoutDefaultComponent } from './layout-default.component';

const routes: Routes = [{ path: '', component: LayoutDefaultComponent }];

@NgModule({
  declarations: [LayoutDefaultComponent],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    IgxNavbarModule,
    IgxIconModule,
    ToastModule
  ],
  exports: [LayoutDefaultComponent],
})
export class LayoutDefaultModule {}
