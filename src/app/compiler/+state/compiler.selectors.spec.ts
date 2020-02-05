import * as fromCompiler from './compiler.reducer';
import { selectCompilerState } from './compiler.selectors';

describe('Compiler Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCompilerState({
      [fromCompiler.compilerFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
