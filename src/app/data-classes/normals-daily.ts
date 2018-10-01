import { StationObservation, DataType } from '../classes';

export interface NormalsDailyObservation extends StationObservation {
  DATE: string;
  ELEVATION: number;
  LATITUDE: number;
  LONGITUDE: number;
  NAME: string;
  STATION: string;
  'DLY-CLDD-BASE45': number;
  'DLY-CLDD-BASE50': number;
  'DLY-CLDD-BASE55': number;
  'DLY-CLDD-BASE57': number;
  'DLY-CLDD-BASE60': number;
  'DLY-CLDD-BASE70': number;
  'DLY-CLDD-BASE72': number;
  'DLY-CLDD-NORMAL': number;
  'DLY-DUTR-NORMAL': number;
  'DLY-DUTR-STDDEV': number;
  'DLY-GRDD-BASE40': number;
  'DLY-GRDD-BASE45': number;
  'DLY-GRDD-BASE50': number;
  'DLY-GRDD-BASE55': number;
  'DLY-GRDD-BASE57': number;
  'DLY-GRDD-BASE60': number;
  'DLY-GRDD-BASE65': number;
  'DLY-GRDD-BASE70': number;
  'DLY-GRDD-BASE72': number;
  'DLY-GRDD-TB4886': number;
  'DLY-GRDD-TB5086': number;
  'DLY-HTDD-BASE40': number;
  'DLY-HTDD-BASE45': number;
  'DLY-HTDD-BASE50': number;
  'DLY-HTDD-BASE55': number;
  'DLY-HTDD-BASE57': number;
  'DLY-HTDD-BASE60': number;
  'DLY-HTDD-NORMAL': number;
  'DLY-PRCP-25PCTL': number;
  'DLY-PRCP-50PCTL': number;
  'DLY-PRCP-75PCTL': number;
  'DLY-PRCP-PCTALL-GE001HI': number;
  'DLY-PRCP-PCTALL-GE010HI': string;
  'DLY-PRCP-PCTALL-GE050HI': string;
  'DLY-PRCP-PCTALL-GE100HI': string;
  'DLY-SNOW-25PCTL': number;
  'DLY-SNOW-50PCTL': number;
  'DLY-SNOW-75PCTL': number;
  'DLY-SNOW-PCTALL-GE001TI': string;
  'DLY-SNOW-PCTALL-GE010TI': string;
  'DLY-SNOW-PCTALL-GE030TI': string;
  'DLY-SNOW-PCTALL-GE050TI': string;
  'DLY-SNOW-PCTALL-GE100TI': string;
  'DLY-SNWD-25PCTL': number;
  'DLY-SNWD-50PCTL': number;
  'DLY-SNWD-75PCTL': number;
  'DLY-SNWD-PCTALL-GE001WI': string;
  'DLY-SNWD-PCTALL-GE003WI': string;
  'DLY-SNWD-PCTALL-GE005WI': string;
  'DLY-SNWD-PCTALL-GE010WI': string;
  'DLY-TAVG-NORMAL': number;
  'DLY-TAVG-STDDEV': number;
  'DLY-TMAX-NORMAL': number;
  'DLY-TMAX-STDDEV': number;
  'DLY-TMIN-NORMAL': number;
  'DLY-TMIN-STDDEV': number;
  'MTD-PRCP-NORMAL': number;
  'MTD-SNOW-NORMAL': number;
  'YTD-PRCP-NORMAL': number;
  'YTD-SNOW-NORMAL': number;
  alt: number;
  lat: string;
  lon: string;
  station_info: string;
  station_name: string;
  time: string;
}

