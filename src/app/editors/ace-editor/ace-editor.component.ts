import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-ace-editor",
  templateUrl: "./ace-editor.component.html",
  styleUrls: ["./ace-editor.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AceEditorComponent implements OnInit {
  @ViewChild("editor", { static: false }) editor;

  constructor() {}

  ngOnInit() {}
  editorText: string = "";

  ngAfterViewInit() {
    this.editor.setTheme("monokai");

    this.editor.getEditor().setOptions({
      enableBasicAutocompletion: true
    });

    this.editor.getEditor().commands.addCommand({
      name: "showOtherCompletions",
      bindKey: "Ctrl-.",
      exec: function(editor) {}
    });
  }
}
