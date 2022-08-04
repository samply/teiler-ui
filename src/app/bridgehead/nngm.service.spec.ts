import { TestBed } from '@angular/core/testing';

import { NngmService } from './nngm.service';

describe('NngmService', () => {
  let service: NngmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NngmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
