import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopSellerDataComponent } from './top-seller-data.component';

const routes: Routes = [{ path: '', component: TopSellerDataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopSellerRoutingModule {}
