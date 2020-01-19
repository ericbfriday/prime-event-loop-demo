import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DisplayEditor } from "./ace-editor.component";

describe("AceEditorComponent", () => {
  let component: DisplayEditor;
  let fixture: ComponentFixture<DisplayEditor>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayEditor]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
