import { TestBed } from '@angular/core/testing';

import { TeilerCoreClientService } from './teiler-core-client.service';

describe('TeilerCoreClientService', () => {
  let service: TeilerCoreClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeilerCoreClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
