import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuard } from '../auth/services/route.guard';
import { AppLayoutComponent } from '../layout/app.layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'dashboard',
      //   pathMatch: 'prefix',
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule { }
