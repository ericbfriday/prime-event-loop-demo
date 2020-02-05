import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCallbackQueue from './callback-queue.reducer';

export const selectCallbackQueueState = createFeatureSelector<fromCallbackQueue.State>(
  fromCallbackQueue.callbackQueueFeatureKey
);
