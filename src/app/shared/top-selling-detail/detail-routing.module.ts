import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopSellingDetailComponent } from './top-selling-detail.component';

const routes: Routes = [{ path: '', component: TopSellingDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRoutingModule {}
