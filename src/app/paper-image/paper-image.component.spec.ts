import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperImageComponent } from './paper-image.component';

describe('PaperImageComponent', () => {
  let component: PaperImageComponent;
  let fixture: ComponentFixture<PaperImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
