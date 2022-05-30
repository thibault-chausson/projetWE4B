import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierActiviteGestionProComponent } from './modifier-activite-gestion-pro.component';

describe('ModifierActiviteGestionProComponent', () => {
  let component: ModifierActiviteGestionProComponent;
  let fixture: ComponentFixture<ModifierActiviteGestionProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierActiviteGestionProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierActiviteGestionProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
