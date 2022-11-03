/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VoteServiceService } from './VoteService.service';

describe('Service: VoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoteServiceService]
    });
  });

  it('should ...', inject([VoteServiceService], (service: VoteServiceService) => {
    expect(service).toBeTruthy();
  }));
});
