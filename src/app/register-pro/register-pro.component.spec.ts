import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProComponent } from './register-pro.component';

describe('RegisterProComponent', () => {
  let component: RegisterProComponent;
  let fixture: ComponentFixture<RegisterProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
