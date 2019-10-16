import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingScreenComponent } from './setting-screen.component';

describe('SettingScreenComponent', () => {
  let component: SettingScreenComponent;
  let fixture: ComponentFixture<SettingScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
