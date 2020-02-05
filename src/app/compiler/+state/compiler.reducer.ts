import { Action, createReducer, on } from '@ngrx/store';
import * as CompilerActions from './compiler.actions';

export const compilerFeatureKey = 'compiler';

export interface State {

}

export const initialState: State = {

};

const compilerReducer = createReducer(
  initialState,

  on(CompilerActions.loadCompilers, state => state),

);

export function reducer(state: State | undefined, action: Action) {
  return compilerReducer(state, action);
}
