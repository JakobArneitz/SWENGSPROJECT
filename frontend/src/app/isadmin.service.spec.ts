import { TestBed } from '@angular/core/testing';

import { IsadminService } from './isadmin.service';

describe('IsadminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsadminService = TestBed.get(IsadminService);
    expect(service).toBeTruthy();
  });
});
