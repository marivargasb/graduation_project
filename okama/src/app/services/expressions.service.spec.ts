import { TestBed } from '@angular/core/testing';

import { ExpressionsService } from './expressions.service';

describe('ExpressionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpressionsService = TestBed.get(ExpressionsService);
    expect(service).toBeTruthy();
  });
});
