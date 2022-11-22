import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardForIndexComponent } from './card-for-index.component';

describe('CardForIndexComponent', () => {
  let component: CardForIndexComponent;
  let fixture: ComponentFixture<CardForIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardForIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardForIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
