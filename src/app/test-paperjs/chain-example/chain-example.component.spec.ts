import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainExampleComponent } from './chain-example.component';

describe('ChainExampleComponent', () => {
  let component: ChainExampleComponent;
  let fixture: ComponentFixture<ChainExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChainExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
