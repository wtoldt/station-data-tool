import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';

import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Station } from '../classes';

@Component({
  selector: 'app-parameter-toolbar',
  templateUrl: './parameter-toolbar.component.html',
  styles: []
})
export class ParameterToolbarComponent implements OnInit {
  @Input()
  set selectedStation(station: Station) {
    this._selectedStation = station;
    if (this.stationInput) {
      this.stationInput.setValue(station, {emitEvent: false});
    }
  }
  @Input()
  set selectedStartDate(startDate: moment.Moment) {
    this._selectedStartDate = startDate;
  }
  @Input()
  set selectedEndDate(endDate: moment.Moment) {
    this._selectedEndDate = endDate;
  }

  @Output()
  public selectedStationChange = new EventEmitter<Station>();
  @Output()
  public selectedStartDateChange = new EventEmitter<string>();
  @Output()
  public selectedEndDateChange = new EventEmitter<string>();

  public _selectedEndDate: moment.Moment;
  public _selectedStartDate: moment.Moment;
  public _selectedStation: Station;
  public stationInput: FormControl;
  public suggestedStations: Observable<Station[]>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.stationInput = new FormControl(this._selectedStation);
    this.stationInput.valueChanges.subscribe(value => {
      // tslint:disable-next-line:max-line-length
      this.suggestedStations = this.http.get<{results: Station[]}>(`https://www.ncdc.noaa.gov/access-search-service/api/v1/autocomplete?text=${value}&field=station&dataset=daily-summaries`).pipe(
        map(response => response.results)
      );
    });
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent): void {
    this.selectedStationChange.emit(
      {
        id: event.option.value.id,
        name: event.option.value.name
      }
    );
  }

  displayStationName(station?: Station): string | undefined {
    return station ? station.name : undefined;
  }
}
