import { StationObservation, DataType } from '../classes';

export interface GlobalSummaryOfTheYearObservation extends StationObservation {
  DATE: string;
  ELEVATION: number;
  LATITUDE: number;
  LONGITUDE: number;
  NAME: string;
  STATION: string;
  AWND: number;
  CDSD: number;
  CLDD: number;
  DP01: string;
  DP05: string;
  DP10: string;
  DP1X: string;
  DSND: string;
  DSNW: string;
  DT00: string;
  DT32: string;
  DX32: string;
  DX70: string;
  DX90: string;
  EMNT: number;
  EMSD: number;
  EMSN: number;
  EMXP: number;
  EMXT: number;
  EVAP: number;
  FZF0: number;
  FZF1: number;
  FZF2: number;
  FZF3: number;
  FZF4: number;
  FZF5: number;
  FZF6: number;
  FZF7: number;
  FZF8: number;
  FZF9: number;
  HDSD: number;
  HN01: number;
  HN02: number;
  HN03: number;
  HN04: number;
  HN05: number;
  HN06: number;
  HN07: number;
  HN08: number;
  HTDD: number;
  HX01: number;
  HX02: number;
  HX03: number;
  HX04: number;
  HX05: number;
  HX06: number;
  HX07: number;
  HX08: number;
  LN01: number;
  LN02: number;
  LN03: number;
  LN04: number;
  LN05: number;
  LN06: number;
  LN07: number;
  LN08: number;
  LX01: number;
  LX02: number;
  LX03: number;
  LX04: number;
  LX05: number;
  LX06: number;
  LX07: number;
  LX08: number;
  MN01: number;
  MN02: number;
  MN03: number;
  MN04: number;
  MN05: number;
  MN06: number;
  MN07: number;
  MN08: number;
  MNPN: number;
  MX01: number;
  MX02: number;
  MX03: number;
  MX04: number;
  MX05: number;
  MX06: number;
  MX07: number;
  MX08: number;
  MXPN: number;
  PRCP: number;
  PSUN: string;
  SNOW: number;
  TAVG: number;
  TIME: string;
  TMAX: number;
  TMIN: number;
  TSUN: string;
  WDF1: string;
  WDF2: string;
  WDF5: string;
  WDFG: string;
  WDFM: string;
  WDMV: number;
  WSF1: number;
  WSF2: number;
  WSF5: number;
  WSFG: number;
  WSFM: number;
}

