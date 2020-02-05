import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as CallStackActions from './call-stack.actions';



@Injectable()
export class CallStackEffects {

  loadCallStacks$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(CallStackActions.loadCallStacks),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => CallStackActions.loadCallStacksSuccess({ data })),
          catchError(error => of(CallStackActions.loadCallStacksFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
