import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopSellerDataComponent } from './top-seller-data.component';

describe('TopSellerDataComponent', () => {
  let component: TopSellerDataComponent;
  let fixture: ComponentFixture<TopSellerDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopSellerDataComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSellerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
