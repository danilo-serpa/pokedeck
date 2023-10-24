import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./pages/deck-list/deck-list.module').then(
        (m) => m.DeckListModule
      ),
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('./pages/deck-detail/deck-detail.module').then(
        (m) => m.DeckDetailModule
      ),
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./pages/deck-form/deck-form.module').then(
        (m) => m.DeckFormModule
      ),
  },
  {
    path: 'form/:id',
    loadChildren: () =>
      import('./pages/deck-form/deck-form.module').then(
        (m) => m.DeckFormModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class DeckRoutingModule { }
