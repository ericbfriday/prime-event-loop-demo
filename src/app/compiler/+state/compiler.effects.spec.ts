import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CompilerEffects } from './compiler.effects';

describe('CompilerEffects', () => {
  let actions$: Observable<any>;
  let effects: CompilerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CompilerEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<CompilerEffects>(CompilerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
