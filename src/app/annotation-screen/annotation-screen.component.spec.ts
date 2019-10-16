import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotationScreenComponent } from './annotation-screen.component';

describe('AnnotationScreenComponent', () => {
  let component: AnnotationScreenComponent;
  let fixture: ComponentFixture<AnnotationScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnotationScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
