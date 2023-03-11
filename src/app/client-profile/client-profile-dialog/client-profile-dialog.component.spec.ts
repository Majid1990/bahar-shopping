import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientProfileDialogComponent } from './client-profile-dialog.component';

describe('ClientProfileDialogComponent', () => {
  let component: ClientProfileDialogComponent;
  let fixture: ComponentFixture<ClientProfileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientProfileDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProfileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
