import { Action, createReducer, on } from '@ngrx/store';
import * as CallbackQueueActions from './callback-queue.actions';

export const callbackQueueFeatureKey = 'callbackQueue';

export interface State {

}

export const initialState: State = {

};

const callbackQueueReducer = createReducer(
  initialState,

  on(CallbackQueueActions.loadCallbackQueues, state => state),
  on(CallbackQueueActions.loadCallbackQueuesSuccess, (state, action) => state),
  on(CallbackQueueActions.loadCallbackQueuesFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return callbackQueueReducer(state, action);
}
