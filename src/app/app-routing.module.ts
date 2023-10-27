import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutDefaultComponent } from './shared/components/layouts/layout-default/layout-default.component';
import { LayoutLoginComponent } from './shared/components/layouts/layout-login/layout-login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LayoutLoginComponent,
    loadChildren: () =>
      import('./features/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      {
        path: 'deck',
        loadChildren: () =>
          import('./features/deck/deck.module').then((m) => m.DeckModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
