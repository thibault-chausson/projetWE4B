import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActiviteGestionProComponent } from './add-activite-gestion-pro.component';

describe('AddActiviteGestionProComponent', () => {
  let component: AddActiviteGestionProComponent;
  let fixture: ComponentFixture<AddActiviteGestionProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddActiviteGestionProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActiviteGestionProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
