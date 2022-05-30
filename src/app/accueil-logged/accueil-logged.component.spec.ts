import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilLoggedComponent } from './accueil-logged.component';

describe('AccueilLoggedComponent', () => {
  let component: AccueilLoggedComponent;
  let fixture: ComponentFixture<AccueilLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilLoggedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
