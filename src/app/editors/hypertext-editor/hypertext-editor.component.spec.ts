import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HypertextEditorComponent } from './hypertext-editor.component';

describe('HypertextEditorComponent', () => {
  let component: HypertextEditorComponent;
  let fixture: ComponentFixture<HypertextEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HypertextEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HypertextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
