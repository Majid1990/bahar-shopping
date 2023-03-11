import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionsDetailComponent } from './promotions-detail.component';

const routes: Routes = [{ path: '', component: PromotionsDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromotionDetailRoutingModule {}
