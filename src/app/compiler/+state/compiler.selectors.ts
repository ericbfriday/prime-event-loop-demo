import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCompiler from './compiler.reducer';

export const selectCompilerState = createFeatureSelector<fromCompiler.State>(
  fromCompiler.compilerFeatureKey
);
