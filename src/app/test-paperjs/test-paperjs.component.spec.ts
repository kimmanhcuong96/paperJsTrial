import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPaperjsComponent } from './test-paperjs.component';

describe('TestPaperjsComponent', () => {
  let component: TestPaperjsComponent;
  let fixture: ComponentFixture<TestPaperjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPaperjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPaperjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