export const GlobalSummaryOfTheYearDataTypes: DataType[] = [
  {
    id: 'WSFM',
    datasetId: 'global-summary-of-the-year',
    name: 'Maximum Fastest Mile Wind Speed',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'WSFM',
      field: 'WSFM',
    },
    standardColumnDef: {
      headerName: 'WSFM',
      field: 'WSFM',
    },
  },
  {
    id: 'WSFG',
    datasetId: 'global-summary-of-the-year',
    name: 'Peak Gust Wind Speed',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'WSFG',
      field: 'WSFG',
    },
    standardColumnDef: {
      headerName: 'WSFG',
      field: 'WSFG',
    },
  },
  {
    id: 'WSF5',
    datasetId: 'global-summary-of-the-year',
    name: 'Maximum 5 Second Wind Speed',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'WSF5',
      field: 'WSF5',
    },
    standardColumnDef: {
      headerName: 'WSF5',
      field: 'WSF5',
    },
  },
  {
    id: 'WSF2',
    datasetId: 'global-summary-of-the-year',
    name: 'Maximum 2 Minute Wind Speed',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'WSF2',
      field: 'WSF2',
    },
    standardColumnDef: {
      headerName: 'WSF2',
      field: 'WSF2',
    },
  },
  {
    id: 'WSF1',
    datasetId: 'global-summary-of-the-year',
    name: 'Maximum 1 Minute Wind Speed',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'WSF1',
      field: 'WSF1',
    },
    standardColumnDef: {
      headerName: 'WSF1',
      field: 'WSF1',
    },
  },
  {
    id: 'WDMV',
    datasetId: 'global-summary-of-the-year',
    name: 'Total wind movement over evaporation pan',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'WDMV',
      field: 'WDMV',
    },
    standardColumnDef: {
      headerName: 'WDMV',
      field: 'WDMV',
    },
  },
  {
    id: 'WDFM',
    datasetId: 'global-summary-of-the-year',
    name: 'Direction of Maximum Fastest Mile Wind Speed',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'WDFM',
      field: 'WDFM',
    },
    standardColumnDef: {
      headerName: 'WDFM',
      field: 'WDFM',
    },
  },
  {
    id: 'WDFG',
    datasetId: 'global-summary-of-the-year',
    name: 'Direction of Peak Gust Wind Speed',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'WDFG',
      field: 'WDFG',
    },
    standardColumnDef: {
      headerName: 'WDFG',
      field: 'WDFG',
    },
  },
  {
    id: 'WDF5',
    datasetId: 'global-summary-of-the-year',
    name: 'Direction of Maximum 5 Second Wind Speed',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'WDF5',
      field: 'WDF5',
    },
    standardColumnDef: {
      headerName: 'WDF5',
      field: 'WDF5',
    },
  },
  {
    id: 'WDF2',
    datasetId: 'global-summary-of-the-year',
    name: 'Direction of Maximum 2 Minute Wind Speed',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'WDF2',
      field: 'WDF2',
    },
    standardColumnDef: {
      headerName: 'WDF2',
      field: 'WDF2',
    },
  },
  {
    id: 'WDF1',
    datasetId: 'global-summary-of-the-year',
    name: 'Direction of Maximum 1 Minute Wind Speed',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'WDF1',
      field: 'WDF1',
    },
    standardColumnDef: {
      headerName: 'WDF1',
      field: 'WDF1',
    },
  },
  {
    id: 'TSUN',
    datasetId: 'global-summary-of-the-year',
    name: 'Total sunshine',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'TSUN',
      field: 'TSUN',
    },
    standardColumnDef: {
      headerName: 'TSUN',
      field: 'TSUN',
    },
  },
  {
    id: 'TMIN',
    datasetId: 'global-summary-of-the-year',
    name: 'Average Minimum Temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'TMIN(&deg;c)',
      field: 'TMIN',
    },
    standardColumnDef: {
      headerName: 'TMIN(&deg;f)',
      field: 'TMIN',
    },
  },
  {
    id: 'TMAX',
    datasetId: 'global-summary-of-the-year',
    name: 'Average Maximum Temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'TMAX(&deg;c)',
      field: 'TMAX',
    },
    standardColumnDef: {
      headerName: 'TMAX(&deg;f)',
      field: 'TMAX',
    },
  },
  {
    id: 'TIME',
    datasetId: 'global-summary-of-the-year',
    name: 'time of observation',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'TIME',
      field: 'TIME',
    },
    standardColumnDef: {
      headerName: 'TIME',
      field: 'TIME',
    },
  },
  {
    id: 'TAVG',
    datasetId: 'global-summary-of-the-year',
    name: 'Average Average Temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'TAVG(&deg;c)',
      field: 'TAVG',
    },
    standardColumnDef: {
      headerName: 'TAVG(&deg;f)',
      field: 'TAVG',
    },
  },
  {
    id: 'STATION',
    datasetId: 'global-summary-of-the-year',
    name: 'Station Identifier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'STATION',
      field: 'STATION',
    },
    standardColumnDef: {
      headerName: 'STATION',
      field: 'STATION',
    },
  },
  {
    id: 'SNOW',
    datasetId: 'global-summary-of-the-year',
    name: 'Total Monthly Snowfall',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SNOW',
      field: 'SNOW',
    },
    standardColumnDef: {
      headerName: 'SNOW',
      field: 'SNOW',
    },
  },
  {
    id: 'PSUN',
    datasetId: 'global-summary-of-the-year',
    name: 'Percent of possible sunshine',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'PSUN',
      field: 'PSUN',
    },
    standardColumnDef: {
      headerName: 'PSUN',
      field: 'PSUN',
    },
  },
  {
    id: 'PRCP',
    datasetId: 'global-summary-of-the-year',
    name: 'Precipitation',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'PRCP',
      field: 'PRCP',
    },
    standardColumnDef: {
      headerName: 'PRCP',
      field: 'PRCP',
    },
  },
  {
    id: 'MXPN',
    datasetId: 'global-summary-of-the-year',
    name: 'Monthly mean maximum evaporation pan water temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MXPN(&deg;c)',
      field: 'MXPN',
    },
    standardColumnDef: {
      headerName: 'MXPN(&deg;f)',
      field: 'MXPN',
    },
  },
  {
    id: 'MX08',
    datasetId: 'global-summary-of-the-year',
    name: 'Monthly mean maximum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MX08(&deg;c)',
      field: 'MX08',
    },
    standardColumnDef: {
      headerName: 'MX08(&deg;f)',
      field: 'MX08',
    },
  },
  {
    id: 'MX07',
    datasetId: 'global-summary-of-the-year',
    name: 'Monthly mean maximum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MX07(&deg;c)',
      field: 'MX07',
    },
    standardColumnDef: {
      headerName: 'MX07(&deg;f)',
      field: 'MX07',
    },
  },
  {
    id: 'MX06',
    datasetId: 'global-summary-of-the-year',
    name: 'Monthly mean maximum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MX06(&deg;c)',
      field: 'MX06',
    },
    standardColumnDef: {
      headerName: 'MX06(&deg;f)',
      field: 'MX06',
    },
  },
  {
    id: 'MX05',
    datasetId: 'global-summary-of-the-year',
    name: 'Monthly mean maximum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MX05(&deg;c)',
      field: 'MX05',
    },
    standardColumnDef: {
      headerName: 'MX05(&deg;f)',
      field: 'MX05',
    },
  },
  {
    id: 'MX04',
    datasetId: 'global-summary-of-the-year',
    name: 'Monthly mean maximum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MX04(&deg;c)',
      field: 'MX04',
    },
    standardColumnDef: {
      headerName: 'MX04(&deg;f)',
      field: 'MX04',
    },
  },
  {
    id: 'MX03',
    datasetId: 'global-summary-of-the-year',
    name: 'Monthly mean maximum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MX03(&deg;c)',
      field: 'MX03',
    },
    standardColumnDef: {
      headerName: 'MX03(&deg;f)',
      field: 'MX03',
    },
  },
  {
    id: 'MX02',
    datasetId: 'global-summary-of-the-year',
    name: 'Monthly mean maximum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MX02(&deg;c)',
      field: 'MX02',
    },
    standardColumnDef: {
      headerName: 'MX02(&deg;f)',
      field: 'MX02',
    },
  },
  {
    id: 'MX01',
    datasetId: 'global-summary-of-the-year',
    name: 'Monthly mean maximum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MX01(&deg;c)',
      field: 'MX01',
    },
    standardColumnDef: {
      headerName: 'MX01(&deg;f)',
      field: 'MX01',
    },
  },
  {
    id: 'MNPN',
    datasetId: 'global-summary-of-the-year',
    name: 'Monthly mean minimum evaporation pan water temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MNPN(&deg;c)',
      field: 'MNPN',
    },
    standardColumnDef: {
      headerName: 'MNPN(&deg;f)',
      field: 'MNPN',
    },
  },
  {
    id: 'MN08',
    datasetId: 'global-summary-of-the-year',
    name: 'Monthly mean minimum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MN08(&deg;c)',
      field: 'MN08',
    },
    standardColumnDef: {
      headerName: 'MN08(&deg;f)',
      field: 'MN08',
    },
  },
  {
    id: 'MN07',
    datasetId: 'global-summary-of-the-year',
    name: 'Monthly mean minimum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MN07(&deg;c)',
      field: 'MN07',
    },
    standardColumnDef: {
      headerName: 'MN07(&deg;f)',
      field: 'MN07',
    },
  },
  {
    id: 'MN06',
    datasetId: 'global-summary-of-the-year',
    name: 'Monthly mean minimum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MN06(&deg;c)',
      field: 'MN06',
    },
    standardColumnDef: {
      headerName: 'MN06(&deg;f)',
      field: 'MN06',
    },
  },
  {
    id: 'MN05',
    datasetId: 'global-summary-of-the-year',
    name: 'Monthly mean minimum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MN05(&deg;c)',
      field: 'MN05',
    },
    standardColumnDef: {
      headerName: 'MN05(&deg;f)',
      field: 'MN05',
    },
  },
  {
    id: 'MN04',
    datasetId: 'global-summary-of-the-year',
    name: 'Monthly mean minimum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MN04(&deg;c)',
      field: 'MN04',
    },
    standardColumnDef: {
      headerName: 'MN04(&deg;f)',
      field: 'MN04',
    },
  },
  {
    id: 'MN03',
    datasetId: 'global-summary-of-the-year',
    name: 'Monthly mean minimum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MN03(&deg;c)',
      field: 'MN03',
    },
    standardColumnDef: {
      headerName: 'MN03(&deg;f)',
      field: 'MN03',
    },
  },
  {
    id: 'MN02',
    datasetId: 'global-summary-of-the-year',
    name: 'Monthly mean minimum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MN02(&deg;c)',
      field: 'MN02',
    },
    standardColumnDef: {
      headerName: 'MN02(&deg;f)',
      field: 'MN02',
    },
  },
  {
    id: 'MN01',
    datasetId: 'global-summary-of-the-year',
    name: 'Monthly mean minimum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MN01(&deg;c)',
      field: 'MN01',
    },
    standardColumnDef: {
      headerName: 'MN01(&deg;f)',
      field: 'MN01',
    },
  },
  {
    id: 'LX08',
    datasetId: 'global-summary-of-the-year',
    name: 'Lowest maximum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'LX08(&deg;c)',
      field: 'LX08',
    },
    standardColumnDef: {
      headerName: 'LX08(&deg;f)',
      field: 'LX08',
    },
  },
  {
    id: 'LX07',
    datasetId: 'global-summary-of-the-year',
    name: 'Lowest maximum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'LX07(&deg;c)',
      field: 'LX07',
    },
    standardColumnDef: {
      headerName: 'LX07(&deg;f)',
      field: 'LX07',
    },
  },
  {
    id: 'LX06',
    datasetId: 'global-summary-of-the-year',
    name: 'Lowest maximum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'LX06(&deg;c)',
      field: 'LX06',
    },
    standardColumnDef: {
      headerName: 'LX06(&deg;f)',
      field: 'LX06',
    },
  },
  {
    id: 'LX05',
    datasetId: 'global-summary-of-the-year',
    name: 'Lowest maximum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'LX05(&deg;c)',
      field: 'LX05',
    },
    standardColumnDef: {
      headerName: 'LX05(&deg;f)',
      field: 'LX05',
    },
  },
  {
    id: 'LX04',
    datasetId: 'global-summary-of-the-year',
    name: 'Lowest maximum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'LX04(&deg;c)',
      field: 'LX04',
    },
    standardColumnDef: {
      headerName: 'LX04(&deg;f)',
      field: 'LX04',
    },
  },
  {
    id: 'LX03',
    datasetId: 'global-summary-of-the-year',
    name: 'Lowest maximum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'LX03(&deg;c)',
      field: 'LX03',
    },
    standardColumnDef: {
      headerName: 'LX03(&deg;f)',
      field: 'LX03',
    },
  },
  {
    id: 'LX02',
    datasetId: 'global-summary-of-the-year',
    name: 'Lowest maximum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'LX02(&deg;c)',
      field: 'LX02',
    },
    standardColumnDef: {
      headerName: 'LX02(&deg;f)',
      field: 'LX02',
    },
  },
  {
    id: 'LX01',
    datasetId: 'global-summary-of-the-year',
    name: 'Lowest maximum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'LX01(&deg;c)',
      field: 'LX01',
    },
    standardColumnDef: {
      headerName: 'LX01(&deg;f)',
      field: 'LX01',
    },
  },
  {
    id: 'LN08',
    datasetId: 'global-summary-of-the-year',
    name: 'Lowest minimum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'LN08(&deg;c)',
      field: 'LN08',
    },
    standardColumnDef: {
      headerName: 'LN08(&deg;f)',
      field: 'LN08',
    },
  },
  {
    id: 'LN07',
    datasetId: 'global-summary-of-the-year',
    name: 'Lowest minimum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'LN07(&deg;c)',
      field: 'LN07',
    },
    standardColumnDef: {
      headerName: 'LN07(&deg;f)',
      field: 'LN07',
    },
  },
  {
    id: 'LN06',
    datasetId: 'global-summary-of-the-year',
    name: 'Lowest minimum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'LN06(&deg;c)',
      field: 'LN06',
    },
    standardColumnDef: {
      headerName: 'LN06(&deg;f)',
      field: 'LN06',
    },
  },
  {
    id: 'LN05',
    datasetId: 'global-summary-of-the-year',
    name: 'Lowest minimum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'LN05(&deg;c)',
      field: 'LN05',
    },
    standardColumnDef: {
      headerName: 'LN05(&deg;f)',
      field: 'LN05',
    },
  },
  {
    id: 'LN04',
    datasetId: 'global-summary-of-the-year',
    name: 'Lowest minimum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'LN04(&deg;c)',
      field: 'LN04',
    },
    standardColumnDef: {
      headerName: 'LN04(&deg;f)',
      field: 'LN04',
    },
  },
  {
    id: 'LN03',
    datasetId: 'global-summary-of-the-year',
    name: 'Lowest minimum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'LN03(&deg;c)',
      field: 'LN03',
    },
    standardColumnDef: {
      headerName: 'LN03(&deg;f)',
      field: 'LN03',
    },
  },
  {
    id: 'LN02',
    datasetId: 'global-summary-of-the-year',
    name: 'Lowest minimum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'LN02(&deg;c)',
      field: 'LN02',
    },
    standardColumnDef: {
      headerName: 'LN02(&deg;f)',
      field: 'LN02',
    },
  },
  {
    id: 'LN01',
    datasetId: 'global-summary-of-the-year',
    name: 'Lowest minimum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'LN01(&deg;c)',
      field: 'LN01',
    },
    standardColumnDef: {
      headerName: 'LN01(&deg;f)',
      field: 'LN01',
    },
  },
  {
    id: 'HX08',
    datasetId: 'global-summary-of-the-year',
    name: 'Highest maximum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'HX08(&deg;c)',
      field: 'HX08',
    },
    standardColumnDef: {
      headerName: 'HX08(&deg;f)',
      field: 'HX08',
    },
  },
  {
    id: 'HX07',
    datasetId: 'global-summary-of-the-year',
    name: 'Highest maximum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'HX07(&deg;c)',
      field: 'HX07',
    },
    standardColumnDef: {
      headerName: 'HX07(&deg;f)',
      field: 'HX07',
    },
  },
  {
    id: 'HX06',
    datasetId: 'global-summary-of-the-year',
    name: 'Highest maximum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'HX06(&deg;c)',
      field: 'HX06',
    },
    standardColumnDef: {
      headerName: 'HX06(&deg;f)',
      field: 'HX06',
    },
  },
  {
    id: 'HX05',
    datasetId: 'global-summary-of-the-year',
    name: 'Highest maximum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'HX05(&deg;c)',
      field: 'HX05',
    },
    standardColumnDef: {
      headerName: 'HX05(&deg;f)',
      field: 'HX05',
    },
  },
  {
    id: 'HX04',
    datasetId: 'global-summary-of-the-year',
    name: 'Highest maximum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'HX04(&deg;c)',
      field: 'HX04',
    },
    standardColumnDef: {
      headerName: 'HX04(&deg;f)',
      field: 'HX04',
    },
  },
  {
    id: 'HX03',
    datasetId: 'global-summary-of-the-year',
    name: 'Highest maximum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'HX03(&deg;c)',
      field: 'HX03',
    },
    standardColumnDef: {
      headerName: 'HX03(&deg;f)',
      field: 'HX03',
    },
  },
  {
    id: 'HX02',
    datasetId: 'global-summary-of-the-year',
    name: 'Highest maximum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'HX02(&deg;c)',
      field: 'HX02',
    },
    standardColumnDef: {
      headerName: 'HX02(&deg;f)',
      field: 'HX02',
    },
  },
  {
    id: 'HX01',
    datasetId: 'global-summary-of-the-year',
    name: 'Highest maximum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'HX01(&deg;c)',
      field: 'HX01',
    },
    standardColumnDef: {
      headerName: 'HX01(&deg;f)',
      field: 'HX01',
    },
  },
  {
    id: 'HTDD',
    datasetId: 'global-summary-of-the-year',
    name: 'Heating Degree Days',
    selected: false,
    metricUnits: '&deg;c@18.3',
    standardUnits: '&deg;c@18.3',
    metricColumnDef: {
      headerName: 'HTDD(&deg;c@18.3)',
      field: 'HTDD',
    },
    standardColumnDef: {
      headerName: 'HTDD(&deg;f@65)',
      field: 'HTDD',
    },
  },
  {
    id: 'HN08',
    datasetId: 'global-summary-of-the-year',
    name: 'Highest minimum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'HN08(&deg;c)',
      field: 'HN08',
    },
    standardColumnDef: {
      headerName: 'HN08(&deg;f)',
      field: 'HN08',
    },
  },
  {
    id: 'HN07',
    datasetId: 'global-summary-of-the-year',
    name: 'Highest minimum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'HN07(&deg;c)',
      field: 'HN07',
    },
    standardColumnDef: {
      headerName: 'HN07(&deg;f)',
      field: 'HN07',
    },
  },
  {
    id: 'HN06',
    datasetId: 'global-summary-of-the-year',
    name: 'Highest minimum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'HN06(&deg;c)',
      field: 'HN06',
    },
    standardColumnDef: {
      headerName: 'HN06(&deg;f)',
      field: 'HN06',
    },
  },
  {
    id: 'HN05',
    datasetId: 'global-summary-of-the-year',
    name: 'Highest minimum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'HN05(&deg;c)',
      field: 'HN05',
    },
    standardColumnDef: {
      headerName: 'HN05(&deg;f)',
      field: 'HN05',
    },
  },
  {
    id: 'HN04',
    datasetId: 'global-summary-of-the-year',
    name: 'Highest minimum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'HN04(&deg;c)',
      field: 'HN04',
    },
    standardColumnDef: {
      headerName: 'HN04(&deg;f)',
      field: 'HN04',
    },
  },
  {
    id: 'HN03',
    datasetId: 'global-summary-of-the-year',
    name: 'Highest minimum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'HN03(&deg;c)',
      field: 'HN03',
    },
    standardColumnDef: {
      headerName: 'HN03(&deg;f)',
      field: 'HN03',
    },
  },
  {
    id: 'HN02',
    datasetId: 'global-summary-of-the-year',
    name: 'Highest minimum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'HN02(&deg;c)',
      field: 'HN02',
    },
    standardColumnDef: {
      headerName: 'HN02(&deg;f)',
      field: 'HN02',
    },
  },
  {
    id: 'HN01',
    datasetId: 'global-summary-of-the-year',
    name: 'Highest minimum soil temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'HN01(&deg;c)',
      field: 'HN01',
    },
    standardColumnDef: {
      headerName: 'HN01(&deg;f)',
      field: 'HN01',
    },
  },
  {
    id: 'HDSD',
    datasetId: 'global-summary-of-the-year',
    name: 'Heating Degree Days Season to TIME',
    selected: false,
    metricUnits: '&deg;c@18.3',
    standardUnits: '&deg;c@18.3',
    metricColumnDef: {
      headerName: 'HDSD(&deg;c@18.3)',
      field: 'HDSD',
    },
    standardColumnDef: {
      headerName: 'HDSD(&deg;f@65)',
      field: 'HDSD',
    },
  },
  {
    id: 'FZF9',
    datasetId: 'global-summary-of-the-year',
    name: 'Last freeze less than or equal to 16F (-8.9C) of the year.',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'FZF9(&deg;c)',
      field: 'FZF9',
    },
    standardColumnDef: {
      headerName: 'FZF9(&deg;f)',
      field: 'FZF9',
    },
  },
  {
    id: 'FZF8',
    datasetId: 'global-summary-of-the-year',
    name: 'Last freeze less than or equal to 20F (-6.7C) of the year.',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'FZF8(&deg;c)',
      field: 'FZF8',
    },
    standardColumnDef: {
      headerName: 'FZF8(&deg;f)',
      field: 'FZF8',
    },
  },
  {
    id: 'FZF7',
    datasetId: 'global-summary-of-the-year',
    name: 'Last freeze less than or equal to 24F (-4.4C) of the year.',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'FZF7(&deg;c)',
      field: 'FZF7',
    },
    standardColumnDef: {
      headerName: 'FZF7(&deg;f)',
      field: 'FZF7',
    },
  },
  {
    id: 'FZF6',
    datasetId: 'global-summary-of-the-year',
    name: 'Last freeze less than or equal to 28F (-2.2C) of the year.',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'FZF6(&deg;c)',
      field: 'FZF6',
    },
    standardColumnDef: {
      headerName: 'FZF6(&deg;f)',
      field: 'FZF6',
    },
  },
  {
    id: 'FZF5',
    datasetId: 'global-summary-of-the-year',
    name: 'Last freeze less than or equal to 32F (0C) of the year.',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'FZF5(&deg;c)',
      field: 'FZF5',
    },
    standardColumnDef: {
      headerName: 'FZF5(&deg;f)',
      field: 'FZF5',
    },
  },
  {
    id: 'FZF4',
    datasetId: 'global-summary-of-the-year',
    name: 'First freeze less than or equal to 16F (-8.9C) of the year.',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'FZF4(&deg;c)',
      field: 'FZF4',
    },
    standardColumnDef: {
      headerName: 'FZF4(&deg;f)',
      field: 'FZF4',
    },
  },
  {
    id: 'FZF3',
    datasetId: 'global-summary-of-the-year',
    name: 'First freeze less than or equal to 20F (-6.7C) of the year.',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'FZF3(&deg;c)',
      field: 'FZF3',
    },
    standardColumnDef: {
      headerName: 'FZF3(&deg;f)',
      field: 'FZF3',
    },
  },
  {
    id: 'FZF2',
    datasetId: 'global-summary-of-the-year',
    name: 'First freeze less than or equal to 24F (-4.4C) of the year.',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'FZF2(&deg;c)',
      field: 'FZF2',
    },
    standardColumnDef: {
      headerName: 'FZF2(&deg;f)',
      field: 'FZF2',
    },
  },
  {
    id: 'FZF1',
    datasetId: 'global-summary-of-the-year',
    name: 'First freeze less than or equal to 28F (-2.2C) of the year.',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'FZF1(&deg;c)',
      field: 'FZF1',
    },
    standardColumnDef: {
      headerName: 'FZF1(&deg;f)',
      field: 'FZF1',
    },
  },
  {
    id: 'FZF0',
    datasetId: 'global-summary-of-the-year',
    name: 'First freeze less than or equal to 32F (0C) of the year.',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'FZF0(&deg;c)',
      field: 'FZF0',
    },
    standardColumnDef: {
      headerName: 'FZF0(&deg;f)',
      field: 'FZF0',
    },
  },
  {
    id: 'EVAP',
    datasetId: 'global-summary-of-the-year',
    name: 'Total Evaporation',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'EVAP',
      field: 'EVAP',
    },
    standardColumnDef: {
      headerName: 'EVAP',
      field: 'EVAP',
    },
  },
  {
    id: 'EMXT',
    datasetId: 'global-summary-of-the-year',
    name: 'Extreme maximum temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'EMXT(&deg;c)',
      field: 'EMXT',
    },
    standardColumnDef: {
      headerName: 'EMXT(&deg;f)',
      field: 'EMXT',
    },
  },
  {
    id: 'EMXP',
    datasetId: 'global-summary-of-the-year',
    name: 'Extreme maximum precipitation',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'EMXP',
      field: 'EMXP',
    },
    standardColumnDef: {
      headerName: 'EMXP',
      field: 'EMXP',
    },
  },
  {
    id: 'EMSN',
    datasetId: 'global-summary-of-the-year',
    name: 'Extreme maximum snowfall',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'EMSN',
      field: 'EMSN',
    },
    standardColumnDef: {
      headerName: 'EMSN',
      field: 'EMSN',
    },
  },
  {
    id: 'EMSD',
    datasetId: 'global-summary-of-the-year',
    name: 'Extreme maximum snow depth',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'EMSD',
      field: 'EMSD',
    },
    standardColumnDef: {
      headerName: 'EMSD',
      field: 'EMSD',
    },
  },
  {
    id: 'EMNT',
    datasetId: 'global-summary-of-the-year',
    name: 'Extreme minimum temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'EMNT(&deg;c)',
      field: 'EMNT',
    },
    standardColumnDef: {
      headerName: 'EMNT(&deg;f)',
      field: 'EMNT',
    },
  },
  {
    id: 'DX90',
    datasetId: 'global-summary-of-the-year',
    name: 'Number days with maximum temperature greater than 90F (32.2C)',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DX90',
      field: 'DX90',
    },
    standardColumnDef: {
      headerName: 'DX90',
      field: 'DX90',
    },
  },
  {
    id: 'DX70',
    datasetId: 'global-summary-of-the-year',
    name: 'Number days with maximum temperature greater than 70F (21.1C)',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DX70',
      field: 'DX70',
    },
    standardColumnDef: {
      headerName: 'DX70',
      field: 'DX70',
    },
  },
  {
    id: 'DX32',
    datasetId: 'global-summary-of-the-year',
    name: 'Number days with maximum temperature less than 32F (0C)',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DX32',
      field: 'DX32',
    },
    standardColumnDef: {
      headerName: 'DX32',
      field: 'DX32',
    },
  },
  {
    id: 'DT32',
    datasetId: 'global-summary-of-the-year',
    name: 'Number days with minimum temperature less than 32F (0C)',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DT32',
      field: 'DT32',
    },
    standardColumnDef: {
      headerName: 'DT32',
      field: 'DT32',
    },
  },
  {
    id: 'DT00',
    datasetId: 'global-summary-of-the-year',
    name: 'Number days with minimum temperature less than 0F (-17.6C)',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DT00',
      field: 'DT00',
    },
    standardColumnDef: {
      headerName: 'DT00',
      field: 'DT00',
    },
  },
  {
    id: 'DSNW',
    datasetId: 'global-summary-of-the-year',
    name: 'Number of days with greater than or equal to 1.0 inch (25.4mm) of snowfall',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DSNW',
      field: 'DSNW',
    },
    standardColumnDef: {
      headerName: 'DSNW',
      field: 'DSNW',
    },
  },
  {
    id: 'DSND',
    datasetId: 'global-summary-of-the-year',
    name: 'Number days with greater than 1.0 inch (25.4mm) of snow depth',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DSND',
      field: 'DSND',
    },
    standardColumnDef: {
      headerName: 'DSND',
      field: 'DSND',
    },
  },
  {
    id: 'DP1X',
    datasetId: 'global-summary-of-the-year',
    name: 'Number days with greater than 1.00 inch (25.4mm) of precipitation',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DP1X',
      field: 'DP1X',
    },
    standardColumnDef: {
      headerName: 'DP1X',
      field: 'DP1X',
    },
  },
  {
    id: 'DP10',
    datasetId: 'global-summary-of-the-year',
    name: 'Number days with greater than 1.0 inch (25.4mm) of precipitation',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DP10',
      field: 'DP10',
    },
    standardColumnDef: {
      headerName: 'DP10',
      field: 'DP10',
    },
  },
  {
    id: 'DP05',
    datasetId: 'global-summary-of-the-year',
    name: 'Number days with greater than 0.5 inch (12.7mm) of precipitation',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DP05',
      field: 'DP05',
    },
    standardColumnDef: {
      headerName: 'DP05',
      field: 'DP05',
    },
  },
  {
    id: 'DP01',
    datasetId: 'global-summary-of-the-year',
    name: 'Number days with greater than 0.1 inch (2.5mm) of precipitation',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DP01',
      field: 'DP01',
    },
    standardColumnDef: {
      headerName: 'DP01',
      field: 'DP01',
    },
  },
  {
    id: 'DATE',
    datasetId: 'global-summary-of-the-year',
    name: 'Date',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DATE',
      field: 'DATE',
    },
    standardColumnDef: {
      headerName: 'DATE',
      field: 'DATE',
    },
  },
  {
    id: 'CLDD',
    datasetId: 'global-summary-of-the-year',
    name: 'Cooling Degree Days',
    selected: false,
    metricUnits: '&deg;c@18.3',
    standardUnits: '&deg;c@18.3',
    metricColumnDef: {
      headerName: 'CLDD(&deg;c@18.3)',
      field: 'CLDD',
    },
    standardColumnDef: {
      headerName: 'CLDD(&deg;f@65)',
      field: 'CLDD',
    },
  },
  {
    id: 'CDSD',
    datasetId: 'global-summary-of-the-year',
    name: 'Cooling Degree Days Season to Date',
    selected: false,
    metricUnits: '&deg;c@18.3',
    standardUnits: '&deg;c@18.3',
    metricColumnDef: {
      headerName: 'CDSD(&deg;c@18.3)',
      field: 'CDSD',
    },
    standardColumnDef: {
      headerName: 'CDSD(&deg;f@65)',
      field: 'CDSD',
    },
  },
  {
    id: 'AWND',
    datasetId: 'global-summary-of-the-year',
    name: 'Average Wind Speed for the month',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'AWND',
      field: 'AWND',
    },
    standardColumnDef: {
      headerName: 'AWND',
      field: 'AWND',
    },
  },
];
