import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallStackComponent } from './call-stack.component';

describe('CallStackComponent', () => {
  let component: CallStackComponent;
  let fixture: ComponentFixture<CallStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
