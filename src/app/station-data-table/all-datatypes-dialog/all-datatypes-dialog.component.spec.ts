import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDatatypesDialogComponent } from './all-datatypes-dialog.component';

describe('AllDatatypesDialogComponent', () => {
  let component: AllDatatypesDialogComponent;
  let fixture: ComponentFixture<AllDatatypesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDatatypesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDatatypesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
