import { TestBed } from '@angular/core/testing';

import { TopSellingService } from './top-selling.service';

describe('TopSellingService', () => {
  let service: TopSellingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopSellingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
