import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderConfirmNotificationComponent } from './order-confirm-notification.component';

describe('OrderConfirmNotificationComponent', () => {
  let component: OrderConfirmNotificationComponent;
  let fixture: ComponentFixture<OrderConfirmNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderConfirmNotificationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConfirmNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
