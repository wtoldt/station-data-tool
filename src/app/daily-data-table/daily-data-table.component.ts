import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Station, DataType } from '../classes';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DailySummariesCoreDataTypes, DailySummariesObservation, DailySummariesDataTypes, DailySummariesObservation } from '../data-classes/daily-summaries';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-daily-data-table',
  templateUrl: './daily-data-table.component.html',
  styles: []
})
export class DailyDataTableComponent implements OnInit {
  dailySummariesCoreDataTypes = [...DailySummariesCoreDataTypes];
  dailySummariesCoreDataTypesMap: Map<string, DataType>;
  dailySummariesDataTypes = [...DailySummariesDataTypes];
  dailySummariesDataTypesMap: Map<string, DataType>;
  _selectedStation: Station;
  _selectedStartDate: moment.Moment;
  _selectedEndDate: moment.Moment;
  _units = 'metric';
  data = new BehaviorSubject<DailySummariesObservation[]>(undefined);
  url = 'https://www.ncdc.noaa.gov/access-data-service/api/v1/data';

  @Input()
  set selectedStation(station: Station) {
    this._selectedStation = station;
    this.updateData();
  }
  @Input()
  set selectedStartDate(date: moment.Moment) {
    this._selectedStartDate = date;
    this.updateData();
  }
  @Input()
  set selectedEndDate(date: moment.Moment) {
    this._selectedEndDate = date;
    this.updateData();
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.dailySummariesCoreDataTypesMap = new Map<string, DataType>(this.dailySummariesCoreDataTypes
      .map(dt => [dt.id, dt] as [string, DataType]));

    this.dailySummariesDataTypesMap = new Map<string, DataType>(this.dailySummariesDataTypes
      .map(dt => [dt.id, dt] as [string, DataType]));
  }

  updateData(): void {
    if (this._selectedStation && this._selectedStartDate && this._selectedEndDate) {
      this.data.next(undefined);
      this.http.get<DailySummariesObservation[]>(this.url, {params: this.makeHttpParams()})
        .toPromise().then(obs => {
          const correctedObs = obs.map(ob => this.convertToNumber(ob));
          this.data.next(correctedObs);
        });
    }
  }

  setUnits(units: string): void {
    this._units = units;
    this.updateData();
  }

  makeHttpParams(): HttpParams {
    return new HttpParams()
      .append('dataset', 'daily-summaries')
      .append('startDate', this._selectedStartDate.format('YYYY-MM-DD'))
      .append('endDate', this._selectedEndDate.format('YYYY-MM-DD'))
      .append('stations', this._selectedStation.id)
      .append('units', this._units)
      .append('format', 'json');
  }

  private convertToNumber(ob: DailySummariesObservation): DailySummariesObservation {
    let observation = {} as DailySummariesObservation

    Object.entries(ob).forEach(entry => {
      const dataType = this.dailySummariesDataTypesMap.get(entry[0]);      
      if (dataType && dataType.metricUnits) {
        observation[entry[0]] = Number(entry[1]);
      } else {
        observation[entry[0]] = entry[1];
      }
    });

    return observation;
  }

}
