import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherActiviteComponent } from './afficher-activite.component';

describe('AfficherActiviteComponent', () => {
  let component: AfficherActiviteComponent;
  let fixture: ComponentFixture<AfficherActiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherActiviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
