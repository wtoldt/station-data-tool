import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationDataTableComponent } from './station-data-table.component';

describe('StationDataTableComponent', () => {
  let component: StationDataTableComponent;
  let fixture: ComponentFixture<StationDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
