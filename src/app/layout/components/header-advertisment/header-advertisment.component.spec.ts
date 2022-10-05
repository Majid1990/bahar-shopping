import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAdvertismentComponent } from './header-advertisment.component';

describe('HeaderAdvertismentComponent', () => {
  let component: HeaderAdvertismentComponent;
  let fixture: ComponentFixture<HeaderAdvertismentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAdvertismentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAdvertismentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
