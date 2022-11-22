import { TestBed } from '@angular/core/testing';

import { GestionProService } from './gestion-pro.service';

describe('GestionProService', () => {
  let service: GestionProService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionProService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
