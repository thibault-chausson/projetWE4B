import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitesGestionProComponent } from './activites-gestion-pro.component';

describe('ActivitesGestionProComponent', () => {
  let component: ActivitesGestionProComponent;
  let fixture: ComponentFixture<ActivitesGestionProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitesGestionProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitesGestionProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
