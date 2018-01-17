import { TestBed, inject } from '@angular/core/testing';

import { ClientRestService } from './client-rest.service';

describe('ClientRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientRestService]
    });
  });

  it('should be created', inject([ClientRestService], (service: ClientRestService) => {
    expect(service).toBeTruthy();
  }));
});
