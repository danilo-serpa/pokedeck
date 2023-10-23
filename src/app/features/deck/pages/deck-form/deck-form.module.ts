import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckFormComponent } from './deck-form.component';

const routes: Routes = [{ path: '', component: DeckFormComponent }];

@NgModule({
  declarations: [DeckFormComponent],
  imports: [RouterModule.forChild(routes), CommonModule],

})
export class DeckFormModule {}
