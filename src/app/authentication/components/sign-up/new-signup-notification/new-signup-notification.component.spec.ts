import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSignupNotificationComponent } from './new-signup-notification.component';

describe('NewSignupNotificationComponent', () => {
  let component: NewSignupNotificationComponent;
  let fixture: ComponentFixture<NewSignupNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewSignupNotificationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSignupNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
