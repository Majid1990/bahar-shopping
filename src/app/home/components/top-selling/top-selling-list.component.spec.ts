import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsellingComponent } from './top-selling-list.component';

describe('TopsellingComponent', () => {
  let component: TopsellingComponent;
  let fixture: ComponentFixture<TopsellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopsellingComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopsellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
