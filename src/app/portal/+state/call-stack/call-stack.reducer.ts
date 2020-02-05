import { Action, createReducer, on } from '@ngrx/store';
import * as CallStackActions from './call-stack.actions';

export const callStackFeatureKey = 'callStack';

export interface State {

}

export const initialState: State = {

};

const callStackReducer = createReducer(
  initialState,

  on(CallStackActions.loadCallStacks, state => state),
  on(CallStackActions.loadCallStacksSuccess, (state, action) => state),
  on(CallStackActions.loadCallStacksFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return callStackReducer(state, action);
}
