import { createAction, props } from '@ngrx/store';
import { Token } from 'esprima';

export const loadCodeEditors = createAction(
  '[CodeEditor] Load CodeEditors'
);

export const loadCodeEditorsSuccess = createAction(
  '[CodeEditor] Load CodeEditors Success',
  props<{ data: any }>()
);

export const loadCodeEditorsFailure = createAction(
  '[CodeEditor] Load CodeEditors Failure',
  props<{ error: any }>()
);

/**
 * Contains the raw string output of the ACE code editor.
 */
export const codeExecutionRequested = createAction(
  '[CodeEditor] Code Execution Requested',
  props<{ data: string }>()
);

export const newStackOperation = createAction(
  '[Code Editor] New Stack Operation Called on Token',
  props<{ data: any }>()
);

export const newQueueOperation = createAction(
  '[Code Editor] New Queue Operation Called on Token',
  props<{ data: any }>()
);