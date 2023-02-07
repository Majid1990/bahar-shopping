import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopSellingDetailComponent } from './top-selling-detail.component';

describe('TopSellingDetailComponent', () => {
  let component: TopSellingDetailComponent;
  let fixture: ComponentFixture<TopSellingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopSellingDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSellingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
