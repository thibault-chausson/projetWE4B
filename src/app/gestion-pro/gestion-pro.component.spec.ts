import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProComponent } from './gestion-pro.component';

describe('GestionProComponent', () => {
  let component: GestionProComponent;
  let fixture: ComponentFixture<GestionProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
