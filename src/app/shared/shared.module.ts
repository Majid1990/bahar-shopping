import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SharedComponent } from './shared.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TopSellerDataComponent } from './top-seller/top-seller-data.component';
import { TopSellerItemComponent } from './top-seller-item/top-seller-item.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { BestSellerItemComponent } from './best-seller/best-seller-item/best-seller-item.component';
import { BestSellerDetailComponent } from './best-seller/best-seller-detail/best-seller-detail.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    SharedComponent,
    TopSellerDataComponent,
    TopSellerItemComponent,
    BestSellerComponent,
    BestSellerItemComponent,
    BestSellerDetailComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    MatSnackBarModule,
    LayoutModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
  ],
  exports: [
    SharedComponent,
    TopSellerDataComponent,
    TopSellerItemComponent,
    BestSellerComponent,
    BestSellerItemComponent,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatListModule,
    MatMenuModule,
  ],
})
export class SharedModule {}
