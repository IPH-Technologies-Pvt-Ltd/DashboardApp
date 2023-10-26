import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Radial2Component } from './radial2.component';

describe('Radial2Component', () => {
  let component: Radial2Component;
  let fixture: ComponentFixture<Radial2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Radial2Component]
    });
    fixture = TestBed.createComponent(Radial2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
