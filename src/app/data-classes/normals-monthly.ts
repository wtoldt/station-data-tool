import { StationObservation, DataType } from '../classes';

export interface NormalsMonthlyObservation extends StationObservation {
  DATE: string;
  ELEVATION: number;
  LATITUDE: number;
  LONGITUDE: number;
  NAME: string;
  STATION: string;
  'MLY-CLDD-BASE45': number;
  'MLY-CLDD-BASE50': number;
  'MLY-CLDD-BASE55': number;
  'MLY-CLDD-BASE57': number;
  'MLY-CLDD-BASE60': number;
  'MLY-CLDD-BASE70': number;
  'MLY-CLDD-BASE72': number;
  'MLY-CLDD-NORMAL': number;
  'MLY-DUTR-NORMAL': number;
  'MLY-DUTR-STDDEV': number;
  'MLY-GRDD-BASE40': number;
  'MLY-GRDD-BASE45': number;
  'MLY-GRDD-BASE50': number;
  'MLY-GRDD-BASE55': number;
  'MLY-GRDD-BASE57': number;
  'MLY-GRDD-BASE60': number;
  'MLY-GRDD-BASE65': number;
  'MLY-GRDD-BASE70': number;
  'MLY-GRDD-BASE72': number;
  'MLY-GRDD-TB4886': number;
  'MLY-GRDD-TB5086': number;
  'MLY-HTDD-BASE40': number;
  'MLY-HTDD-BASE45': number;
  'MLY-HTDD-BASE50': number;
  'MLY-HTDD-BASE55': number;
  'MLY-HTDD-BASE57': number;
  'MLY-HTDD-BASE60': number;
  'MLY-HTDD-NORMAL': number;
  'MLY-PRCP-25PCTL': number;
  'MLY-PRCP-50PCTL': number;
  'MLY-PRCP-75PCTL': number;
  'MLY-PRCP-AVGNDS-GE001HI': number;
  'MLY-PRCP-AVGNDS-GE010HI': number;
  'MLY-PRCP-AVGNDS-GE050HI': number;
  'MLY-PRCP-AVGNDS-GE100HI': number;
  'MLY-PRCP-NORMAL': number;
  'MLY-SNOW-25PCTL': number;
  'MLY-SNOW-50PCTL': number;
  'MLY-SNOW-75PCTL': number;
  'MLY-SNOW-AVGNDS-GE001TI': number;
  'MLY-SNOW-AVGNDS-GE010TI': number;
  'MLY-SNOW-AVGNDS-GE030TI': number;
  'MLY-SNOW-AVGNDS-GE050TI': number;
  'MLY-SNOW-AVGNDS-GE100TI': number;
  'MLY-SNOW-NORMAL': number;
  'MLY-SNWD-AVGNDS-GE001WI': number;
  'MLY-SNWD-AVGNDS-GE003WI': number;
  'MLY-SNWD-AVGNDS-GE005WI': number;
  'MLY-SNWD-AVGNDS-GE010WI': number;
  'MLY-TAVG-NORMAL': number;
  'MLY-TAVG-STDDEV': number;
  'MLY-TMAX-AVGNDS-GRTH040': string;
  'MLY-TMAX-AVGNDS-GRTH050': number;
  'MLY-TMAX-AVGNDS-GRTH060': string;
  'MLY-TMAX-AVGNDS-GRTH070': string;
  'MLY-TMAX-AVGNDS-GRTH080': string;
  'MLY-TMAX-AVGNDS-GRTH090': number;
  'MLY-TMAX-AVGNDS-GRTH100': number;
  'MLY-TMAX-AVGNDS-LSTH032': number;
  'MLY-TMAX-NORMAL': number;
  'MLY-TMAX-STDDEV': number;
  'MLY-TMIN-AVGNDS-LSTH000': number;
  'MLY-TMIN-AVGNDS-LSTH010': string;
  'MLY-TMIN-AVGNDS-LSTH020': string;
  'MLY-TMIN-AVGNDS-LSTH032': number;
  'MLY-TMIN-AVGNDS-LSTH040': string;
  'MLY-TMIN-AVGNDS-LSTH050': string;
  'MLY-TMIN-AVGNDS-LSTH060': string;
  'MLY-TMIN-AVGNDS-LSTH070': string;
  'MLY-TMIN-NORMAL': number;
  'MLY-TMIN-PRBOCC-LSTH016': string;
  'MLY-TMIN-PRBOCC-LSTH020': string;
  'MLY-TMIN-PRBOCC-LSTH024': string;
  'MLY-TMIN-PRBOCC-LSTH028': string;
  'MLY-TMIN-PRBOCC-LSTH032': string;
  'MLY-TMIN-PRBOCC-LSTH036': string;
  'MLY-TMIN-STDDEV': number;
  alt: number;
  lat: string;
  lon: string;
  station_info: string;
  station_name: string;
  time: string;
}

