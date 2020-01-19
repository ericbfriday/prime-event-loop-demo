import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';
import { supportedThemes, supportedModes } from './editor-mode.enum';

import 'brace/theme/monokai';
import 'brace/mode/html';
import 'brace/mode/javascript';
import 'brace/mode/json';
import 'brace/mode/typescript';

@Component({
  selector: 'app-ace-editor',
  templateUrl: './ace-editor.component.html',
  styleUrls: ['./ace-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayEditor implements OnInit {
  @ViewChild('editor', { static: false }) editor: AceEditorComponent;

  constructor() {}

  ngOnInit() {}
  editorText: string = '';

  ngAfterViewInit() {
    this.editor.setTheme('monokai');
    this.editor.setMode('javascript');

    this.editor.getEditor().setOptions({
      enableBasicAutocompletion: true
    });

    this.editor.getEditor().commands.addCommand({
      name: 'showOtherCompletions',
      bindKey: 'Ctrl-.',
      exec: function(editor) {}
    });
  }

  onRunClicked = (event: any) => {
    console.log('Run clicked!');
  };
}
