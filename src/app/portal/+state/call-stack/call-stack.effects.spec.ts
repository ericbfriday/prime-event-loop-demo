import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CallStackEffects } from './call-stack.effects';

describe('CallStackEffects', () => {
  let actions$: Observable<any>;
  let effects: CallStackEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CallStackEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<CallStackEffects>(CallStackEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
