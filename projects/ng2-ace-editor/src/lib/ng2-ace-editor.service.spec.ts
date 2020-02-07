import { TestBed } from '@angular/core/testing';

import { Ng2AceEditorService } from './ng2-ace-editor.service';

describe('Ng2AceEditorService', () => {
  let service: Ng2AceEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ng2AceEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
