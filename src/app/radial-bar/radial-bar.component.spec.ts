import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialBarComponent } from './radial-bar.component';

describe('RadialBarComponent', () => {
  let component: RadialBarComponent;
  let fixture: ComponentFixture<RadialBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadialBarComponent]
    });
    fixture = TestBed.createComponent(RadialBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
