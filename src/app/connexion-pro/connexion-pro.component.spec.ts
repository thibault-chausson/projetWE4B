import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionProComponent } from './connexion-pro.component';

describe('ConnexionProComponent', () => {
  let component: ConnexionProComponent;
  let fixture: ComponentFixture<ConnexionProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
