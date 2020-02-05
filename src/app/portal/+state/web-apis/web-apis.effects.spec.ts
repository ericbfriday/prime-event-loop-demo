import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { WebApisEffects } from './web-apis.effects';

describe('WebApisEffects', () => {
  let actions$: Observable<any>;
  let effects: WebApisEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WebApisEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<WebApisEffects>(WebApisEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
