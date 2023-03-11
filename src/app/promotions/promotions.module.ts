import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionsRoutingModule } from './promotions-routing.module';
import { PromotionsComponent } from './promotions.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PromotionsComponent],
  imports: [CommonModule, PromotionsRoutingModule, SharedModule],
})
export class PromotionsModule {}
