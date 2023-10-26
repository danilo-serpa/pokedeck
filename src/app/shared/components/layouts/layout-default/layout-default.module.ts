import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IgxIconModule, IgxNavbarModule } from 'igniteui-angular';
import { LayoutDefaultComponent } from './layout-default.component';

const routes: Routes = [{ path: '', component: LayoutDefaultComponent }];

@NgModule({
  declarations: [LayoutDefaultComponent],
  imports: [RouterModule.forRoot(routes), CommonModule, IgxNavbarModule, IgxIconModule],
  exports: [LayoutDefaultComponent],
})
export class LayoutDefaultModule {}
