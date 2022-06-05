import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erreur404LoggedComponent } from './erreur404-logged.component';

describe('Erreur404LoggedComponent', () => {
  let component: Erreur404LoggedComponent;
  let fixture: ComponentFixture<Erreur404LoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Erreur404LoggedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Erreur404LoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
