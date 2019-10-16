import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HitTestingComponent } from './hit-testing.component';

describe('HitTestingComponent', () => {
  let component: HitTestingComponent;
  let fixture: ComponentFixture<HitTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HitTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
