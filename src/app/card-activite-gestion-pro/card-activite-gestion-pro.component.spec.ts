import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardActiviteGestionProComponent } from './card-activite-gestion-pro.component';

describe('CardActiviteGestionProComponent', () => {
  let component: CardActiviteGestionProComponent;
  let fixture: ComponentFixture<CardActiviteGestionProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardActiviteGestionProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardActiviteGestionProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
