import { TestBed, inject } from '@angular/core/testing';

import { GetApiDataService } from './get-api-data.service';

describe('GetApiDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetApiDataService]
    });
  });

  it('should be created', inject([GetApiDataService], (service: GetApiDataService) => {
    expect(service).toBeTruthy();
  }));
});
