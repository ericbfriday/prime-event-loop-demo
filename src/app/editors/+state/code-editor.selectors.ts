import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCodeEditor from './code-editor.reducer';

export const selectCodeEditorState = createFeatureSelector<fromCodeEditor.State>(
  fromCodeEditor.codeEditorFeatureKey
);
