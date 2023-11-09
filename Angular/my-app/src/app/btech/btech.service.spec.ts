import { TestBed } from '@angular/core/testing';

import { BtechService } from './btech.service';

describe('BtechService', () => {
  let service: BtechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
