import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcialDetailsComponent } from './offcial-details.component';

describe('OffcialDetailsComponent', () => {
  let component: OffcialDetailsComponent;
  let fixture: ComponentFixture<OffcialDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffcialDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffcialDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
