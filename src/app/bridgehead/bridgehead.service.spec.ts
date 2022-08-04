import { TestBed } from '@angular/core/testing';

import { BridgeheadService } from './bridgehead.service';

describe('BridgeheadService', () => {
  let service: BridgeheadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BridgeheadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
