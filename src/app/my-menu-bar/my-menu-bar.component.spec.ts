import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMenuBarComponent } from './my-menu-bar.component';

describe('MyMenuBarComponent', () => {
  let component: MyMenuBarComponent;
  let fixture: ComponentFixture<MyMenuBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMenuBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
