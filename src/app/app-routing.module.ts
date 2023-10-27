import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';
import { LayoutDefaultComponent } from './shared/components/layouts/layout-default/layout-default.component';
import { LayoutLoginComponent } from './shared/components/layouts/layout-login/layout-login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LayoutLoginComponent,
        loadChildren: () =>
          import('./features/login/login.module').then((m) => m.LoginModule),
      },
    ],
  },
  {
    path: '',
    canActivate: [authGuard],
    component: LayoutDefaultComponent,
    children: [
      {
        path: 'deck',
        canActivate: [authGuard],
        loadChildren: () =>
          import('./features/deck/deck.module').then((m) => m.DeckModule),
      },
    ],
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
