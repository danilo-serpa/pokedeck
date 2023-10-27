import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IgxButtonModule, IgxRippleModule } from 'igniteui-angular';
import { DeckDetailComponent } from './deck-detail.component';

const routes: Routes = [{ path: '', component: DeckDetailComponent }];

@NgModule({
  declarations: [DeckDetailComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    IgxButtonModule,
    IgxRippleModule,
  ],
})
export class DeckDetailModule {}
