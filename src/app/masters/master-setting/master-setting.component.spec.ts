import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterSettingComponent } from './master-setting.component';

describe('MasterSettingComponent', () => {
  let component: MasterSettingComponent;
  let fixture: ComponentFixture<MasterSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
