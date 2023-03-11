import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionDetailRoutingModule } from './promotion-detail-routing.module';
import { PromotionsDetailComponent } from './promotions-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PromotionsDetailComponent],
  imports: [CommonModule, PromotionDetailRoutingModule, SharedModule],
})
export class PromotionDetailModule {}
