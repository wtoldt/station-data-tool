import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Station, INITIAL_STATION, INITIAL_START_DATE, INITIAL_END_DATE, DataType } from './classes';
import * as moment from 'moment';
import { DailySummariesObservation } from './data-classes/daily-summaries';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public loading = false;
  public selectedEndDate: moment.Moment = INITIAL_END_DATE;
  public selectedStartDate: moment.Moment = INITIAL_START_DATE;
  public selectedStation: Station = INITIAL_STATION;

  public isMetric = true;

  public availableColumns = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Id', field: 'station' },
    { headerName: 'Date', field: 'date' },
    { headerName: 'TMIN (&deg;c)', field: 'tmin' },
    { headerName: 'TMAX (&deg;c)', field: 'tmax' },
    { headerName: 'PRCP (mm)', field: 'prcp' },
  ];

  public data = [
    {
      WSF2: 6.3,
      STATION: 'USW00003812',
      WSF5: 8.9,
      SNOW: 0.0,
      LONGITUDE: -82.5375,
      ELEVATION: 645.3,
      PRCP: 0.0,
      SNWD: 0.0,
      NAME: 'ASHEVILLE AIRPORT, NC US',
      DATE: '2018-08-31',
      WDF2: 190,
      AWND: 1.4,
      WDF5: 180,
      WT01: 1,
      TMAX: 29.4,
      TMIN: 17.8,
      LATITUDE: 35.4319,
    },
    {
      WSF2: 5.4,
      STATION: 'USW00003812',
      WSF5: 6.7,
      SNOW: 0.0,
      LONGITUDE: -82.5375,
      ELEVATION: 645.3,
      PRCP: 0.0,
      SNWD: 0.0,
      NAME: 'ASHEVILLE AIRPORT, NC US',
      DATE: '2018-09-01',
      WDF2: 170,
      AWND: 1.1,
      WDF5: 170,
      WT01: 1,
      TMAX: 30.6,
      WT02: 1,
      TMIN: 18.3,
      LATITUDE: 35.4319,
    },
    {
      WSF2: 6.7,
      STATION: 'USW00003812',
      WSF5: 9.4,
      SNOW: 0.0,
      LONGITUDE: -82.5375,
      ELEVATION: 645.3,
      WT03: 1,
      PRCP: 0.0,
      SNWD: 0.0,
      NAME: 'ASHEVILLE AIRPORT, NC US',
      DATE: '2018-09-02',
      WDF2: 150,
      AWND: 1.6,
      WDF5: 150,
      TMAX: 30.6,
      TMIN: 20.6,
      LATITUDE: 35.4319,
    },
    {
      WSF2: 5.4,
      STATION: 'USW00003812',
      WSF5: 8.1,
      SNOW: 0.0,
      LONGITUDE: -82.5375,
      ELEVATION: 645.3,
      PRCP: 0.0,
      SNWD: 0.0,
      NAME: 'ASHEVILLE AIRPORT, NC US',
      DATE: '2018-09-03',
      WDF2: 160,
      AWND: 1.4,
      WDF5: 130,
      WT01: 1,
      TMAX: 30.6,
      TMIN: 18.9,
      LATITUDE: 35.4319,
    },
    {
      WSF2: 4.0,
      STATION: 'USW00003812',
      WSF5: 5.8,
      SNOW: 0.0,
      LONGITUDE: -82.5375,
      ELEVATION: 645.3,
      WT03: 1,
      PRCP: 0.0,
      SNWD: 0.0,
      NAME: 'ASHEVILLE AIRPORT, NC US',
      DATE: '2018-09-04',
      WDF2: 170,
      AWND: 0.6,
      WDF5: 160,
      TMAX: 30.0,
      TMIN: 18.9,
      LATITUDE: 35.4319,
    },
    {
      WSF2: 5.4,
      STATION: 'USW00003812',
      WSF5: 7.2,
      SNOW: 0.0,
      LONGITUDE: -82.5375,
      ELEVATION: 645.3,
      PRCP: 0.0,
      SNWD: 0.0,
      NAME: 'ASHEVILLE AIRPORT, NC US',
      DATE: '2018-09-05',
      WDF2: 160,
      AWND: 0.9,
      WDF5: 160,
      WT01: 1,
      TMAX: 28.9,
      TMIN: 20.0,
      LATITUDE: 35.4319,
    },
    {
      WSF2: 5.8,
      STATION: 'USW00003812',
      WSF5: 7.2,
      LONGITUDE: -82.5375,
      ELEVATION: 645.3,
      PRCP: 0.0,
      NAME: 'ASHEVILLE AIRPORT, NC US',
      DATE: '2018-09-06',
      WDF2: 170,
      AWND: 1.2,
      WDF5: 150,
      PGTM: 1354,
      TMAX: 30.0,
      TMIN: 19.4,
      LATITUDE: 35.4319,
    },
    {
      WSF2: 4.0,
      STATION: 'USW00003812',
      WSF5: 5.4,
      SNOW: 0.0,
      LONGITUDE: -82.5375,
      ELEVATION: 645.3,
      PRCP: 0.0,
      SNWD: 0.0,
      NAME: 'ASHEVILLE AIRPORT, NC US',
      DATE: '2018-09-07',
      WDF2: 130,
      AWND: 1.2,
      WDF5: 130,
      TMAX: 30.6,
      TAVG: 23.5,
      TMIN: 17.2,
      LATITUDE: 35.4319,
    },
    {
      WSF2: 6.3,
      STATION: 'USW00003812',
      WSF5: 7.2,
      SNOW: 0.0,
      LONGITUDE: -82.5375,
      ELEVATION: 645.3,
      PRCP: 2.8,
      SNWD: 0.0,
      NAME: 'ASHEVILLE AIRPORT, NC US',
      DATE: '2018-09-08',
      WDF2: 180,
      AWND: 0.8,
      WDF5: 180,
      WT01: 1,
      TMAX: 28.9,
      WT02: 1,
      TAVG: 22.7,
      TMIN: 17.8,
      LATITUDE: 35.4319,
    },
    {
      WSF2: 7.6,
      STATION: 'USW00003812',
      WSF5: 10.3,
      SNOW: 0.0,
      LONGITUDE: -82.5375,
      ELEVATION: 645.3,
      PRCP: 0.0,
      SNWD: 0.0,
      NAME: 'ASHEVILLE AIRPORT, NC US',
      DATE: '2018-09-09',
      WDF2: 170,
      AWND: 2.5,
      WDF5: 170,
      WT01: 1,
      TMAX: 30.0,
      WT02: 1,
      TAVG: 23.3,
      TMIN: 18.9,
      LATITUDE: 35.4319,
    },
    {
      WSF2: 8.1,
      STATION: 'USW00003812',
      WSF5: 9.8,
      SNOW: 0.0,
      LONGITUDE: -82.5375,
      ELEVATION: 645.3,
      WT03: 1,
      PRCP: 6.1,
      SNWD: 0.0,
      NAME: 'ASHEVILLE AIRPORT, NC US',
      DATE: '2018-09-10',
      WDF2: 210,
      AWND: 2.2,
      WDF5: 200,
      WT01: 1,
      TMAX: 28.3,
      TAVG: 23.3,
      TMIN: 20.6,
      LATITUDE: 35.4319,
    },
    {
      WSF2: 6.3,
      STATION: 'USW00003812',
      WSF5: 8.5,
      SNOW: 0.0,
      LONGITUDE: -82.5375,
      ELEVATION: 645.3,
      WT03: 1,
      PRCP: 11.7,
      SNWD: 0.0,
      NAME: 'ASHEVILLE AIRPORT, NC US',
      DATE: '2018-09-11',
      WDF2: 160,
      AWND: 1.1,
      WDF5: 170,
      WT01: 1,
      TMAX: 27.8,
      TAVG: 22.4,
      TMIN: 20.6,
      LATITUDE: 35.4319,
    },
    {
      WSF2: 5.8,
      STATION: 'USW00003812',
      WSF5: 7.6,
      SNOW: 0.0,
      LONGITUDE: -82.5375,
      ELEVATION: 645.3,
      PRCP: 0.3,
      SNWD: 0.0,
      NAME: 'ASHEVILLE AIRPORT, NC US',
      DATE: '2018-09-12',
      WDF2: 170,
      AWND: 0.9,
      WDF5: 160,
      WT01: 1,
      TMAX: 28.3,
      WT02: 1,
      TAVG: 23.4,
      TMIN: 20.6,
      LATITUDE: 35.4319,
    },
    {
      WSF2: 5.8,
      STATION: 'USW00003812',
      WSF5: 7.2,
      SNOW: 0.0,
      LONGITUDE: -82.5375,
      ELEVATION: 645.3,
      PRCP: 0.0,
      SNWD: 0.0,
      NAME: 'ASHEVILLE AIRPORT, NC US',
      DATE: '2018-09-13',
      WDF2: 330,
      AWND: 2.3,
      WDF5: 330,
      TMAX: 30.0,
      TAVG: 23.9,
      TMIN: 20.6,
      LATITUDE: 35.4319,
    },
    {
      WSF2: 8.9,
      STATION: 'USW00003812',
      WSF5: 11.2,
      SNOW: 0.0,
      LONGITUDE: -82.5375,
      ELEVATION: 645.3,
      PRCP: 2.5,
      SNWD: 0.0,
      NAME: 'ASHEVILLE AIRPORT, NC US',
      DATE: '2018-09-14',
      WDF2: 340,
      AWND: 4.3,
      WDF5: 330,
      WT01: 1,
      TMAX: 30.0,
      TAVG: 23.7,
      TMIN: 20.0,
      LATITUDE: 35.4319,
    },
    {
      WSF2: 7.2,
      STATION: 'USW00003812',
      WSF5: 10.3,
      SNOW: 0.0,
      LONGITUDE: -82.5375,
      ELEVATION: 645.3,
      PRCP: 0.8,
      WT08: 1,
      SNWD: 0.0,
      NAME: 'ASHEVILLE AIRPORT, NC US',
      DATE: '2018-09-15',
      WDF2: 340,
      AWND: 3.9,
      WDF5: 20,
      WT01: 1,
      TMAX: 24.4,
      TAVG: 23.2,
      TMIN: 21.1,
      LATITUDE: 35.4319,
    },
    {
      WSF2: 8.9,
      STATION: 'USW00003812',
      WSF5: 14.3,
      SNOW: 0.0,
      LONGITUDE: -82.5375,
      ELEVATION: 645.3,
      PRCP: 33.0,
      SNWD: 0.0,
      NAME: 'ASHEVILLE AIRPORT, NC US',
      DATE: '2018-09-16',
      WDF2: 20,
      AWND: 3.8,
      WDF5: 360,
      WT01: 1,
      TMAX: 21.7,
      TAVG: 21.3,
      TMIN: 20.0,
      LATITUDE: 35.4319,
    },
    {
      WSF2: 8.1,
      STATION: 'USW00003812',
      WSF5: 10.3,
      SNOW: 0.0,
      LONGITUDE: -82.5375,
      ELEVATION: 645.3,
      PRCP: 0.3,
      SNWD: 0.0,
      NAME: 'ASHEVILLE AIRPORT, NC US',
      DATE: '2018-09-17',
      WDF2: 210,
      AWND: 3.6,
      WDF5: 200,
      WT01: 1,
      TMAX: 27.8,
      TAVG: 22.6,
      TMIN: 20.0,
      LATITUDE: 35.4319,
    },
    {
      WSF2: 8.9,
      STATION: 'USW00003812',
      WSF5: 10.3,
      SNOW: 0.0,
      LONGITUDE: -82.5375,
      ELEVATION: 645.3,
      PRCP: 0.0,
      SNWD: 0.0,
      NAME: 'ASHEVILLE AIRPORT, NC US',
      DATE: '2018-09-18',
      WDF2: 340,
      AWND: 3.4,
      WDF5: 340,
      WT01: 1,
      TMAX: 27.8,
      TAVG: 23.3,
      TMIN: 17.8,
      LATITUDE: 35.4319,
    },
    {
      WSF2: 8.1,
      STATION: 'USW00003812',
      WSF5: 11.2,
      SNOW: 0.0,
      LONGITUDE: -82.5375,
      ELEVATION: 645.3,
      PRCP: 0.0,
      SNWD: 0.0,
      NAME: 'ASHEVILLE AIRPORT, NC US',
      DATE: '2018-09-19',
      WDF2: 340,
      AWND: 2.3,
      WDF5: 330,
      WT01: 1,
      TMAX: 30.0,
      WT02: 1,
      TAVG: 22.1,
      TMIN: 16.1,
      LATITUDE: 35.4319,
    },
    {
      WSF2: 5.4,
      STATION: 'USW00003812',
      WSF5: 7.2,
      SNOW: 0.0,
      LONGITUDE: -82.5375,
      ELEVATION: 645.3,
      PRCP: 0.0,
      SNWD: 0.0,
      NAME: 'ASHEVILLE AIRPORT, NC US',
      DATE: '2018-09-20',
      WDF2: 150,
      AWND: 1.1,
      WDF5: 170,
      WT01: 1,
      TMAX: 30.0,
      WT02: 1,
      TAVG: 22.3,
      TMIN: 17.2,
      LATITUDE: 35.4319,
    },
    {
      DATE: '2018-09-21',
      STATION: 'USW00003812',
      SNOW: 0.0,
      LONGITUDE: -82.5375,
      TMAX: 28.9,
      ELEVATION: 645.3,
      TAVG: 23.2,
      TMIN: 17.8,
      PRCP: 0.0,
      LATITUDE: 35.4319,
      SNWD: 0.0,
      NAME: 'ASHEVILLE AIRPORT, NC US',
    },
  ];

  constructor(private http: HttpClient) { }

  foo() {
    const url = 'https://www.ncdc.noaa.gov/access-data-service/api/v1/data';
    const params = new HttpParams()
      .append('dataset', 'daily-summaries')
      .append('startDate', this.selectedStartDate.format('YYYY-MM-DD'))
      .append('endDate', moment().format('YYYY-MM-DD'))
      .append('stations', this.selectedStation.id)
      .append('units', 'metric')
      .append('format', 'json');
    this.loading = true;
    this.http.get<DailySummariesObservation[]>(url, { params }).subscribe(foo => {
      console.log(foo);
      this.loading = false;
    });
  }

}
