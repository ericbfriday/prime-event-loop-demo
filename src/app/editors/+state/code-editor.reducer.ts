import { Action, createReducer, on } from '@ngrx/store';
import * as CodeEditorActions from './code-editor.actions';

export const codeEditorFeatureKey = 'codeEditor';

export interface State {

}

export const initialState: State = {

};

const codeEditorReducer = createReducer(
  initialState,

  on(CodeEditorActions.loadCodeEditors, state => state),
  on(CodeEditorActions.loadCodeEditorsSuccess, (state, action) => state),
  on(CodeEditorActions.loadCodeEditorsFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return codeEditorReducer(state, action);
}
