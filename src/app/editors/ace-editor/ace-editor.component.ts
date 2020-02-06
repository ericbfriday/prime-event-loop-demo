import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList
} from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';
import { supportedThemes, supportedModes } from './editor-mode.enum';

import 'brace/theme/monokai';
import 'brace/mode/html';
import 'brace/mode/javascript';
import 'brace/mode/json';
import 'brace/mode/typescript';
import { isNullOrUndefined } from 'src/app/utils/is-null-or-undefined';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-ace-editor',
  templateUrl: './ace-editor.component.html',
  styleUrls: [ './ace-editor.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayEditor implements OnInit {
  @ViewChild('aceEditorVar', { static: true }) editor !: AceEditorComponent;
  @Output() runClicked: EventEmitter<string>;

  constructor () {
    this.runClicked = new EventEmitter<string>();
  }

  ngOnInit() { }
  editorText: string = '';

  ngAfterViewInit() {
    if (isNullOrUndefined(this.editor)) throw new Error('Editor not found)');
    this.editor.setTheme(supportedThemes.monokai);
    this.editor.setMode(supportedModes.javascript);

    // this.editor.getEditor().setOptions({
    //   enableBasicAutocompletion: true
    // });

    this.editor.getEditor().commands.addCommand({
      name: 'showOtherCompletions',
      bindKey: 'Ctrl-.',
      exec: function(editor: AceEditorComponent) { }
    });
  }



  onRunClicked = (event: any) => {
    if (!isNullOrUndefined(this.editor.text)) {
      const userCode = this.editor.text;
      this.runClicked.emit(userCode);
    }
  };
}
