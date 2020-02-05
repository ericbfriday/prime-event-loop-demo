import { createAction, props } from '@ngrx/store';

export const loadCallStacks = createAction(
  '[CallStack] Load CallStacks'
);

export const loadCallStacksSuccess = createAction(
  '[CallStack] Load CallStacks Success',
  props<{ data: any }>()
);

export const loadCallStacksFailure = createAction(
  '[CallStack] Load CallStacks Failure',
  props<{ error: any }>()
);
