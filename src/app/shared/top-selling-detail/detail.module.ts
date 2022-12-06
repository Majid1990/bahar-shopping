import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailRoutingModule } from './detail-routing.module';
import { TopSellingDetailComponent } from './top-selling-detail.component';

@NgModule({
  declarations: [
    TopSellingDetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule
  ]
})
export class DetailModule { }
