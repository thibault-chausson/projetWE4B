import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquesGestionProComponent } from './statistiques-gestion-pro.component';

describe('StatistiquesGestionProComponent', () => {
  let component: StatistiquesGestionProComponent;
  let fixture: ComponentFixture<StatistiquesGestionProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiquesGestionProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiquesGestionProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
