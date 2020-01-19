import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackQueueComponent } from './callback-queue.component';

describe('CallbackQueueComponent', () => {
  let component: CallbackQueueComponent;
  let fixture: ComponentFixture<CallbackQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallbackQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbackQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
