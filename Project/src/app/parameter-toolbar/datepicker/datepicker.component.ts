import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';
import { MatDatepickerInputEvent } from '@angular/material';

export const MY_FORMATS = {
  parse: {
    dateInput: null,
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styles: [],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
  ]
})
export class DatepickerComponent {
  public dateFormControl = new FormControl();
  public dateHint: string;
  public inputFocused = false;

  @Input()
  set date(date: moment.Moment) {
    this.dateFormControl.setValue(date, {emitEvent: false});
  }

  @Output()
  dateChange = new EventEmitter<moment.Moment>();

  constructor() {
    this.dateFormControl.valueChanges.subscribe((value: moment.Moment) => {
      if (value) {
        this.dateHint = value.isValid ? value.format('YYYY-MM-DD') : undefined;
      }
    });
  }

  onFocus(): void {
    this.inputFocused = true;
  }

  onBlur(): void {
    this.inputFocused = false;
  }

  onDateChange(event: MatDatepickerInputEvent<moment.Moment>): void {
    this.dateHint = undefined;
    if (event.value) {
      this.dateChange.emit(event.value);
    }
  }
}
