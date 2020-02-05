import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CodeEditorEffects } from './code-editor.effects';

describe('CodeEditorEffects', () => {
  let actions$: Observable<any>;
  let effects: CodeEditorEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CodeEditorEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<CodeEditorEffects>(CodeEditorEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
