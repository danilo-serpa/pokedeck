import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckListComponent } from './deck-list.component';

const routes: Routes = [{ path: '', component: DeckListComponent }];

@NgModule({
  declarations: [DeckListComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class DeckListModule {}
