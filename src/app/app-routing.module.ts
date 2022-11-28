import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home-module.module').then(x => x.HomeModuleModule) },
  { path: 'login', loadChildren: () => import('./layout/components/basket/login/login-module/login-module.module').then(x => x.LoginModuleModule) },
  // { path: 'best-selling', loadChildren: () => import('./home/home-module.module').then(x => x.HomeModuleModule) },
  //{ path: 'top-selling', loadChildren: () => import('./topselling/top-selling-module/top-selling-module.module').then(x => x.TopSellingModuleModule) },
  { path: 'home', loadChildren: () => import('./home/home-module.module').then(x => x.HomeModuleModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
