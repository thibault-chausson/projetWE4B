import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchesLoggedComponent } from './recherches-logged.component';

describe('RecherchesLoggedComponent', () => {
  let component: RecherchesLoggedComponent;
  let fixture: ComponentFixture<RecherchesLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecherchesLoggedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchesLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
