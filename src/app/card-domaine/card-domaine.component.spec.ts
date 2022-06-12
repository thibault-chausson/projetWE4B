import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDomaineComponent } from './card-domaine.component';

describe('CardDomaineComponent', () => {
  let component: CardDomaineComponent;
  let fixture: ComponentFixture<CardDomaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDomaineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
