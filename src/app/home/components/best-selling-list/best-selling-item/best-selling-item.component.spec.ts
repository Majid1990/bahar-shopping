import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellingItemComponent } from './best-selling-item.component';

describe('BestSellingItemComponent', () => {
  let component: BestSellingItemComponent;
  let fixture: ComponentFixture<BestSellingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestSellingItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSellingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
