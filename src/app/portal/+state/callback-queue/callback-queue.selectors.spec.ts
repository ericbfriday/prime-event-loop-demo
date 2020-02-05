import * as fromCallbackQueue from './callback-queue.reducer';
import { selectCallbackQueueState } from './callback-queue.selectors';

describe('CallbackQueue Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCallbackQueueState({
      [fromCallbackQueue.callbackQueueFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
