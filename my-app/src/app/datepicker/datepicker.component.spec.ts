import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdDatepickerPopup } from "./datepicker.component";

describe('DatepickerComponent', () => {
  let component: NgbdDatepickerPopup;
  let fixture: ComponentFixture<NgbdDatepickerPopup>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdDatepickerPopup ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdDatepickerPopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
