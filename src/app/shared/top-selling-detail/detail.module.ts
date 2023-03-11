import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailRoutingModule } from './detail-routing.module';
import { TopSellingDetailComponent } from './top-selling-detail.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [TopSellingDetailComponent],
  imports: [CommonModule, DetailRoutingModule, SharedModule],
})
export class DetailModule {}
