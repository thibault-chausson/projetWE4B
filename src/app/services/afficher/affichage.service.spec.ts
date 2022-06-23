import { TestBed } from '@angular/core/testing';

import { AffichageService } from './affichage.service';

describe('AffichageService', () => {
  let service: AffichageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffichageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
