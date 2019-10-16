import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelUpdateScreenComponent } from './model-update-screen.component';

describe('ModelUpdateScreenComponent', () => {
  let component: ModelUpdateScreenComponent;
  let fixture: ComponentFixture<ModelUpdateScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelUpdateScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelUpdateScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
