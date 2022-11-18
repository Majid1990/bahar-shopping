import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { BestsellingComponent } from './bestselling/bestselling.component';
import { TopsellingComponent } from './topselling/top-selling-list.component';
import { TopSellingItemComponent } from './topselling/top-selling-item/top-selling-item.component';
import { HttpClientModule } from '@angular/common/http';
import { BestSellingItemComponent } from './bestselling/best-selling-item/best-selling-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BestsellingComponent,
    TopsellingComponent,
    TopSellingItemComponent,
    BestSellingItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    LayoutModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