export const NormalsDailyDataTypes: DataType[] = [
  {
    id: 'time',
    datasetId: 'normals-daily',
    name: 'time of observation',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'time',
      field: 'time',
    },
    standardColumnDef: {
      headerName: 'time',
      field: 'time',
    },
  },
  {
    id: 'station_name',
    datasetId: 'normals-daily',
    name: 'station identification code',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'station_name',
      field: 'station_name',
    },
    standardColumnDef: {
      headerName: 'station_name',
      field: 'station_name',
    },
  },
  {
    id: 'station_info',
    datasetId: 'normals-daily',
    name: 'name of the station',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'station_info',
      field: 'station_info',
    },
    standardColumnDef: {
      headerName: 'station_info',
      field: 'station_info',
    },
  },
  {
    id: 'lon',
    datasetId: 'normals-daily',
    name: 'GEOPHYSICAL-POINT-OBSERVATION longitude coordinate',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'lon',
      field: 'lon',
    },
    standardColumnDef: {
      headerName: 'lon',
      field: 'lon',
    },
  },
  {
    id: 'lat',
    datasetId: 'normals-daily',
    name: 'GEOPHYSICAL-POINT-OBSERVATION latitude coordinate',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'lat',
      field: 'lat',
    },
    standardColumnDef: {
      headerName: 'lat',
      field: 'lat',
    },
  },
  {
    id: 'alt',
    datasetId: 'normals-daily',
    name: 'the elevation of a geophysical point of observation relative to Mean Sea Level ',
    selected: false,
    metricUnits: 'm',
    standardUnits: 'm',
    metricColumnDef: {
      headerName: 'alt(m)',
      field: 'alt',
    },
    standardColumnDef: {
      headerName: 'alt(ft)',
      field: 'alt',
    },
  },
  {
    id: 'YTD-SNOW-NORMAL',
    datasetId: 'normals-daily',
    name: 'Long-term average year-to-date snowfall totals',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'YTD-SNOW-NORMAL',
      field: 'YTD-SNOW-NORMAL',
    },
    standardColumnDef: {
      headerName: 'YTD-SNOW-NORMAL(in)',
      field: 'YTD-SNOW-NORMAL',
    },
  },
  {
    id: 'YTD-PRCP-NORMAL',
    datasetId: 'normals-daily',
    name: 'Long-term average year-to-date precipitation totals',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'YTD-PRCP-NORMAL',
      field: 'YTD-PRCP-NORMAL',
    },
    standardColumnDef: {
      headerName: 'YTD-PRCP-NORMAL(in)',
      field: 'YTD-PRCP-NORMAL',
    },
  },
  {
    id: 'MTD-SNOW-NORMAL',
    datasetId: 'normals-daily',
    name: 'Long-term average month-to-date snowfall totals',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MTD-SNOW-NORMAL',
      field: 'MTD-SNOW-NORMAL',
    },
    standardColumnDef: {
      headerName: 'MTD-SNOW-NORMAL(in)',
      field: 'MTD-SNOW-NORMAL',
    },
  },
  {
    id: 'MTD-PRCP-NORMAL',
    datasetId: 'normals-daily',
    name: 'Long-term average month-to-date precipitation totals',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MTD-PRCP-NORMAL',
      field: 'MTD-PRCP-NORMAL',
    },
    standardColumnDef: {
      headerName: 'MTD-PRCP-NORMAL(in)',
      field: 'MTD-PRCP-NORMAL',
    },
  },
  {
    id: 'DLY-TMIN-STDDEV',
    datasetId: 'normals-daily',
    name: 'Long-term standard deviations of daily minimum temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'DLY-TMIN-STDDEV(&deg;c)',
      field: 'DLY-TMIN-STDDEV',
    },
    standardColumnDef: {
      headerName: 'DLY-TMIN-STDDEV(&deg;f)',
      field: 'DLY-TMIN-STDDEV',
    },
  },
  {
    id: 'DLY-TMIN-NORMAL',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily minimum temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'DLY-TMIN-NORMAL(&deg;c)',
      field: 'DLY-TMIN-NORMAL',
    },
    standardColumnDef: {
      headerName: 'DLY-TMIN-NORMAL(&deg;f)',
      field: 'DLY-TMIN-NORMAL',
    },
  },
  {
    id: 'DLY-TMAX-STDDEV',
    datasetId: 'normals-daily',
    name: 'Long-term standard deviations of daily maximum temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'DLY-TMAX-STDDEV(&deg;c)',
      field: 'DLY-TMAX-STDDEV',
    },
    standardColumnDef: {
      headerName: 'DLY-TMAX-STDDEV(&deg;f)',
      field: 'DLY-TMAX-STDDEV',
    },
  },
  {
    id: 'DLY-TMAX-NORMAL',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily maximum temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'DLY-TMAX-NORMAL(&deg;c)',
      field: 'DLY-TMAX-NORMAL',
    },
    standardColumnDef: {
      headerName: 'DLY-TMAX-NORMAL(&deg;f)',
      field: 'DLY-TMAX-NORMAL',
    },
  },
  {
    id: 'DLY-TAVG-STDDEV',
    datasetId: 'normals-daily',
    name: 'Long-term standard deviations of daily average temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'DLY-TAVG-STDDEV(&deg;c)',
      field: 'DLY-TAVG-STDDEV',
    },
    standardColumnDef: {
      headerName: 'DLY-TAVG-STDDEV(&deg;f)',
      field: 'DLY-TAVG-STDDEV',
    },
  },
  {
    id: 'DLY-TAVG-NORMAL',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily average temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'DLY-TAVG-NORMAL(&deg;c)',
      field: 'DLY-TAVG-NORMAL',
    },
    standardColumnDef: {
      headerName: 'DLY-TAVG-NORMAL(&deg;f)',
      field: 'DLY-TAVG-NORMAL',
    },
  },
  {
    id: 'DLY-SNWD-PCTALL-GE010WI',
    datasetId: 'normals-daily',
    name: 'Probability of snow depth >= 10 inches for 29-day windows centered on each day ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DLY-SNWD-PCTALL-GE010WI',
      field: 'DLY-SNWD-PCTALL-GE010WI',
    },
    standardColumnDef: {
      headerName: 'DLY-SNWD-PCTALL-GE010WI',
      field: 'DLY-SNWD-PCTALL-GE010WI',
    },
  },
  {
    id: 'DLY-SNWD-PCTALL-GE005WI',
    datasetId: 'normals-daily',
    name: 'Probability of snow depth >= 5 inches for 29-day windows centered on each day o',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DLY-SNWD-PCTALL-GE005WI',
      field: 'DLY-SNWD-PCTALL-GE005WI',
    },
    standardColumnDef: {
      headerName: 'DLY-SNWD-PCTALL-GE005WI',
      field: 'DLY-SNWD-PCTALL-GE005WI',
    },
  },
  {
    id: 'DLY-SNWD-PCTALL-GE003WI',
    datasetId: 'normals-daily',
    name: 'Probability of snow depth >= 3 inches for 29-day windows centered on each day o',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DLY-SNWD-PCTALL-GE003WI',
      field: 'DLY-SNWD-PCTALL-GE003WI',
    },
    standardColumnDef: {
      headerName: 'DLY-SNWD-PCTALL-GE003WI',
      field: 'DLY-SNWD-PCTALL-GE003WI',
    },
  },
  {
    id: 'DLY-SNWD-PCTALL-GE001WI',
    datasetId: 'normals-daily',
    name: 'Probability of snow depth >= 1 inch for 29-day windows centered on each day of ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DLY-SNWD-PCTALL-GE001WI',
      field: 'DLY-SNWD-PCTALL-GE001WI',
    },
    standardColumnDef: {
      headerName: 'DLY-SNWD-PCTALL-GE001WI',
      field: 'DLY-SNWD-PCTALL-GE001WI',
    },
  },
  {
    id: 'DLY-SNWD-75PCTL',
    datasetId: 'normals-daily',
    name: '75th percentiles of daily nonzero snow depth for 29-day windows centered on eac',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DLY-SNWD-75PCTL',
      field: 'DLY-SNWD-75PCTL',
    },
    standardColumnDef: {
      headerName: 'DLY-SNWD-75PCTL(in)',
      field: 'DLY-SNWD-75PCTL',
    },
  },
  {
    id: 'DLY-SNWD-50PCTL',
    datasetId: 'normals-daily',
    name: '50th percentiles of daily nonzero snow depth for 29-day windows centered on eac',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DLY-SNWD-50PCTL',
      field: 'DLY-SNWD-50PCTL',
    },
    standardColumnDef: {
      headerName: 'DLY-SNWD-50PCTL(in)',
      field: 'DLY-SNWD-50PCTL',
    },
  },
  {
    id: 'DLY-SNWD-25PCTL',
    datasetId: 'normals-daily',
    name: '25th percentiles of daily nonzero snow depth for 29-day windows centered on eac',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DLY-SNWD-25PCTL',
      field: 'DLY-SNWD-25PCTL',
    },
    standardColumnDef: {
      headerName: 'DLY-SNWD-25PCTL(in)',
      field: 'DLY-SNWD-25PCTL',
    },
  },
  {
    id: 'DLY-SNOW-PCTALL-GE100TI',
    datasetId: 'normals-daily',
    name: 'Probability of snowfall >= 10 inches for 29-day windows centered on each day of',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DLY-SNOW-PCTALL-GE100TI',
      field: 'DLY-SNOW-PCTALL-GE100TI',
    },
    standardColumnDef: {
      headerName: 'DLY-SNOW-PCTALL-GE100TI',
      field: 'DLY-SNOW-PCTALL-GE100TI',
    },
  },
  {
    id: 'DLY-SNOW-PCTALL-GE050TI',
    datasetId: 'normals-daily',
    name: 'Probability of snowfall >= 5.0 inches for 29-day windows centered on each day o',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DLY-SNOW-PCTALL-GE050TI',
      field: 'DLY-SNOW-PCTALL-GE050TI',
    },
    standardColumnDef: {
      headerName: 'DLY-SNOW-PCTALL-GE050TI',
      field: 'DLY-SNOW-PCTALL-GE050TI',
    },
  },
  {
    id: 'DLY-SNOW-PCTALL-GE030TI',
    datasetId: 'normals-daily',
    name: 'Probability of snowfall >= 3.0 inches for 29-day windows centered on each day o',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DLY-SNOW-PCTALL-GE030TI',
      field: 'DLY-SNOW-PCTALL-GE030TI',
    },
    standardColumnDef: {
      headerName: 'DLY-SNOW-PCTALL-GE030TI',
      field: 'DLY-SNOW-PCTALL-GE030TI',
    },
  },
  {
    id: 'DLY-SNOW-PCTALL-GE010TI',
    datasetId: 'normals-daily',
    name: 'Probability of snowfall >= 1.0 inches for 29-day windows centered on each day o',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DLY-SNOW-PCTALL-GE010TI',
      field: 'DLY-SNOW-PCTALL-GE010TI',
    },
    standardColumnDef: {
      headerName: 'DLY-SNOW-PCTALL-GE010TI',
      field: 'DLY-SNOW-PCTALL-GE010TI',
    },
  },
  {
    id: 'DLY-SNOW-PCTALL-GE001TI',
    datasetId: 'normals-daily',
    name: 'Probability of snowfall >= 0.1 inches for 29-day windows centered on each day o',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DLY-SNOW-PCTALL-GE001TI',
      field: 'DLY-SNOW-PCTALL-GE001TI',
    },
    standardColumnDef: {
      headerName: 'DLY-SNOW-PCTALL-GE001TI',
      field: 'DLY-SNOW-PCTALL-GE001TI',
    },
  },
  {
    id: 'DLY-SNOW-75PCTL',
    datasetId: 'normals-daily',
    name: '75th percentiles of daily nonzero snowfall totals for 29-day windows centered o',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DLY-SNOW-75PCTL',
      field: 'DLY-SNOW-75PCTL',
    },
    standardColumnDef: {
      headerName: 'DLY-SNOW-75PCTL(in)',
      field: 'DLY-SNOW-75PCTL',
    },
  },
  {
    id: 'DLY-SNOW-50PCTL',
    datasetId: 'normals-daily',
    name: '50th percentiles of daily nonzero snowfall totals for 29-day windows centered o',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DLY-SNOW-50PCTL',
      field: 'DLY-SNOW-50PCTL',
    },
    standardColumnDef: {
      headerName: 'DLY-SNOW-50PCTL(in)',
      field: 'DLY-SNOW-50PCTL',
    },
  },
  {
    id: 'DLY-SNOW-25PCTL',
    datasetId: 'normals-daily',
    name: '25th percentiles of daily nonzero snowfall totals for 29-day windows centered o',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DLY-SNOW-25PCTL',
      field: 'DLY-SNOW-25PCTL',
    },
    standardColumnDef: {
      headerName: 'DLY-SNOW-25PCTL(in)',
      field: 'DLY-SNOW-25PCTL',
    },
  },
  {
    id: 'DLY-PRCP-PCTALL-GE100HI',
    datasetId: 'normals-daily',
    name: 'Probability of precipitation >= 1.00 inches for 29-day windows centered on each',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DLY-PRCP-PCTALL-GE100HI',
      field: 'DLY-PRCP-PCTALL-GE100HI',
    },
    standardColumnDef: {
      headerName: 'DLY-PRCP-PCTALL-GE100HI',
      field: 'DLY-PRCP-PCTALL-GE100HI',
    },
  },
  {
    id: 'DLY-PRCP-PCTALL-GE050HI',
    datasetId: 'normals-daily',
    name: 'Probability of precipitation >= 0.50 inches for 29-day windows centered on each',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DLY-PRCP-PCTALL-GE050HI',
      field: 'DLY-PRCP-PCTALL-GE050HI',
    },
    standardColumnDef: {
      headerName: 'DLY-PRCP-PCTALL-GE050HI',
      field: 'DLY-PRCP-PCTALL-GE050HI',
    },
  },
  {
    id: 'DLY-PRCP-PCTALL-GE010HI',
    datasetId: 'normals-daily',
    name: 'Probability of precipitation >= 0.10 inches for 29-day windows centered on each',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DLY-PRCP-PCTALL-GE010HI',
      field: 'DLY-PRCP-PCTALL-GE010HI',
    },
    standardColumnDef: {
      headerName: 'DLY-PRCP-PCTALL-GE010HI',
      field: 'DLY-PRCP-PCTALL-GE010HI',
    },
  },
  {
    id: 'DLY-PRCP-PCTALL-GE001HI',
    datasetId: 'normals-daily',
    name: 'Probability of precipitation >= 0.01 inches for 29-day windows centered on each',
    selected: false,
    metricUnits: '&percent;',
    standardUnits: '&percent;',
    metricColumnDef: {
      headerName: 'DLY-PRCP-PCTALL-GE001HI(&percent;)',
      field: 'DLY-PRCP-PCTALL-GE001HI',
    },
    standardColumnDef: {
      headerName: 'DLY-PRCP-PCTALL-GE001HI(&percent;)',
      field: 'DLY-PRCP-PCTALL-GE001HI',
    },
  },
  {
    id: 'DLY-PRCP-75PCTL',
    datasetId: 'normals-daily',
    name: '75th percentiles of daily nonzero precipitation totals for 29-day windows cente',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DLY-PRCP-75PCTL',
      field: 'DLY-PRCP-75PCTL',
    },
    standardColumnDef: {
      headerName: 'DLY-PRCP-75PCTL(in)',
      field: 'DLY-PRCP-75PCTL',
    },
  },
  {
    id: 'DLY-PRCP-50PCTL',
    datasetId: 'normals-daily',
    name: '50th percentiles of daily nonzero precipitation totals for 29-day windows cente',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DLY-PRCP-50PCTL',
      field: 'DLY-PRCP-50PCTL',
    },
    standardColumnDef: {
      headerName: 'DLY-PRCP-50PCTL(in)',
      field: 'DLY-PRCP-50PCTL',
    },
  },
  {
    id: 'DLY-PRCP-25PCTL',
    datasetId: 'normals-daily',
    name: '25th percentiles of daily nonzero precipitation totals for 29-day windows cente',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DLY-PRCP-25PCTL',
      field: 'DLY-PRCP-25PCTL',
    },
    standardColumnDef: {
      headerName: 'DLY-PRCP-25PCTL(in)',
      field: 'DLY-PRCP-25PCTL',
    },
  },
  {
    id: 'DLY-HTDD-NORMAL',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily heating degree days with base 65F',
    selected: false,
    metricUnits: '&deg;c@18.3',
    standardUnits: '&deg;c@18.3',
    metricColumnDef: {
      headerName: 'DLY-HTDD-NORMAL(&deg;c@18.3)',
      field: 'DLY-HTDD-NORMAL',
    },
    standardColumnDef: {
      headerName: 'DLY-HTDD-NORMAL(&deg;f@65)',
      field: 'DLY-HTDD-NORMAL',
    },
  },
  {
    id: 'DLY-HTDD-BASE60',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily heating degree days with base 60F',
    selected: false,
    metricUnits: '&deg;c@15.6',
    standardUnits: '&deg;c@15.6',
    metricColumnDef: {
      headerName: 'DLY-HTDD-BASE60(&deg;c@15.6)',
      field: 'DLY-HTDD-BASE60',
    },
    standardColumnDef: {
      headerName: 'DLY-HTDD-BASE60(&deg;f@60)',
      field: 'DLY-HTDD-BASE60',
    },
  },
  {
    id: 'DLY-HTDD-BASE57',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily heating degree days with base 57F',
    selected: false,
    metricUnits: '&deg;c@13.9',
    standardUnits: '&deg;c@13.9',
    metricColumnDef: {
      headerName: 'DLY-HTDD-BASE57(&deg;c@13.9)',
      field: 'DLY-HTDD-BASE57',
    },
    standardColumnDef: {
      headerName: 'DLY-HTDD-BASE57(&deg;f@57)',
      field: 'DLY-HTDD-BASE57',
    },
  },
  {
    id: 'DLY-HTDD-BASE55',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily heating degree days with base 55F',
    selected: false,
    metricUnits: '&deg;c@12.8',
    standardUnits: '&deg;c@12.8',
    metricColumnDef: {
      headerName: 'DLY-HTDD-BASE55(&deg;c@12.8)',
      field: 'DLY-HTDD-BASE55',
    },
    standardColumnDef: {
      headerName: 'DLY-HTDD-BASE55(&deg;f@55)',
      field: 'DLY-HTDD-BASE55',
    },
  },
  {
    id: 'DLY-HTDD-BASE50',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily heating degree days with base 50F',
    selected: false,
    metricUnits: '&deg;c@10.0',
    standardUnits: '&deg;c@10.0',
    metricColumnDef: {
      headerName: 'DLY-HTDD-BASE50(&deg;c@10.0)',
      field: 'DLY-HTDD-BASE50',
    },
    standardColumnDef: {
      headerName: 'DLY-HTDD-BASE50(&deg;f@50)',
      field: 'DLY-HTDD-BASE50',
    },
  },
  {
    id: 'DLY-HTDD-BASE45',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily heating degree days with base 45F',
    selected: false,
    metricUnits: '&deg;c@7.2',
    standardUnits: '&deg;c@7.2',
    metricColumnDef: {
      headerName: 'DLY-HTDD-BASE45(&deg;c@7.2)',
      field: 'DLY-HTDD-BASE45',
    },
    standardColumnDef: {
      headerName: 'DLY-HTDD-BASE45(&deg;f@45)',
      field: 'DLY-HTDD-BASE45',
    },
  },
  {
    id: 'DLY-HTDD-BASE40',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily heating degree days with base 40F',
    selected: false,
    metricUnits: '&deg;c@4.4',
    standardUnits: '&deg;c@4.4',
    metricColumnDef: {
      headerName: 'DLY-HTDD-BASE40(&deg;c@4.4)',
      field: 'DLY-HTDD-BASE40',
    },
    standardColumnDef: {
      headerName: 'DLY-HTDD-BASE40(&deg;f@40)',
      field: 'DLY-HTDD-BASE40',
    },
  },
  {
    id: 'DLY-GRDD-TB5086',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily growing degree days with truncated bases 50F and 86F',
    selected: false,
    metricUnits: '&deg;c@18.3',
    standardUnits: '&deg;c@18.3',
    metricColumnDef: {
      headerName: 'DLY-GRDD-TB5086(&deg;c@18.3)',
      field: 'DLY-GRDD-TB5086',
    },
    standardColumnDef: {
      headerName: 'DLY-GRDD-TB5086(&deg;f@65)',
      field: 'DLY-GRDD-TB5086',
    },
  },
  {
    id: 'DLY-GRDD-TB4886',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily growing degree days with truncated bases 48F and 86F',
    selected: false,
    metricUnits: '&deg;c@18.3',
    standardUnits: '&deg;c@18.3',
    metricColumnDef: {
      headerName: 'DLY-GRDD-TB4886(&deg;c@18.3)',
      field: 'DLY-GRDD-TB4886',
    },
    standardColumnDef: {
      headerName: 'DLY-GRDD-TB4886(&deg;f@65)',
      field: 'DLY-GRDD-TB4886',
    },
  },
  {
    id: 'DLY-GRDD-BASE72',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily growing degree days with base 72F',
    selected: false,
    metricUnits: '&deg;c@22.2',
    standardUnits: '&deg;c@22.2',
    metricColumnDef: {
      headerName: 'DLY-GRDD-BASE72(&deg;c@22.2)',
      field: 'DLY-GRDD-BASE72',
    },
    standardColumnDef: {
      headerName: 'DLY-GRDD-BASE72(&deg;f@72)',
      field: 'DLY-GRDD-BASE72',
    },
  },
  {
    id: 'DLY-GRDD-BASE70',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily growing degree days with base 70F',
    selected: false,
    metricUnits: '&deg;c@21.1',
    standardUnits: '&deg;c@21.1',
    metricColumnDef: {
      headerName: 'DLY-GRDD-BASE70(&deg;c@21.1)',
      field: 'DLY-GRDD-BASE70',
    },
    standardColumnDef: {
      headerName: 'DLY-GRDD-BASE70(&deg;f@70)',
      field: 'DLY-GRDD-BASE70',
    },
  },
  {
    id: 'DLY-GRDD-BASE65',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily growing degree days with base 65F',
    selected: false,
    metricUnits: '&deg;c@18.3',
    standardUnits: '&deg;c@18.3',
    metricColumnDef: {
      headerName: 'DLY-GRDD-BASE65(&deg;c@18.3)',
      field: 'DLY-GRDD-BASE65',
    },
    standardColumnDef: {
      headerName: 'DLY-GRDD-BASE65(&deg;f@65)',
      field: 'DLY-GRDD-BASE65',
    },
  },
  {
    id: 'DLY-GRDD-BASE60',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily growing degree days with base 60F',
    selected: false,
    metricUnits: '&deg;c@15.6',
    standardUnits: '&deg;c@15.6',
    metricColumnDef: {
      headerName: 'DLY-GRDD-BASE60(&deg;c@15.6)',
      field: 'DLY-GRDD-BASE60',
    },
    standardColumnDef: {
      headerName: 'DLY-GRDD-BASE60(&deg;f@60)',
      field: 'DLY-GRDD-BASE60',
    },
  },
  {
    id: 'DLY-GRDD-BASE57',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily growing degree days with base 57F',
    selected: false,
    metricUnits: '&deg;c@13.9',
    standardUnits: '&deg;c@13.9',
    metricColumnDef: {
      headerName: 'DLY-GRDD-BASE57(&deg;c@13.9)',
      field: 'DLY-GRDD-BASE57',
    },
    standardColumnDef: {
      headerName: 'DLY-GRDD-BASE57(&deg;f@57)',
      field: 'DLY-GRDD-BASE57',
    },
  },
  {
    id: 'DLY-GRDD-BASE55',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily growing degree days with base 55F',
    selected: false,
    metricUnits: '&deg;c@12.8',
    standardUnits: '&deg;c@12.8',
    metricColumnDef: {
      headerName: 'DLY-GRDD-BASE55(&deg;c@12.8)',
      field: 'DLY-GRDD-BASE55',
    },
    standardColumnDef: {
      headerName: 'DLY-GRDD-BASE55(&deg;f@55)',
      field: 'DLY-GRDD-BASE55',
    },
  },
  {
    id: 'DLY-GRDD-BASE50',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily growing degree days with base 50F',
    selected: false,
    metricUnits: '&deg;c@10.0',
    standardUnits: '&deg;c@10.0',
    metricColumnDef: {
      headerName: 'DLY-GRDD-BASE50(&deg;c@10.0)',
      field: 'DLY-GRDD-BASE50',
    },
    standardColumnDef: {
      headerName: 'DLY-GRDD-BASE50(&deg;f@50)',
      field: 'DLY-GRDD-BASE50',
    },
  },
  {
    id: 'DLY-GRDD-BASE45',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily growing degree days with base 45F',
    selected: false,
    metricUnits: '&deg;c@7.2',
    standardUnits: '&deg;c@7.2',
    metricColumnDef: {
      headerName: 'DLY-GRDD-BASE45(&deg;c@7.2)',
      field: 'DLY-GRDD-BASE45',
    },
    standardColumnDef: {
      headerName: 'DLY-GRDD-BASE45(&deg;f@45)',
      field: 'DLY-GRDD-BASE45',
    },
  },
  {
    id: 'DLY-GRDD-BASE40',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily growing degree days with base 40F',
    selected: false,
    metricUnits: '&deg;c@4.4',
    standardUnits: '&deg;c@4.4',
    metricColumnDef: {
      headerName: 'DLY-GRDD-BASE40(&deg;c@4.4)',
      field: 'DLY-GRDD-BASE40',
    },
    standardColumnDef: {
      headerName: 'DLY-GRDD-BASE40(&deg;f@40)',
      field: 'DLY-GRDD-BASE40',
    },
  },
  {
    id: 'DLY-DUTR-STDDEV',
    datasetId: 'normals-daily',
    name: 'Long-term standard deviations of daily diurnal temperature range',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'DLY-DUTR-STDDEV(&deg;c)',
      field: 'DLY-DUTR-STDDEV',
    },
    standardColumnDef: {
      headerName: 'DLY-DUTR-STDDEV(&deg;f)',
      field: 'DLY-DUTR-STDDEV',
    },
  },
  {
    id: 'DLY-DUTR-NORMAL',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily diurnal temperature range',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'DLY-DUTR-NORMAL(&deg;c)',
      field: 'DLY-DUTR-NORMAL',
    },
    standardColumnDef: {
      headerName: 'DLY-DUTR-NORMAL(&deg;f)',
      field: 'DLY-DUTR-NORMAL',
    },
  },
  {
    id: 'DLY-CLDD-NORMAL',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily cooling degree days with base 65F',
    selected: false,
    metricUnits: '&deg;c@18.3',
    standardUnits: '&deg;c@18.3',
    metricColumnDef: {
      headerName: 'DLY-CLDD-NORMAL(&deg;c@18.3)',
      field: 'DLY-CLDD-NORMAL',
    },
    standardColumnDef: {
      headerName: 'DLY-CLDD-NORMAL(&deg;f@65)',
      field: 'DLY-CLDD-NORMAL',
    },
  },
  {
    id: 'DLY-CLDD-BASE72',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily cooling degree days with base 72F',
    selected: false,
    metricUnits: '&deg;c@22.2',
    standardUnits: '&deg;c@22.2',
    metricColumnDef: {
      headerName: 'DLY-CLDD-BASE72(&deg;c@22.2)',
      field: 'DLY-CLDD-BASE72',
    },
    standardColumnDef: {
      headerName: 'DLY-CLDD-BASE72(&deg;f@72)',
      field: 'DLY-CLDD-BASE72',
    },
  },
  {
    id: 'DLY-CLDD-BASE70',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily cooling degree days with base 70F',
    selected: false,
    metricUnits: '&deg;c@21.1',
    standardUnits: '&deg;c@21.1',
    metricColumnDef: {
      headerName: 'DLY-CLDD-BASE70(&deg;c@21.1)',
      field: 'DLY-CLDD-BASE70',
    },
    standardColumnDef: {
      headerName: 'DLY-CLDD-BASE70(&deg;f@70)',
      field: 'DLY-CLDD-BASE70',
    },
  },
  {
    id: 'DLY-CLDD-BASE60',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily cooling degree days with base 60F',
    selected: false,
    metricUnits: '&deg;c@15.6',
    standardUnits: '&deg;c@15.6',
    metricColumnDef: {
      headerName: 'DLY-CLDD-BASE60(&deg;c@15.6)',
      field: 'DLY-CLDD-BASE60',
    },
    standardColumnDef: {
      headerName: 'DLY-CLDD-BASE60(&deg;f@60)',
      field: 'DLY-CLDD-BASE60',
    },
  },
  {
    id: 'DLY-CLDD-BASE57',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily cooling degree days with base 57F',
    selected: false,
    metricUnits: '&deg;c@13.9',
    standardUnits: '&deg;c@13.9',
    metricColumnDef: {
      headerName: 'DLY-CLDD-BASE57(&deg;c@13.9)',
      field: 'DLY-CLDD-BASE57',
    },
    standardColumnDef: {
      headerName: 'DLY-CLDD-BASE57(&deg;f@57)',
      field: 'DLY-CLDD-BASE57',
    },
  },
  {
    id: 'DLY-CLDD-BASE55',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily cooling degree days with base 55F',
    selected: false,
    metricUnits: '&deg;c@12.8',
    standardUnits: '&deg;c@12.8',
    metricColumnDef: {
      headerName: 'DLY-CLDD-BASE55(&deg;c@12.8)',
      field: 'DLY-CLDD-BASE55',
    },
    standardColumnDef: {
      headerName: 'DLY-CLDD-BASE55(&deg;f@55)',
      field: 'DLY-CLDD-BASE55',
    },
  },
  {
    id: 'DLY-CLDD-BASE50',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily cooling degree days with base 50F',
    selected: false,
    metricUnits: '&deg;c@10.0',
    standardUnits: '&deg;c@10.0',
    metricColumnDef: {
      headerName: 'DLY-CLDD-BASE50(&deg;c@10.0)',
      field: 'DLY-CLDD-BASE50',
    },
    standardColumnDef: {
      headerName: 'DLY-CLDD-BASE50(&deg;f@50)',
      field: 'DLY-CLDD-BASE50',
    },
  },
  {
    id: 'DLY-CLDD-BASE45',
    datasetId: 'normals-daily',
    name: 'Long-term averages of daily cooling degree days with base 45F',
    selected: false,
    metricUnits: '&deg;c@7.2',
    standardUnits: '&deg;c@7.2',
    metricColumnDef: {
      headerName: 'DLY-CLDD-BASE45(&deg;c@7.2)',
      field: 'DLY-CLDD-BASE45',
    },
    standardColumnDef: {
      headerName: 'DLY-CLDD-BASE45(&deg;f@45)',
      field: 'DLY-CLDD-BASE45',
    },
  },
];
