import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemRoutingModule } from './item-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ItemRoutingModule, SharedModule, MatIconModule],
})
export class ItemModule {}
