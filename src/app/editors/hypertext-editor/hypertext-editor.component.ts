import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hypertext-editor',
  templateUrl: './hypertext-editor.component.html',
  styleUrls: ['./hypertext-editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HypertextEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
