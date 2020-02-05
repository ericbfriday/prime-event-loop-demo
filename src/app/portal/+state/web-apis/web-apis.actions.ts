import { createAction, props } from '@ngrx/store';

export const loadWebApiss = createAction(
  '[WebApis] Load WebApiss'
);

export const loadWebApissSuccess = createAction(
  '[WebApis] Load WebApiss Success',
  props<{ data: any }>()
);

export const loadWebApissFailure = createAction(
  '[WebApis] Load WebApiss Failure',
  props<{ error: any }>()
);
