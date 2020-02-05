import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromWebApis from './web-apis.reducer';

export const selectWebApisState = createFeatureSelector<fromWebApis.State>(
  fromWebApis.webApisFeatureKey
);
