import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCallStack from './call-stack.reducer';

export const selectCallStackState = createFeatureSelector<fromCallStack.State>(
  fromCallStack.callStackFeatureKey
);
