import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousCarouselCardComponent } from './sous-carousel-card.component';

describe('SousCarouselCardComponent', () => {
  let component: SousCarouselCardComponent;
  let fixture: ComponentFixture<SousCarouselCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousCarouselCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SousCarouselCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
