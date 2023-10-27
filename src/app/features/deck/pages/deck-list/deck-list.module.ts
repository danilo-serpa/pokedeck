import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IgxButtonModule, IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxRippleModule } from 'igniteui-angular';
import { DeckListComponent } from './deck-list.component';

const routes: Routes = [{ path: '', component: DeckListComponent }];

@NgModule({
  declarations: [DeckListComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxRippleModule
  ],
})
export class DeckListModule {}
