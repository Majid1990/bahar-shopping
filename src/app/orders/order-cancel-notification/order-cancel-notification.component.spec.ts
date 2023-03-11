import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCancelNotificationComponent } from './order-cancel-notification.component';

describe('OrderCancelNotificationComponent', () => {
  let component: OrderCancelNotificationComponent;
  let fixture: ComponentFixture<OrderCancelNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCancelNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCancelNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
