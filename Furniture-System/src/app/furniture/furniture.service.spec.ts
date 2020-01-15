import { TestBed } from '@angular/core/testing';

import { FurnitureService } from './furniture.service';

describe('FurnitureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FurnitureService = TestBed.get(FurnitureService);
    expect(service).toBeTruthy();
  });
});
