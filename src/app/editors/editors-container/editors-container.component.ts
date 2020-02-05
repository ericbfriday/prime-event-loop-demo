import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { codeExecutionRequested } from '../+state/code-editor.actions';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-editors-container',
  templateUrl: './editors-container.component.html',
  styleUrls: [ './editors-container.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorsContainerComponent implements OnInit {
  constructor (private store: Store<any>) { }

  ngOnInit() { }

  onRunClicked = (userCode: string) => {
    ;
    this.store.dispatch(codeExecutionRequested({ data: userCode }));
  };
}
