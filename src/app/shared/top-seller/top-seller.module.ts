import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopSellerRoutingModule } from './top-seller-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, TopSellerRoutingModule, SharedModule, MatIconModule],
  exports: [],
})
export class TopSellerModule {}
