import { TestBed } from '@angular/core/testing';

import { DomaineCategorieService } from './domaine-categorie.service';

describe('DomaineCategorieService', () => {
  let service: DomaineCategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomaineCategorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
