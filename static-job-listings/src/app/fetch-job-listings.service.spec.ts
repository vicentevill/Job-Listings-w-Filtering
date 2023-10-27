import { TestBed } from '@angular/core/testing';

import { FetchJobListingsService } from './fetch-job-listings.service';

describe('FetchJobListingsService', () => {
  let service: FetchJobListingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchJobListingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
