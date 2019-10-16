import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractScreenComponent } from './extract-screen.component';

describe('ExtractScreenComponent', () => {
  let component: ExtractScreenComponent;
  let fixture: ComponentFixture<ExtractScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtractScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
