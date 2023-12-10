import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingComponent } from './main/pages/landing/landing.component';
import { AuthGuard } from './main/auth/services/auth.guard';
import { AccessDeniedComponent } from './main/pages/access-denied/access-denied.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./main/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'module',
    loadChildren: () =>
      import('./main/modules/modules.module').then((m) => m.ModulesModule),
    // canActivate: [AuthGuard],
  },
  // {
  //   path: 'notification',
  //   loadChildren: () =>
  //     import('./main/modules/budgeting/notification/notification.module').then(
  //       (m) => m.NotificationModule
  //     ),
  //   canActivate: [AuthGuard],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
