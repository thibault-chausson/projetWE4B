import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomaineLoggedComponent } from './domaine-logged.component';

describe('DomaineLoggedComponent', () => {
  let component: DomaineLoggedComponent;
  let fixture: ComponentFixture<DomaineLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomaineLoggedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomaineLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
