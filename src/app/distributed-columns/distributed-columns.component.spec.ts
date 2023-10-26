import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributedColumnsComponent } from './distributed-columns.component';

describe('DistributedColumnsComponent', () => {
  let component: DistributedColumnsComponent;
  let fixture: ComponentFixture<DistributedColumnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistributedColumnsComponent]
    });
    fixture = TestBed.createComponent(DistributedColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
