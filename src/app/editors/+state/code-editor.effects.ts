import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, flatMap, pluck, filter } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as CodeEditorActions from './code-editor.actions';
import { parseScript, Program, Token } from 'esprima';
import { isNullOrUndefined } from 'src/app/utils/is-null-or-undefined';



@Injectable()
export class CodeEditorEffects {

  loadCodeEditors$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(CodeEditorActions.loadCodeEditors),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => CodeEditorActions.loadCodeEditorsSuccess({ data })),
          catchError(error => of(CodeEditorActions.loadCodeEditorsFailure({ error }))))
      )
    );
  });

  codeExecutionRequested$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CodeEditorActions.codeExecutionRequested),
      pluck('data'),
      filter(data => !!data),
      flatMap((data: string) => {
        const program: Program = parseScript(data);
        if (program && program.type === 'Program') {
        }
        if (!isNullOrUndefined(program.body)) return program.body;
        throw new Error('Invalid tokens from parsing code editor input.');
      }),
      map((statements) => CodeEditorActions.newStackOperation({ data: statements }))
    )
  })



  constructor (private actions$: Actions) { }

}
