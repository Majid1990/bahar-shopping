import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopSellerItemComponent } from './top-seller-item.component';

describe('TopSellerItemComponent', () => {
  let component: TopSellerItemComponent;
  let fixture: ComponentFixture<TopSellerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopSellerItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSellerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
