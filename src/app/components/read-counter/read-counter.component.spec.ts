import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCounterComponent } from './read-counter.component';

describe('ReadCounterComponent', () => {
  let component: ReadCounterComponent;
  let fixture: ComponentFixture<ReadCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
