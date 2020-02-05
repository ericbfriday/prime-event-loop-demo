import { Action, createReducer, on } from '@ngrx/store';
import * as WebApisActions from './web-apis.actions';

export const webApisFeatureKey = 'webApis';

export interface State {

}

export const initialState: State = {

};

const webApisReducer = createReducer(
  initialState,

  on(WebApisActions.loadWebApiss, state => state),
  on(WebApisActions.loadWebApissSuccess, (state, action) => state),
  on(WebApisActions.loadWebApissFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return webApisReducer(state, action);
}
