import { TestBed } from '@angular/core/testing';
import { TopSellerService } from './top-seller.service';

describe('TopSellerService', () => {
  let service: TopSellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopSellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
