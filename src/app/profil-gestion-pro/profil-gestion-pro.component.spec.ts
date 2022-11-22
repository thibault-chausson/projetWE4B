import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilGestionProComponent } from './profil-gestion-pro.component';

describe('ProfilGestionProComponent', () => {
  let component: ProfilGestionProComponent;
  let fixture: ComponentFixture<ProfilGestionProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilGestionProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilGestionProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
