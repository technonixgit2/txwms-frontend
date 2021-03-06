import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayBookComponent } from './day-book.component';

describe('FilesComponent', () => {
  let component: DayBookComponent;
  let fixture: ComponentFixture<DayBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
