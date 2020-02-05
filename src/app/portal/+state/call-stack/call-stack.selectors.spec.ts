import * as fromCallStack from './call-stack.reducer';
import { selectCallStackState } from './call-stack.selectors';

describe('CallStack Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCallStackState({
      [fromCallStack.callStackFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
