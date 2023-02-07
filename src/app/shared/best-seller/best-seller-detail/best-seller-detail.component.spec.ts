import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BestSellerDetailComponent } from './best-seller-detail.component';

describe('BestSellerDetailComponent', () => {
  let component: BestSellerDetailComponent;
  let fixture: ComponentFixture<BestSellerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BestSellerDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSellerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
