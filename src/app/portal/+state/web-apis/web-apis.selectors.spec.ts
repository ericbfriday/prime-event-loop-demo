import * as fromWebApis from './web-apis.reducer';
import { selectWebApisState } from './web-apis.selectors';

describe('WebApis Selectors', () => {
  it('should select the feature state', () => {
    const result = selectWebApisState({
      [fromWebApis.webApisFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
