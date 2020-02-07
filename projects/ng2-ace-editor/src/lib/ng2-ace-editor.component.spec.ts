import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2AceEditorComponent } from './ng2-ace-editor.component';

describe('Ng2AceEditorComponent', () => {
  let component: Ng2AceEditorComponent;
  let fixture: ComponentFixture<Ng2AceEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2AceEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2AceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
