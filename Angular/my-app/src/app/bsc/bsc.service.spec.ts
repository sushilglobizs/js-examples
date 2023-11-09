import { TestBed } from '@angular/core/testing';

import { BscService } from './bsc.service';

describe('BscService', () => {
  let service: BscService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BscService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
