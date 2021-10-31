import { TestBed } from '@angular/core/testing';

import { CreateadService } from './createad.service';

describe('CreateadService', () => {
  let service: CreateadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
