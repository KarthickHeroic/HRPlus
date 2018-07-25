import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalPoliciesComponent } from './medical-policies.component';

describe('MedicalPoliciesComponent', () => {
  let component: MedicalPoliciesComponent;
  let fixture: ComponentFixture<MedicalPoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalPoliciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
