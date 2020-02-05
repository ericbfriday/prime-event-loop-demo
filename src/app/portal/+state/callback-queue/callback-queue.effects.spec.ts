import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CallbackQueueEffects } from './callback-queue.effects';

describe('CallbackQueueEffects', () => {
  let actions$: Observable<any>;
  let effects: CallbackQueueEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CallbackQueueEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<CallbackQueueEffects>(CallbackQueueEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
