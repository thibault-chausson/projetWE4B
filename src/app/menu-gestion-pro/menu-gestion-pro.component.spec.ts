import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGestionProComponent } from './menu-gestion-pro.component';

describe('MenuGestionProComponent', () => {
  let component: MenuGestionProComponent;
  let fixture: ComponentFixture<MenuGestionProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuGestionProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGestionProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
