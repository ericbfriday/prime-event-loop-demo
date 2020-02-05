import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as CallbackQueueActions from './callback-queue.actions';



@Injectable()
export class CallbackQueueEffects {

  loadCallbackQueues$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(CallbackQueueActions.loadCallbackQueues),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => CallbackQueueActions.loadCallbackQueuesSuccess({ data })),
          catchError(error => of(CallbackQueueActions.loadCallbackQueuesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
