import { TestBed, inject } from '@angular/core/testing';

import { ServerurlService } from './serverurl.service';

describe('ServerurlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerurlService]
    });
  });

  it('should be created', inject([ServerurlService], (service: ServerurlService) => {
    expect(service).toBeTruthy();
  }));
});
