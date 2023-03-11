import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'all-products',
    loadChildren: () =>
      import('./shared/all-products/all-products.module').then(
        (x) => x.AllProductsModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./home/home-module.module').then((x) => x.HomeModuleModule),
  },
  {
    path: 'market',
    loadChildren: () =>
      import('./home/home-module.module').then((x) => x.HomeModuleModule),
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (x) => x.AuthenticationModule
      ),
  },
  {
    path: 'best-seller',
    loadChildren: () =>
      import('./shared/best-seller.module').then((x) => x.BestSellerModule),
  },
  {
    path: 'best-seller-detail',
    loadChildren: () =>
      import('./shared/best-seller.module').then((x) => x.BestSellerModule),
  },
  {
    path: 'top-seller',
    loadChildren: () =>
      import('./shared/top-seller/top-seller.module').then(
        (x) => x.TopSellerModule
      ),
  },
  {
    path: 'top-seller-detail',
    loadChildren: () =>
      import('./shared/top-selling-detail/detail.module').then(
        (x) => x.DetailModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home-module.module').then((x) => x.HomeModuleModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((x) => x.OrdersModule),
  },
  {
    path: 'client-profile',
    loadChildren: () =>
      import('./client-profile/profile.module').then((x) => x.ProfileModule),
  },
  {
    path: 'promotions',
    loadChildren: () =>
      import('./promotions/promotions.module').then((x) => x.PromotionsModule),
  },
  {
    path: 'promotions-detail',
    loadChildren: () =>
      import('./promotions/promotions-detail/promotion-detail.module').then(
        (x) => x.PromotionDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
