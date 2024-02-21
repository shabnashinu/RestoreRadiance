import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteactivateService } from './services/routeactivate.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then(
        (e) => e.authentication
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((e) => e.UserModule),
    canActivate:[RouteactivateService]
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/Admin/admin.module').then((e) => e.AdminModule),
    canActivate: [RouteactivateService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
