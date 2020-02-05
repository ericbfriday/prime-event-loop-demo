import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as WebApisActions from './web-apis.actions';



@Injectable()
export class WebApisEffects {

  loadWebApiss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(WebApisActions.loadWebApiss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => WebApisActions.loadWebApissSuccess({ data })),
          catchError(error => of(WebApisActions.loadWebApissFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
