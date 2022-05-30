import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesLoggedComponent } from './categories-logged.component';

describe('CategoriesLoggedComponent', () => {
  let component: CategoriesLoggedComponent;
  let fixture: ComponentFixture<CategoriesLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesLoggedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
