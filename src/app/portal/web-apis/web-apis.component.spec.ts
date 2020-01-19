import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebApisComponent } from './web-apis.component';

describe('WebApisComponent', () => {
  let component: WebApisComponent;
  let fixture: ComponentFixture<WebApisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebApisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
