import * as fromCodeEditor from './code-editor.reducer';
import { selectCodeEditorState } from './code-editor.selectors';

describe('CodeEditor Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCodeEditorState({
      [fromCodeEditor.codeEditorFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
