import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { MatIconModule } from '@angular/material/icon';
import { OrderConfirmNotificationComponent } from './order-confirm-notification/order-confirm-notification.component';
import { OrderCancelNotificationComponent } from './order-cancel-notification/order-cancel-notification.component';
import { SharedModule } from '../shared/shared.module';
import { OrdersPaymentComponent } from './orders-payment/orders-payment.component';

@NgModule({
  declarations: [
    OrdersComponent,
    OrderConfirmNotificationComponent,
    OrderCancelNotificationComponent,
    OrdersPaymentComponent,
  ],
  imports: [CommonModule, OrdersRoutingModule, MatIconModule, SharedModule],
})
export class OrdersModule {}
