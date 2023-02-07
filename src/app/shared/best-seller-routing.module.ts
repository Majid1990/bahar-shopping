import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestSellerDetailComponent } from './best-seller/best-seller-detail/best-seller-detail.component';
import { BestSellerComponent } from './best-seller/best-seller.component';

const routes: Routes = [
  { path: '', component: BestSellerComponent },
  { path: 'best-seller-detail', component: BestSellerDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BestSellerRoutingModule {}
