import { TestBed } from '@angular/core/testing';

import { MesscategoryService } from './messcategory.service';

describe('MesscategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MesscategoryService = TestBed.get(MesscategoryService);
    expect(service).toBeTruthy();
  });
});
