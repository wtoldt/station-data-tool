import * as moment from 'moment';

export class IdNameTuple {
  constructor(
    public id: string,
    public name: string,
  ) { }
}

export class Station extends IdNameTuple { }

export class ColumnDef {
  constructor(
    public field: string,
    public headerName: string,
    public filter?: string,
  ) { }
}

export class DataType {
  constructor(
    public datasetId: string,
    public id: string,
    public metricColumnDef: ColumnDef,
    public metricUnits: string,
    public name: string,
    public selected: boolean,
    public standardColumnDef: ColumnDef,
    public standardUnits: string,
  ) { }
}

export interface DataTypeColumnDef {
  dataType: DataType;
  columnDef: ColumnDef;
  selected: boolean;
}

export interface StationObservation {
  DATE: string;
  ELEVATION: number;
  LATITUDE: number;
  LONGITUDE: number;
  NAME: string;
  STATION: string;
}

export const StationObservationDataTypes: DataType[] = [
  {
    datasetId: null,
    metricUnits: null,
    standardUnits: null,
    id: 'NAME',
    name: 'Name of the station',
    selected: true,
    metricColumnDef: {
      headerName: 'NAME',
      field: 'NAME'
    },
    standardColumnDef: {
      headerName: 'NAME',
      field: 'NAME'
    },
  },
  {
    datasetId: null,
    metricUnits: null,
    standardUnits: null,
    id: 'ID',
    name: 'Id of the station',
    selected: true,
    metricColumnDef: {
      headerName: 'ID',
      field: 'STATION'
    },
    standardColumnDef: {
      headerName: 'ID',
      field: 'STATION'
    },
  },
  {
    datasetId: null,
    metricUnits: null,
    standardUnits: null,
    id: 'DATE',
    name: 'Date the observation was recorded',
    selected: true,
    metricColumnDef: {
      headerName: 'DATE',
      field: 'DATE'
    },
    standardColumnDef: {
      headerName: 'DATE',
      field: 'DATE'
    },
  },
  {
    datasetId: null,
    metricUnits: null,
    standardUnits: null,
    id: 'ELEVATION',
    name: 'Elevation the observation was recorded',
    selected: false,
    metricColumnDef: {
      headerName: 'ELEVATION(m)',
      field: 'ELEVATION'
    },
    standardColumnDef: {
      headerName: 'ELEVATION(ft)',
      field: 'ELEVATION'
    },
  },
  {
    datasetId: null,
    metricUnits: null,
    standardUnits: null,
    id: 'LATITUDE',
    name: 'Latitude',
    selected: false,
    metricColumnDef: {
      headerName: 'LATITUDE',
      field: 'LATITUDE'
    },
    standardColumnDef: {
      headerName: 'LATITUDE',
      field: 'LATITUDE'
    },
  },
  {
    datasetId: null,
    metricUnits: null,
    standardUnits: null,
    id: 'LONGITUDE',
    name: 'Longitude',
    selected: false,
    metricColumnDef: {
      headerName: 'LONGITUDE',
      field: 'LONGITUDE'
    },
    standardColumnDef: {
      headerName: 'LONGITUDE',
      field: 'LONGITUDE'
    },
  },
];

export const INITIAL_STATION: Station = {
  id: 'USW00003812',
  name: 'ASHEVILLE AIRPORT, NC US'
};

export const INITIAL_START_DATE: moment.Moment = moment().subtract(30, 'days');
export const INITIAL_END_DATE: moment.Moment = moment();
