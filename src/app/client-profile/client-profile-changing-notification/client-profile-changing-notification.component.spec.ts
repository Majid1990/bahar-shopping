import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileChangingNotificationComponent } from './client-profile-changing-notification.component';

describe('ClientProfileChangingNotificationComponent', () => {
  let component: ClientProfileChangingNotificationComponent;
  let fixture: ComponentFixture<ClientProfileChangingNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientProfileChangingNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProfileChangingNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
