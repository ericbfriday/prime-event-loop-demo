import { createAction, props } from '@ngrx/store';

export const loadCallbackQueues = createAction(
  '[CallbackQueue] Load CallbackQueues'
);

export const loadCallbackQueuesSuccess = createAction(
  '[CallbackQueue] Load CallbackQueues Success',
  props<{ data: any }>()
);

export const loadCallbackQueuesFailure = createAction(
  '[CallbackQueue] Load CallbackQueues Failure',
  props<{ error: any }>()
);
