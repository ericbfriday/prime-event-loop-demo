import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorsContainerComponent } from './editors-container.component';

describe('EditorsContainerComponent', () => {
  let component: EditorsContainerComponent;
  let fixture: ComponentFixture<EditorsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
