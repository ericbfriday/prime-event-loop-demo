import { createAction, props } from '@ngrx/store';
import * as ts from 'typescript';
import { CompilerPackageNames } from '../compilerVersions';
import { CompilerApi } from '../CompilerApi';
import { ApiLoadingState } from 'src/app/types';

export const loadCompilers = createAction(
  '[Compiler] Load Compilers'
);


export const setCode = createAction(
  '[Compiler] New Queue Operation Called on Token',
  props<{ code: string }>()
);


export const setApiLoading = createAction(
  '[Compiler] New Queue Operation Called on Token',
  props<{ loadingState: ApiLoadingState }>()
);


export const refreshSourceFile = createAction(
  '[Compiler] New Queue Operation Called on Token',
  props<{
    compilerPackageName: CompilerPackageNames,
    api: CompilerApi
  }>()
);


export const setSelectedNode = createAction(
  '[Compiler] New Queue Operation Called on Token',
  props<{ node: ts.Node }>()
);

export const setOptions = createAction(
  '[Compiler] Set Options',
  props<{ data: any }>()
);

