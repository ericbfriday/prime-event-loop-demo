import { NgModule } from '@angular/core';
import { AceEditorComponent } from './component';
import { AceEditorDirective } from './directive';

const list = [
  AceEditorComponent,
  AceEditorDirective
]


@NgModule({
  declarations: [ ...list ],
  imports: [],
  exports: [ ...list ]
})
export class Ng2AceEditorModule { }