export const NormalsMonthlyDataTypes: DataType[] = [
  {
    id: 'time',
    datasetId: 'normals-monthly',
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
    datasetId: 'normals-monthly',
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
    datasetId: 'normals-monthly',
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
    datasetId: 'normals-monthly',
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
    datasetId: 'normals-monthly',
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
    datasetId: 'normals-monthly',
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
    id: 'MLY-TMIN-STDDEV',
    datasetId: 'normals-monthly',
    name: 'Long-term standard deviations of monthly minimum temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MLY-TMIN-STDDEV(&deg;c)',
      field: 'MLY-TMIN-STDDEV',
    },
    standardColumnDef: {
      headerName: 'MLY-TMIN-STDDEV(&deg;f)',
      field: 'MLY-TMIN-STDDEV',
    },
  },
  {
    id: 'MLY-TMIN-PRBOCC-LSTH036',
    datasetId: 'normals-monthly',
    name: 'probability of 36F or below at least once in the month',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-TMIN-PRBOCC-LSTH036',
      field: 'MLY-TMIN-PRBOCC-LSTH036',
    },
    standardColumnDef: {
      headerName: 'MLY-TMIN-PRBOCC-LSTH036',
      field: 'MLY-TMIN-PRBOCC-LSTH036',
    },
  },
  {
    id: 'MLY-TMIN-PRBOCC-LSTH032',
    datasetId: 'normals-monthly',
    name: 'probability of 32F or below at least once in the month',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-TMIN-PRBOCC-LSTH032',
      field: 'MLY-TMIN-PRBOCC-LSTH032',
    },
    standardColumnDef: {
      headerName: 'MLY-TMIN-PRBOCC-LSTH032',
      field: 'MLY-TMIN-PRBOCC-LSTH032',
    },
  },
  {
    id: 'MLY-TMIN-PRBOCC-LSTH028',
    datasetId: 'normals-monthly',
    name: 'probability of 28F or below at least once in the month',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-TMIN-PRBOCC-LSTH028',
      field: 'MLY-TMIN-PRBOCC-LSTH028',
    },
    standardColumnDef: {
      headerName: 'MLY-TMIN-PRBOCC-LSTH028',
      field: 'MLY-TMIN-PRBOCC-LSTH028',
    },
  },
  {
    id: 'MLY-TMIN-PRBOCC-LSTH024',
    datasetId: 'normals-monthly',
    name: 'probability of 24F or below at least once in the month',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-TMIN-PRBOCC-LSTH024',
      field: 'MLY-TMIN-PRBOCC-LSTH024',
    },
    standardColumnDef: {
      headerName: 'MLY-TMIN-PRBOCC-LSTH024',
      field: 'MLY-TMIN-PRBOCC-LSTH024',
    },
  },
  {
    id: 'MLY-TMIN-PRBOCC-LSTH020',
    datasetId: 'normals-monthly',
    name: 'probability of 20F or below at least once in the month',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-TMIN-PRBOCC-LSTH020',
      field: 'MLY-TMIN-PRBOCC-LSTH020',
    },
    standardColumnDef: {
      headerName: 'MLY-TMIN-PRBOCC-LSTH020',
      field: 'MLY-TMIN-PRBOCC-LSTH020',
    },
  },
  {
    id: 'MLY-TMIN-PRBOCC-LSTH016',
    datasetId: 'normals-monthly',
    name: 'probability of 16F or below at least once in the month',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-TMIN-PRBOCC-LSTH016',
      field: 'MLY-TMIN-PRBOCC-LSTH016',
    },
    standardColumnDef: {
      headerName: 'MLY-TMIN-PRBOCC-LSTH016',
      field: 'MLY-TMIN-PRBOCC-LSTH016',
    },
  },
  {
    id: 'MLY-TMIN-NORMAL',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly minimum temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MLY-TMIN-NORMAL(&deg;c)',
      field: 'MLY-TMIN-NORMAL',
    },
    standardColumnDef: {
      headerName: 'MLY-TMIN-NORMAL(&deg;f)',
      field: 'MLY-TMIN-NORMAL',
    },
  },
  {
    id: 'MLY-TMIN-AVGNDS-LSTH070',
    datasetId: 'normals-monthly',
    name: 'Long-term average number of days per month where tmin is less than or equal to ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-TMIN-AVGNDS-LSTH070',
      field: 'MLY-TMIN-AVGNDS-LSTH070',
    },
    standardColumnDef: {
      headerName: 'MLY-TMIN-AVGNDS-LSTH070',
      field: 'MLY-TMIN-AVGNDS-LSTH070',
    },
  },
  {
    id: 'MLY-TMIN-AVGNDS-LSTH060',
    datasetId: 'normals-monthly',
    name: 'Long-term average number of days per month where tmin is less than or equal to ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-TMIN-AVGNDS-LSTH060',
      field: 'MLY-TMIN-AVGNDS-LSTH060',
    },
    standardColumnDef: {
      headerName: 'MLY-TMIN-AVGNDS-LSTH060',
      field: 'MLY-TMIN-AVGNDS-LSTH060',
    },
  },
  {
    id: 'MLY-TMIN-AVGNDS-LSTH050',
    datasetId: 'normals-monthly',
    name: 'Long-term average number of days per month where tmin is less than or equal to ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-TMIN-AVGNDS-LSTH050',
      field: 'MLY-TMIN-AVGNDS-LSTH050',
    },
    standardColumnDef: {
      headerName: 'MLY-TMIN-AVGNDS-LSTH050',
      field: 'MLY-TMIN-AVGNDS-LSTH050',
    },
  },
  {
    id: 'MLY-TMIN-AVGNDS-LSTH040',
    datasetId: 'normals-monthly',
    name: 'Long-term average number of days per month where tmin is less than or equal to ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-TMIN-AVGNDS-LSTH040',
      field: 'MLY-TMIN-AVGNDS-LSTH040',
    },
    standardColumnDef: {
      headerName: 'MLY-TMIN-AVGNDS-LSTH040',
      field: 'MLY-TMIN-AVGNDS-LSTH040',
    },
  },
  {
    id: 'MLY-TMIN-AVGNDS-LSTH032',
    datasetId: 'normals-monthly',
    name: 'Long-term average number of days per month where tmin is less than or equal to ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-TMIN-AVGNDS-LSTH032',
      field: 'MLY-TMIN-AVGNDS-LSTH032',
    },
    standardColumnDef: {
      headerName: 'MLY-TMIN-AVGNDS-LSTH032',
      field: 'MLY-TMIN-AVGNDS-LSTH032',
    },
  },
  {
    id: 'MLY-TMIN-AVGNDS-LSTH020',
    datasetId: 'normals-monthly',
    name: 'Long-term average number of days per month where tmin is less than or equal to ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-TMIN-AVGNDS-LSTH020',
      field: 'MLY-TMIN-AVGNDS-LSTH020',
    },
    standardColumnDef: {
      headerName: 'MLY-TMIN-AVGNDS-LSTH020',
      field: 'MLY-TMIN-AVGNDS-LSTH020',
    },
  },
  {
    id: 'MLY-TMIN-AVGNDS-LSTH010',
    datasetId: 'normals-monthly',
    name: 'Long-term average number of days per month where tmin is less than or equal to ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-TMIN-AVGNDS-LSTH010',
      field: 'MLY-TMIN-AVGNDS-LSTH010',
    },
    standardColumnDef: {
      headerName: 'MLY-TMIN-AVGNDS-LSTH010',
      field: 'MLY-TMIN-AVGNDS-LSTH010',
    },
  },
  {
    id: 'MLY-TMIN-AVGNDS-LSTH000',
    datasetId: 'normals-monthly',
    name: 'Long-term average number of days per month where tmin is less than or equal to ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-TMIN-AVGNDS-LSTH000',
      field: 'MLY-TMIN-AVGNDS-LSTH000',
    },
    standardColumnDef: {
      headerName: 'MLY-TMIN-AVGNDS-LSTH000',
      field: 'MLY-TMIN-AVGNDS-LSTH000',
    },
  },
  {
    id: 'MLY-TMAX-STDDEV',
    datasetId: 'normals-monthly',
    name: 'Long-term standard deviations of monthly maximum temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MLY-TMAX-STDDEV(&deg;c)',
      field: 'MLY-TMAX-STDDEV',
    },
    standardColumnDef: {
      headerName: 'MLY-TMAX-STDDEV(&deg;f)',
      field: 'MLY-TMAX-STDDEV',
    },
  },
  {
    id: 'MLY-TMAX-NORMAL',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly maximum temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MLY-TMAX-NORMAL(&deg;c)',
      field: 'MLY-TMAX-NORMAL',
    },
    standardColumnDef: {
      headerName: 'MLY-TMAX-NORMAL(&deg;f)',
      field: 'MLY-TMAX-NORMAL',
    },
  },
  {
    id: 'MLY-TMAX-AVGNDS-LSTH032',
    datasetId: 'normals-monthly',
    name: 'Long-term average number of days per month where tmax is less than or equal to ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-TMAX-AVGNDS-LSTH032',
      field: 'MLY-TMAX-AVGNDS-LSTH032',
    },
    standardColumnDef: {
      headerName: 'MLY-TMAX-AVGNDS-LSTH032',
      field: 'MLY-TMAX-AVGNDS-LSTH032',
    },
  },
  {
    id: 'MLY-TMAX-AVGNDS-GRTH100',
    datasetId: 'normals-monthly',
    name: 'Long-term average number of days per month where tmax is greater than or equal ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-TMAX-AVGNDS-GRTH100',
      field: 'MLY-TMAX-AVGNDS-GRTH100',
    },
    standardColumnDef: {
      headerName: 'MLY-TMAX-AVGNDS-GRTH100',
      field: 'MLY-TMAX-AVGNDS-GRTH100',
    },
  },
  {
    id: 'MLY-TMAX-AVGNDS-GRTH090',
    datasetId: 'normals-monthly',
    name: 'Long-term average number of days per month where tmax is greater than or equal ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-TMAX-AVGNDS-GRTH090',
      field: 'MLY-TMAX-AVGNDS-GRTH090',
    },
    standardColumnDef: {
      headerName: 'MLY-TMAX-AVGNDS-GRTH090',
      field: 'MLY-TMAX-AVGNDS-GRTH090',
    },
  },
  {
    id: 'MLY-TMAX-AVGNDS-GRTH080',
    datasetId: 'normals-monthly',
    name: 'Long-term average number of days per month where tmax is greater than or equal ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-TMAX-AVGNDS-GRTH080',
      field: 'MLY-TMAX-AVGNDS-GRTH080',
    },
    standardColumnDef: {
      headerName: 'MLY-TMAX-AVGNDS-GRTH080',
      field: 'MLY-TMAX-AVGNDS-GRTH080',
    },
  },
  {
    id: 'MLY-TMAX-AVGNDS-GRTH070',
    datasetId: 'normals-monthly',
    name: 'Long-term average number of days per month where tmax is greater than or equal ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-TMAX-AVGNDS-GRTH070',
      field: 'MLY-TMAX-AVGNDS-GRTH070',
    },
    standardColumnDef: {
      headerName: 'MLY-TMAX-AVGNDS-GRTH070',
      field: 'MLY-TMAX-AVGNDS-GRTH070',
    },
  },
  {
    id: 'MLY-TMAX-AVGNDS-GRTH060',
    datasetId: 'normals-monthly',
    name: 'Long-term average number of days per month where tmax is greater than or equal ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-TMAX-AVGNDS-GRTH060',
      field: 'MLY-TMAX-AVGNDS-GRTH060',
    },
    standardColumnDef: {
      headerName: 'MLY-TMAX-AVGNDS-GRTH060',
      field: 'MLY-TMAX-AVGNDS-GRTH060',
    },
  },
  {
    id: 'MLY-TMAX-AVGNDS-GRTH050',
    datasetId: 'normals-monthly',
    name: 'Long-term average number of days per month where tmax is greater than or equal ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-TMAX-AVGNDS-GRTH050',
      field: 'MLY-TMAX-AVGNDS-GRTH050',
    },
    standardColumnDef: {
      headerName: 'MLY-TMAX-AVGNDS-GRTH050',
      field: 'MLY-TMAX-AVGNDS-GRTH050',
    },
  },
  {
    id: 'MLY-TMAX-AVGNDS-GRTH040',
    datasetId: 'normals-monthly',
    name: 'Long-term average number of days per month where tmax is greater than or equal ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-TMAX-AVGNDS-GRTH040',
      field: 'MLY-TMAX-AVGNDS-GRTH040',
    },
    standardColumnDef: {
      headerName: 'MLY-TMAX-AVGNDS-GRTH040',
      field: 'MLY-TMAX-AVGNDS-GRTH040',
    },
  },
  {
    id: 'MLY-TAVG-STDDEV',
    datasetId: 'normals-monthly',
    name: 'Long-term standard deviations of monthly average temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MLY-TAVG-STDDEV(&deg;c)',
      field: 'MLY-TAVG-STDDEV',
    },
    standardColumnDef: {
      headerName: 'MLY-TAVG-STDDEV(&deg;f)',
      field: 'MLY-TAVG-STDDEV',
    },
  },
  {
    id: 'MLY-TAVG-NORMAL',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly average temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MLY-TAVG-NORMAL(&deg;c)',
      field: 'MLY-TAVG-NORMAL',
    },
    standardColumnDef: {
      headerName: 'MLY-TAVG-NORMAL(&deg;f)',
      field: 'MLY-TAVG-NORMAL',
    },
  },
  {
    id: 'MLY-SNWD-AVGNDS-GE010WI',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of number of days per month with snow depth >= 10 inches',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-SNWD-AVGNDS-GE010WI',
      field: 'MLY-SNWD-AVGNDS-GE010WI',
    },
    standardColumnDef: {
      headerName: 'MLY-SNWD-AVGNDS-GE010WI',
      field: 'MLY-SNWD-AVGNDS-GE010WI',
    },
  },
  {
    id: 'MLY-SNWD-AVGNDS-GE005WI',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of number of days per month with snow depth >= 5 inches',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-SNWD-AVGNDS-GE005WI',
      field: 'MLY-SNWD-AVGNDS-GE005WI',
    },
    standardColumnDef: {
      headerName: 'MLY-SNWD-AVGNDS-GE005WI',
      field: 'MLY-SNWD-AVGNDS-GE005WI',
    },
  },
  {
    id: 'MLY-SNWD-AVGNDS-GE003WI',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of number of days per month with snow depth >= 3 inches',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-SNWD-AVGNDS-GE003WI',
      field: 'MLY-SNWD-AVGNDS-GE003WI',
    },
    standardColumnDef: {
      headerName: 'MLY-SNWD-AVGNDS-GE003WI',
      field: 'MLY-SNWD-AVGNDS-GE003WI',
    },
  },
  {
    id: 'MLY-SNWD-AVGNDS-GE001WI',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of number of days per month with snow depth >= 1 inch',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-SNWD-AVGNDS-GE001WI',
      field: 'MLY-SNWD-AVGNDS-GE001WI',
    },
    standardColumnDef: {
      headerName: 'MLY-SNWD-AVGNDS-GE001WI',
      field: 'MLY-SNWD-AVGNDS-GE001WI',
    },
  },
  {
    id: 'MLY-SNOW-NORMAL',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly snowfall totals',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-SNOW-NORMAL',
      field: 'MLY-SNOW-NORMAL',
    },
    standardColumnDef: {
      headerName: 'MLY-SNOW-NORMAL(in)',
      field: 'MLY-SNOW-NORMAL',
    },
  },
  {
    id: 'MLY-SNOW-AVGNDS-GE100TI',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of number of days per month with Snowfall >= 10.0 inches',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-SNOW-AVGNDS-GE100TI',
      field: 'MLY-SNOW-AVGNDS-GE100TI',
    },
    standardColumnDef: {
      headerName: 'MLY-SNOW-AVGNDS-GE100TI',
      field: 'MLY-SNOW-AVGNDS-GE100TI',
    },
  },
  {
    id: 'MLY-SNOW-AVGNDS-GE050TI',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of number of days per month with Snowfall >= 5.0 inches',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-SNOW-AVGNDS-GE050TI',
      field: 'MLY-SNOW-AVGNDS-GE050TI',
    },
    standardColumnDef: {
      headerName: 'MLY-SNOW-AVGNDS-GE050TI',
      field: 'MLY-SNOW-AVGNDS-GE050TI',
    },
  },
  {
    id: 'MLY-SNOW-AVGNDS-GE030TI',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of number of days per month with Snowfall >= 3.0 inches',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-SNOW-AVGNDS-GE030TI',
      field: 'MLY-SNOW-AVGNDS-GE030TI',
    },
    standardColumnDef: {
      headerName: 'MLY-SNOW-AVGNDS-GE030TI',
      field: 'MLY-SNOW-AVGNDS-GE030TI',
    },
  },
  {
    id: 'MLY-SNOW-AVGNDS-GE010TI',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of number of days per month with Snowfall >= 1.0 inches',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-SNOW-AVGNDS-GE010TI',
      field: 'MLY-SNOW-AVGNDS-GE010TI',
    },
    standardColumnDef: {
      headerName: 'MLY-SNOW-AVGNDS-GE010TI',
      field: 'MLY-SNOW-AVGNDS-GE010TI',
    },
  },
  {
    id: 'MLY-SNOW-AVGNDS-GE001TI',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of number of days per month with Snowfall >= 0.1 inches',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-SNOW-AVGNDS-GE001TI',
      field: 'MLY-SNOW-AVGNDS-GE001TI',
    },
    standardColumnDef: {
      headerName: 'MLY-SNOW-AVGNDS-GE001TI',
      field: 'MLY-SNOW-AVGNDS-GE001TI',
    },
  },
  {
    id: 'MLY-SNOW-75PCTL',
    datasetId: 'normals-monthly',
    name: '75th percentiles of monthly snowfall totals',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-SNOW-75PCTL',
      field: 'MLY-SNOW-75PCTL',
    },
    standardColumnDef: {
      headerName: 'MLY-SNOW-75PCTL(in)',
      field: 'MLY-SNOW-75PCTL',
    },
  },
  {
    id: 'MLY-SNOW-50PCTL',
    datasetId: 'normals-monthly',
    name: '50th percentiles of monthly snowfall totals',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-SNOW-50PCTL',
      field: 'MLY-SNOW-50PCTL',
    },
    standardColumnDef: {
      headerName: 'MLY-SNOW-50PCTL(in)',
      field: 'MLY-SNOW-50PCTL',
    },
  },
  {
    id: 'MLY-SNOW-25PCTL',
    datasetId: 'normals-monthly',
    name: '25th percentiles of monthly snowfall totals',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-SNOW-25PCTL',
      field: 'MLY-SNOW-25PCTL',
    },
    standardColumnDef: {
      headerName: 'MLY-SNOW-25PCTL(in)',
      field: 'MLY-SNOW-25PCTL',
    },
  },
  {
    id: 'MLY-PRCP-NORMAL',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly precipitation totals',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-PRCP-NORMAL',
      field: 'MLY-PRCP-NORMAL',
    },
    standardColumnDef: {
      headerName: 'MLY-PRCP-NORMAL(in)',
      field: 'MLY-PRCP-NORMAL',
    },
  },
  {
    id: 'MLY-PRCP-AVGNDS-GE100HI',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of number of days per month with precipitation >= 1.00 inches',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-PRCP-AVGNDS-GE100HI',
      field: 'MLY-PRCP-AVGNDS-GE100HI',
    },
    standardColumnDef: {
      headerName: 'MLY-PRCP-AVGNDS-GE100HI',
      field: 'MLY-PRCP-AVGNDS-GE100HI',
    },
  },
  {
    id: 'MLY-PRCP-AVGNDS-GE050HI',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of number of days per month with precipitation >= 0.50 inches',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-PRCP-AVGNDS-GE050HI',
      field: 'MLY-PRCP-AVGNDS-GE050HI',
    },
    standardColumnDef: {
      headerName: 'MLY-PRCP-AVGNDS-GE050HI',
      field: 'MLY-PRCP-AVGNDS-GE050HI',
    },
  },
  {
    id: 'MLY-PRCP-AVGNDS-GE010HI',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of number of days per month with precipitation >= 0.10 inches',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-PRCP-AVGNDS-GE010HI',
      field: 'MLY-PRCP-AVGNDS-GE010HI',
    },
    standardColumnDef: {
      headerName: 'MLY-PRCP-AVGNDS-GE010HI',
      field: 'MLY-PRCP-AVGNDS-GE010HI',
    },
  },
  {
    id: 'MLY-PRCP-AVGNDS-GE001HI',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of number of days per month with precipitation >= 0.01 inches',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-PRCP-AVGNDS-GE001HI',
      field: 'MLY-PRCP-AVGNDS-GE001HI',
    },
    standardColumnDef: {
      headerName: 'MLY-PRCP-AVGNDS-GE001HI',
      field: 'MLY-PRCP-AVGNDS-GE001HI',
    },
  },
  {
    id: 'MLY-PRCP-75PCTL',
    datasetId: 'normals-monthly',
    name: '75th percentiles of monthly precipitation totals',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-PRCP-75PCTL',
      field: 'MLY-PRCP-75PCTL',
    },
    standardColumnDef: {
      headerName: 'MLY-PRCP-75PCTL(in)',
      field: 'MLY-PRCP-75PCTL',
    },
  },
  {
    id: 'MLY-PRCP-50PCTL',
    datasetId: 'normals-monthly',
    name: '50th percentiles of monthly precipitation totals',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-PRCP-50PCTL',
      field: 'MLY-PRCP-50PCTL',
    },
    standardColumnDef: {
      headerName: 'MLY-PRCP-50PCTL(in)',
      field: 'MLY-PRCP-50PCTL',
    },
  },
  {
    id: 'MLY-PRCP-25PCTL',
    datasetId: 'normals-monthly',
    name: '25th percentiles of monthly precipitation totals',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MLY-PRCP-25PCTL',
      field: 'MLY-PRCP-25PCTL',
    },
    standardColumnDef: {
      headerName: 'MLY-PRCP-25PCTL(in)',
      field: 'MLY-PRCP-25PCTL',
    },
  },
  {
    id: 'MLY-HTDD-NORMAL',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly heating degree days with base 65F',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MLY-HTDD-NORMAL(&deg;c)',
      field: 'MLY-HTDD-NORMAL',
    },
    standardColumnDef: {
      headerName: 'MLY-HTDD-NORMAL(&deg;f)',
      field: 'MLY-HTDD-NORMAL',
    },
  },
  {
    id: 'MLY-HTDD-BASE60',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly heating degree days with base 60F',
    selected: false,
    metricUnits: '&deg;c@15.6',
    standardUnits: '&deg;c@15.6',
    metricColumnDef: {
      headerName: 'MLY-HTDD-BASE60(&deg;c@15.6)',
      field: 'MLY-HTDD-BASE60',
    },
    standardColumnDef: {
      headerName: 'MLY-HTDD-BASE60(&deg;f@60)',
      field: 'MLY-HTDD-BASE60',
    },
  },
  {
    id: 'MLY-HTDD-BASE57',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly heating degree days with base 57F',
    selected: false,
    metricUnits: '&deg;c@13.9',
    standardUnits: '&deg;c@13.9',
    metricColumnDef: {
      headerName: 'MLY-HTDD-BASE57(&deg;c@13.9)',
      field: 'MLY-HTDD-BASE57',
    },
    standardColumnDef: {
      headerName: 'MLY-HTDD-BASE57(&deg;f@57)',
      field: 'MLY-HTDD-BASE57',
    },
  },
  {
    id: 'MLY-HTDD-BASE55',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly heating degree days with base 55F',
    selected: false,
    metricUnits: '&deg;c@12.8',
    standardUnits: '&deg;c@12.8',
    metricColumnDef: {
      headerName: 'MLY-HTDD-BASE55(&deg;c@12.8)',
      field: 'MLY-HTDD-BASE55',
    },
    standardColumnDef: {
      headerName: 'MLY-HTDD-BASE55(&deg;f@55)',
      field: 'MLY-HTDD-BASE55',
    },
  },
  {
    id: 'MLY-HTDD-BASE50',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly heating degree days with base 50F',
    selected: false,
    metricUnits: '&deg;c@10.0',
    standardUnits: '&deg;c@10.0',
    metricColumnDef: {
      headerName: 'MLY-HTDD-BASE50(&deg;c@10.0)',
      field: 'MLY-HTDD-BASE50',
    },
    standardColumnDef: {
      headerName: 'MLY-HTDD-BASE50(&deg;f@50)',
      field: 'MLY-HTDD-BASE50',
    },
  },
  {
    id: 'MLY-HTDD-BASE45',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly heating degree days with base 45F',
    selected: false,
    metricUnits: '&deg;c@7.2',
    standardUnits: '&deg;c@7.2',
    metricColumnDef: {
      headerName: 'MLY-HTDD-BASE45(&deg;c@7.2)',
      field: 'MLY-HTDD-BASE45',
    },
    standardColumnDef: {
      headerName: 'MLY-HTDD-BASE45(&deg;f@45)',
      field: 'MLY-HTDD-BASE45',
    },
  },
  {
    id: 'MLY-HTDD-BASE40',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly heating degree days with base 40F',
    selected: false,
    metricUnits: '&deg;c@4.4',
    standardUnits: '&deg;c@4.4',
    metricColumnDef: {
      headerName: 'MLY-HTDD-BASE40(&deg;c@4.4)',
      field: 'MLY-HTDD-BASE40',
    },
    standardColumnDef: {
      headerName: 'MLY-HTDD-BASE40(&deg;f@40)',
      field: 'MLY-HTDD-BASE40',
    },
  },
  {
    id: 'MLY-GRDD-TB5086',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly growing degree days with truncated bases 50F and ',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MLY-GRDD-TB5086(&deg;c)',
      field: 'MLY-GRDD-TB5086',
    },
    standardColumnDef: {
      headerName: 'MLY-GRDD-TB5086(&deg;f)',
      field: 'MLY-GRDD-TB5086',
    },
  },
  {
    id: 'MLY-GRDD-TB4886',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly growing degree days with truncated bases 48F and ',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MLY-GRDD-TB4886(&deg;c)',
      field: 'MLY-GRDD-TB4886',
    },
    standardColumnDef: {
      headerName: 'MLY-GRDD-TB4886(&deg;f)',
      field: 'MLY-GRDD-TB4886',
    },
  },
  {
    id: 'MLY-GRDD-BASE72',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly growing degree days with base 72F',
    selected: false,
    metricUnits: '&deg;c@22.2',
    standardUnits: '&deg;c@22.2',
    metricColumnDef: {
      headerName: 'MLY-GRDD-BASE72(&deg;c@22.2)',
      field: 'MLY-GRDD-BASE72',
    },
    standardColumnDef: {
      headerName: 'MLY-GRDD-BASE72(&deg;f@72)',
      field: 'MLY-GRDD-BASE72',
    },
  },
  {
    id: 'MLY-GRDD-BASE70',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly growing degree days with base 70F',
    selected: false,
    metricUnits: '&deg;c@21.1',
    standardUnits: '&deg;c@21.1',
    metricColumnDef: {
      headerName: 'MLY-GRDD-BASE70(&deg;c@21.1)',
      field: 'MLY-GRDD-BASE70',
    },
    standardColumnDef: {
      headerName: 'MLY-GRDD-BASE70(&deg;f@70)',
      field: 'MLY-GRDD-BASE70',
    },
  },
  {
    id: 'MLY-GRDD-BASE65',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly growing degree days with base 65F',
    selected: false,
    metricUnits: '&deg;c@18.3',
    standardUnits: '&deg;c@18.3',
    metricColumnDef: {
      headerName: 'MLY-GRDD-BASE65(&deg;c@18.3)',
      field: 'MLY-GRDD-BASE65',
    },
    standardColumnDef: {
      headerName: 'MLY-GRDD-BASE65(&deg;f@65)',
      field: 'MLY-GRDD-BASE65',
    },
  },
  {
    id: 'MLY-GRDD-BASE60',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly growing degree days with base 60F',
    selected: false,
    metricUnits: '&deg;c@15.6',
    standardUnits: '&deg;c@15.6',
    metricColumnDef: {
      headerName: 'MLY-GRDD-BASE60(&deg;c@15.6)',
      field: 'MLY-GRDD-BASE60',
    },
    standardColumnDef: {
      headerName: 'MLY-GRDD-BASE60(&deg;f@60)',
      field: 'MLY-GRDD-BASE60',
    },
  },
  {
    id: 'MLY-GRDD-BASE57',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly growing degree days with base 57F',
    selected: false,
    metricUnits: '&deg;c@13.9',
    standardUnits: '&deg;c@13.9',
    metricColumnDef: {
      headerName: 'MLY-GRDD-BASE57(&deg;c@13.9)',
      field: 'MLY-GRDD-BASE57',
    },
    standardColumnDef: {
      headerName: 'MLY-GRDD-BASE57(&deg;f@57)',
      field: 'MLY-GRDD-BASE57',
    },
  },
  {
    id: 'MLY-GRDD-BASE55',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly growing degree days with base 55F',
    selected: false,
    metricUnits: '&deg;c@12.8',
    standardUnits: '&deg;c@12.8',
    metricColumnDef: {
      headerName: 'MLY-GRDD-BASE55(&deg;c@12.8)',
      field: 'MLY-GRDD-BASE55',
    },
    standardColumnDef: {
      headerName: 'MLY-GRDD-BASE55(&deg;f@55)',
      field: 'MLY-GRDD-BASE55',
    },
  },
  {
    id: 'MLY-GRDD-BASE50',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly growing degree days with base 50F',
    selected: false,
    metricUnits: '&deg;c@10.0',
    standardUnits: '&deg;c@10.0',
    metricColumnDef: {
      headerName: 'MLY-GRDD-BASE50(&deg;c@10.0)',
      field: 'MLY-GRDD-BASE50',
    },
    standardColumnDef: {
      headerName: 'MLY-GRDD-BASE50(&deg;f@50)',
      field: 'MLY-GRDD-BASE50',
    },
  },
  {
    id: 'MLY-GRDD-BASE45',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly growing degree days with base 45F',
    selected: false,
    metricUnits: '&deg;c@7.2',
    standardUnits: '&deg;c@7.2',
    metricColumnDef: {
      headerName: 'MLY-GRDD-BASE45(&deg;c@7.2)',
      field: 'MLY-GRDD-BASE45',
    },
    standardColumnDef: {
      headerName: 'MLY-GRDD-BASE45(&deg;f@45)',
      field: 'MLY-GRDD-BASE45',
    },
  },
  {
    id: 'MLY-GRDD-BASE40',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly growing degree days with base 40F',
    selected: false,
    metricUnits: '&deg;c@4.4',
    standardUnits: '&deg;c@4.4',
    metricColumnDef: {
      headerName: 'MLY-GRDD-BASE40(&deg;c@4.4)',
      field: 'MLY-GRDD-BASE40',
    },
    standardColumnDef: {
      headerName: 'MLY-GRDD-BASE40(&deg;f@40)',
      field: 'MLY-GRDD-BASE40',
    },
  },
  {
    id: 'MLY-DUTR-STDDEV',
    datasetId: 'normals-monthly',
    name: 'Long-term standard deviations of monthly diurnal temperature range',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MLY-DUTR-STDDEV(&deg;c)',
      field: 'MLY-DUTR-STDDEV',
    },
    standardColumnDef: {
      headerName: 'MLY-DUTR-STDDEV(&deg;f)',
      field: 'MLY-DUTR-STDDEV',
    },
  },
  {
    id: 'MLY-DUTR-NORMAL',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly diurnal temperature range',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MLY-DUTR-NORMAL(&deg;c)',
      field: 'MLY-DUTR-NORMAL',
    },
    standardColumnDef: {
      headerName: 'MLY-DUTR-NORMAL(&deg;f)',
      field: 'MLY-DUTR-NORMAL',
    },
  },
  {
    id: 'MLY-CLDD-NORMAL',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly cooling degree days with base 65F',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MLY-CLDD-NORMAL(&deg;c)',
      field: 'MLY-CLDD-NORMAL',
    },
    standardColumnDef: {
      headerName: 'MLY-CLDD-NORMAL(&deg;f)',
      field: 'MLY-CLDD-NORMAL',
    },
  },
  {
    id: 'MLY-CLDD-BASE72',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly cooling degree days with base 72F',
    selected: false,
    metricUnits: '&deg;c@22.2',
    standardUnits: '&deg;c@22.2',
    metricColumnDef: {
      headerName: 'MLY-CLDD-BASE72(&deg;c@22.2)',
      field: 'MLY-CLDD-BASE72',
    },
    standardColumnDef: {
      headerName: 'MLY-CLDD-BASE72(&deg;f@72)',
      field: 'MLY-CLDD-BASE72',
    },
  },
  {
    id: 'MLY-CLDD-BASE70',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly cooling degree days with base 70F',
    selected: false,
    metricUnits: '&deg;c@21.1',
    standardUnits: '&deg;c@21.1',
    metricColumnDef: {
      headerName: 'MLY-CLDD-BASE70(&deg;c@21.1)',
      field: 'MLY-CLDD-BASE70',
    },
    standardColumnDef: {
      headerName: 'MLY-CLDD-BASE70(&deg;f@70)',
      field: 'MLY-CLDD-BASE70',
    },
  },
  {
    id: 'MLY-CLDD-BASE60',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly cooling degree days with base 60F',
    selected: false,
    metricUnits: '&deg;c@15.6',
    standardUnits: '&deg;c@15.6',
    metricColumnDef: {
      headerName: 'MLY-CLDD-BASE60(&deg;c@15.6)',
      field: 'MLY-CLDD-BASE60',
    },
    standardColumnDef: {
      headerName: 'MLY-CLDD-BASE60(&deg;f@60)',
      field: 'MLY-CLDD-BASE60',
    },
  },
  {
    id: 'MLY-CLDD-BASE57',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly cooling degree days with base 57F',
    selected: false,
    metricUnits: '&deg;c@13.9',
    standardUnits: '&deg;c@13.9',
    metricColumnDef: {
      headerName: 'MLY-CLDD-BASE57(&deg;c@13.9)',
      field: 'MLY-CLDD-BASE57',
    },
    standardColumnDef: {
      headerName: 'MLY-CLDD-BASE57(&deg;f@57)',
      field: 'MLY-CLDD-BASE57',
    },
  },
  {
    id: 'MLY-CLDD-BASE55',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly cooling degree days with base 55F',
    selected: false,
    metricUnits: '&deg;c@12.8',
    standardUnits: '&deg;c@12.8',
    metricColumnDef: {
      headerName: 'MLY-CLDD-BASE55(&deg;c@12.8)',
      field: 'MLY-CLDD-BASE55',
    },
    standardColumnDef: {
      headerName: 'MLY-CLDD-BASE55(&deg;f@55)',
      field: 'MLY-CLDD-BASE55',
    },
  },
  {
    id: 'MLY-CLDD-BASE50',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly cooling degree days with base 50F',
    selected: false,
    metricUnits: '&deg;c@10.0',
    standardUnits: '&deg;c@10.0',
    metricColumnDef: {
      headerName: 'MLY-CLDD-BASE50(&deg;c@10.0)',
      field: 'MLY-CLDD-BASE50',
    },
    standardColumnDef: {
      headerName: 'MLY-CLDD-BASE50(&deg;f@50)',
      field: 'MLY-CLDD-BASE50',
    },
  },
  {
    id: 'MLY-CLDD-BASE45',
    datasetId: 'normals-monthly',
    name: 'Long-term averages of monthly cooling degree days with base 45F',
    selected: false,
    metricUnits: '&deg;c@7.2',
    standardUnits: '&deg;c@7.2',
    metricColumnDef: {
      headerName: 'MLY-CLDD-BASE45(&deg;c@7.2)',
      field: 'MLY-CLDD-BASE45',
    },
    standardColumnDef: {
      headerName: 'MLY-CLDD-BASE45(&deg;f@45)',
      field: 'MLY-CLDD-BASE45',
    },
  },
];
