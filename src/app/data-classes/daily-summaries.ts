import { StationObservation, DataType } from '../classes';

export interface DailySummariesObservation extends StationObservation {
  DATE: string;
  ELEVATION: number;
  LATITUDE: number;
  LONGITUDE: number;
  NAME: string;
  STATION: string;
  ACMC: string;
  ACMH: string;
  ACSC: string;
  ACSH: string;
  AWND: number;
  DAEV: string;
  DAPR: string;
  DASF: string;
  DATN: string;
  DATX: string;
  DAWM: string;
  DWPR: string;
  EVAP: number;
  FMTM: string;
  FRGB: number;
  FRGT: number;
  FRTH: number;
  GAHT: number;
  MDEV: number;
  MDPR: number;
  MDSF: number;
  MDTN: number;
  MDTX: number;
  MDWM: number;
  MNPN: number;
  MXPN: number;
  PGTM: string;
  PRCP: number;
  PSUN: string;
  SN01: number;
  SN02: number;
  SN03: number;
  SN11: number;
  SN12: number;
  SN13: number;
  SN14: number;
  SN21: number;
  SN22: number;
  SN23: number;
  SN31: number;
  SN32: number;
  SN33: number;
  SN34: number;
  SN35: number;
  SN36: number;
  SN51: number;
  SN52: number;
  SN53: number;
  SN54: number;
  SN55: number;
  SN56: number;
  SN61: number;
  SN72: number;
  SN81: number;
  SN82: number;
  SN83: number;
  SNOW: number;
  SNWD: number;
  SX01: number;
  SX02: number;
  SX03: number;
  SX11: number;
  SX12: number;
  SX13: number;
  SX14: number;
  SX15: number;
  SX17: number;
  SX21: number;
  SX22: number;
  SX23: number;
  SX31: number;
  SX32: number;
  SX33: number;
  SX34: number;
  SX35: number;
  SX36: number;
  SX51: number;
  SX52: number;
  SX53: number;
  SX54: number;
  SX55: number;
  SX56: number;
  SX61: number;
  SX72: number;
  SX81: number;
  SX82: number;
  SX83: number;
  TAVG: number;
  THIC: number;
  TMAX: number;
  TMIN: number;
  TOBS: number;
  TSUN: string;
  WDF1: string;
  WDF2: string;
  WDF5: string;
  WDFG: string;
  WDFI: string;
  WDFM: string;
  WDMV: number;
  WESD: number;
  WESF: number;
  WSF1: number;
  WSF2: number;
  WSF5: number;
  WSFG: number;
  WSFI: number;
  WSFM: number;
  WT01: string;
  WT02: string;
  WT03: string;
  WT04: string;
  WT05: string;
  WT06: string;
  WT07: string;
  WT08: string;
  WT09: string;
  WT10: string;
  WT11: string;
  WT12: string;
  WT13: string;
  WT14: string;
  WT15: string;
  WT16: string;
  WT17: string;
  WT18: string;
  WT19: string;
  WT21: string;
  WT22: string;
  WV01: string;
  WV03: string;
  WV07: string;
  WV18: string;
  WV20: string;
  alt: string;
  lat: string;
  lon: string;
  station_info: string;
  station_name: string;
  time: string;
}

export const DailySummariesDataTypes: DataType[] = [
  {
    id: 'AWND',
    datasetId: 'daily-summaries',
    name: 'Average daily wind speed',
    selected: false,
    metricUnits: 'm/s',
    standardUnits: 'm/s',
    metricColumnDef: {
      headerName: 'AWND(m/s)',
      field: 'AWND',
    },
    standardColumnDef: {
      headerName: 'AWND(mile/h)',
      field: 'AWND',
    },
  },
  {
    id: 'EVAP',
    datasetId: 'daily-summaries',
    name: 'Evaporation of water from evaporation pan',
    selected: false,
    metricUnits: 'mm',
    standardUnits: 'mm',
    metricColumnDef: {
      headerName: 'EVAP(mm)',
      field: 'EVAP',
    },
    standardColumnDef: {
      headerName: 'EVAP(in)',
      field: 'EVAP',
    },
  },
  {
    id: 'FRGB',
    datasetId: 'daily-summaries',
    name: 'Base of frozen ground layer',
    selected: false,
    metricUnits: 'cm',
    standardUnits: 'cm',
    metricColumnDef: {
      headerName: 'FRGB(cm)',
      field: 'FRGB',
    },
    standardColumnDef: {
      headerName: 'FRGB(in)',
      field: 'FRGB',
    },
  },
  {
    id: 'FRGT',
    datasetId: 'daily-summaries',
    name: 'Top of frozen ground layer',
    selected: false,
    metricUnits: 'cm',
    standardUnits: 'cm',
    metricColumnDef: {
      headerName: 'FRGT(cm)',
      field: 'FRGT',
    },
    standardColumnDef: {
      headerName: 'FRGT(in)',
      field: 'FRGT',
    },
  },
  {
    id: 'FRTH',
    datasetId: 'daily-summaries',
    name: 'Thickness of frozen ground layer',
    selected: false,
    metricUnits: 'cm',
    standardUnits: 'cm',
    metricColumnDef: {
      headerName: 'FRTH(cm)',
      field: 'FRTH',
    },
    standardColumnDef: {
      headerName: 'FRTH(in)',
      field: 'FRTH',
    },
  },
  {
    id: 'GAHT',
    datasetId: 'daily-summaries',
    name: 'Difference between river and gauge height',
    selected: false,
    metricUnits: 'cm',
    standardUnits: 'cm',
    metricColumnDef: {
      headerName: 'GAHT(cm)',
      field: 'GAHT',
    },
    standardColumnDef: {
      headerName: 'GAHT(in)',
      field: 'GAHT',
    },
  },
  {
    id: 'MDEV',
    datasetId: 'daily-summaries',
    name: 'Multiday evaporation total (use with DAEV)',
    selected: false,
    metricUnits: 'mm',
    standardUnits: 'mm',
    metricColumnDef: {
      headerName: 'MDEV(mm)',
      field: 'MDEV',
    },
    standardColumnDef: {
      headerName: 'MDEV(in)',
      field: 'MDEV',
    },
  },
  {
    id: 'MDPR',
    datasetId: 'daily-summaries',
    name: 'Multiday precipitation total (use with DAPR and DWPR, if available)',
    selected: false,
    metricUnits: 'mm',
    standardUnits: 'mm',
    metricColumnDef: {
      headerName: 'MDPR(mm)',
      field: 'MDPR',
    },
    standardColumnDef: {
      headerName: 'MDPR(in)',
      field: 'MDPR',
    },
  },
  {
    id: 'MDSF',
    datasetId: 'daily-summaries',
    name: 'Multiday snowfall total',
    selected: false,
    metricUnits: 'mm',
    standardUnits: 'mm',
    metricColumnDef: {
      headerName: 'MDSF(mm)',
      field: 'MDSF',
    },
    standardColumnDef: {
      headerName: 'MDSF(in)',
      field: 'MDSF',
    },
  },
  {
    id: 'MDTN',
    datasetId: 'daily-summaries',
    name: 'Multiday minimum temperature (use with DATN)',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MDTN(&deg;c)',
      field: 'MDTN',
    },
    standardColumnDef: {
      headerName: 'MDTN(&deg;f)',
      field: 'MDTN',
    },
  },
  {
    id: 'MDTX',
    datasetId: 'daily-summaries',
    name: 'Multiday maximum temperature (use with DATX)',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MDTX(&deg;c)',
      field: 'MDTX',
    },
    standardColumnDef: {
      headerName: 'MDTX(&deg;f)',
      field: 'MDTX',
    },
  },
  {
    id: 'MDWM',
    datasetId: 'daily-summaries',
    name: 'Multiday wind movement',
    selected: false,
    metricUnits: 'km',
    standardUnits: 'km',
    metricColumnDef: {
      headerName: 'MDWM(km)',
      field: 'MDWM',
    },
    standardColumnDef: {
      headerName: 'MDWM',
      field: 'MDWM',
    },
  },
  {
    id: 'MNPN',
    datasetId: 'daily-summaries',
    name: 'Daily minimum temperature of water in an evaporation pan (tenths of degrees C)',
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
    id: 'MXPN',
    datasetId: 'daily-summaries',
    name: 'Daily maximum temperature of water in an evaporation pan (tenths of degrees C)',
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
    id: 'PRCP',
    datasetId: 'daily-summaries',
    name: 'Precipitation',
    selected: false,
    metricUnits: 'mm',
    standardUnits: 'mm',
    metricColumnDef: {
      headerName: 'PRCP(mm)',
      field: 'PRCP',
    },
    standardColumnDef: {
      headerName: 'PRCP(in)',
      field: 'PRCP',
    },
  },
  {
    id: 'SN01',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with unknown cover at 5 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN01(&deg;c)',
      field: 'SN01',
    },
    standardColumnDef: {
      headerName: 'SN01(&deg;f)',
      field: 'SN01',
    },
  },
  {
    id: 'SN02',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with unknown cover at 10 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN02(&deg;c)',
      field: 'SN02',
    },
    standardColumnDef: {
      headerName: 'SN02(&deg;f)',
      field: 'SN02',
    },
  },
  {
    id: 'SN03',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with unknown cover at 20 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN03(&deg;c)',
      field: 'SN03',
    },
    standardColumnDef: {
      headerName: 'SN03(&deg;f)',
      field: 'SN03',
    },
  },
  {
    id: 'SN11',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with grass cover at 5 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN11(&deg;c)',
      field: 'SN11',
    },
    standardColumnDef: {
      headerName: 'SN11(&deg;f)',
      field: 'SN11',
    },
  },
  {
    id: 'SN12',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with grass cover at 10 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN12(&deg;c)',
      field: 'SN12',
    },
    standardColumnDef: {
      headerName: 'SN12(&deg;f)',
      field: 'SN12',
    },
  },
  {
    id: 'SN13',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with grass cover at 20 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN13(&deg;c)',
      field: 'SN13',
    },
    standardColumnDef: {
      headerName: 'SN13(&deg;f)',
      field: 'SN13',
    },
  },
  {
    id: 'SN14',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with grass cover at 50 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN14(&deg;c)',
      field: 'SN14',
    },
    standardColumnDef: {
      headerName: 'SN14(&deg;f)',
      field: 'SN14',
    },
  },
  {
    id: 'SN21',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with fallow cover at 5 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN21(&deg;c)',
      field: 'SN21',
    },
    standardColumnDef: {
      headerName: 'SN21(&deg;f)',
      field: 'SN21',
    },
  },
  {
    id: 'SN22',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with fallow cover at 10 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN22(&deg;c)',
      field: 'SN22',
    },
    standardColumnDef: {
      headerName: 'SN22(&deg;f)',
      field: 'SN22',
    },
  },
  {
    id: 'SN23',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with fallow cover at 20 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN23(&deg;c)',
      field: 'SN23',
    },
    standardColumnDef: {
      headerName: 'SN23(&deg;f)',
      field: 'SN23',
    },
  },
  {
    id: 'SN31',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with bare ground cover at 5 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN31(&deg;c)',
      field: 'SN31',
    },
    standardColumnDef: {
      headerName: 'SN31(&deg;f)',
      field: 'SN31',
    },
  },
  {
    id: 'SN32',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with bare ground cover at 10 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN32(&deg;c)',
      field: 'SN32',
    },
    standardColumnDef: {
      headerName: 'SN32(&deg;f)',
      field: 'SN32',
    },
  },
  {
    id: 'SN33',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with bare ground cover at 20 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN33(&deg;c)',
      field: 'SN33',
    },
    standardColumnDef: {
      headerName: 'SN33(&deg;f)',
      field: 'SN33',
    },
  },
  {
    id: 'SN34',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with bare ground cover at 50 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN34(&deg;c)',
      field: 'SN34',
    },
    standardColumnDef: {
      headerName: 'SN34(&deg;f)',
      field: 'SN34',
    },
  },
  {
    id: 'SN35',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with bare ground cover at 100 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN35(&deg;c)',
      field: 'SN35',
    },
    standardColumnDef: {
      headerName: 'SN35(&deg;f)',
      field: 'SN35',
    },
  },
  {
    id: 'SN36',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with bare ground cover at 150 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN36(&deg;c)',
      field: 'SN36',
    },
    standardColumnDef: {
      headerName: 'SN36(&deg;f)',
      field: 'SN36',
    },
  },
  {
    id: 'SN51',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with sod cover at 5 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN51(&deg;c)',
      field: 'SN51',
    },
    standardColumnDef: {
      headerName: 'SN51(&deg;f)',
      field: 'SN51',
    },
  },
  {
    id: 'SN52',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with sod cover at 10 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN52(&deg;c)',
      field: 'SN52',
    },
    standardColumnDef: {
      headerName: 'SN52(&deg;f)',
      field: 'SN52',
    },
  },
  {
    id: 'SN53',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with sod cover at 20 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN53(&deg;c)',
      field: 'SN53',
    },
    standardColumnDef: {
      headerName: 'SN53(&deg;f)',
      field: 'SN53',
    },
  },
  {
    id: 'SN54',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with sod cover at 50 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN54(&deg;c)',
      field: 'SN54',
    },
    standardColumnDef: {
      headerName: 'SN54(&deg;f)',
      field: 'SN54',
    },
  },
  {
    id: 'SN55',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with sod cover at 100 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN55(&deg;c)',
      field: 'SN55',
    },
    standardColumnDef: {
      headerName: 'SN55(&deg;f)',
      field: 'SN55',
    },
  },
  {
    id: 'SN56',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with sod cover at 150 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN56(&deg;c)',
      field: 'SN56',
    },
    standardColumnDef: {
      headerName: 'SN56(&deg;f)',
      field: 'SN56',
    },
  },
  {
    id: 'SN61',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with straw multch cover at 5 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN61(&deg;c)',
      field: 'SN61',
    },
    standardColumnDef: {
      headerName: 'SN61(&deg;f)',
      field: 'SN61',
    },
  },
  {
    id: 'SN72',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with grass muck cover at 10 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN72(&deg;c)',
      field: 'SN72',
    },
    standardColumnDef: {
      headerName: 'SN72(&deg;f)',
      field: 'SN72',
    },
  },
  {
    id: 'SN81',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with bare muck cover at 5 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN81(&deg;c)',
      field: 'SN81',
    },
    standardColumnDef: {
      headerName: 'SN81(&deg;f)',
      field: 'SN81',
    },
  },
  {
    id: 'SN82',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with bare muck cover at 10 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN82(&deg;c)',
      field: 'SN82',
    },
    standardColumnDef: {
      headerName: 'SN82(&deg;f)',
      field: 'SN82',
    },
  },
  {
    id: 'SN83',
    datasetId: 'daily-summaries',
    name: 'Minimum soil temperature with bare muck cover at 20 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SN83(&deg;c)',
      field: 'SN83',
    },
    standardColumnDef: {
      headerName: 'SN83(&deg;f)',
      field: 'SN83',
    },
  },
  {
    id: 'SNOW',
    datasetId: 'daily-summaries',
    name: 'Snowfall (mm)',
    selected: false,
    metricUnits: 'mm',
    standardUnits: 'mm',
    metricColumnDef: {
      headerName: 'SNOW(mm)',
      field: 'SNOW',
    },
    standardColumnDef: {
      headerName: 'SNOW(in)',
      field: 'SNOW',
    },
  },
  {
    id: 'SNWD',
    datasetId: 'daily-summaries',
    name: 'Snow depth (mm)',
    selected: false,
    metricUnits: 'mm',
    standardUnits: 'mm',
    metricColumnDef: {
      headerName: 'SNWD(mm)',
      field: 'SNWD',
    },
    standardColumnDef: {
      headerName: 'SNWD(in)',
      field: 'SNWD',
    },
  },
  {
    id: 'SX01',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with unknown cover at 5 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX01(&deg;c)',
      field: 'SX01',
    },
    standardColumnDef: {
      headerName: 'SX01(&deg;f)',
      field: 'SX01',
    },
  },
  {
    id: 'SX02',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with unknown cover at 10 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX02(&deg;c)',
      field: 'SX02',
    },
    standardColumnDef: {
      headerName: 'SX02(&deg;f)',
      field: 'SX02',
    },
  },
  {
    id: 'SX03',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with unknown cover at 20 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX03(&deg;c)',
      field: 'SX03',
    },
    standardColumnDef: {
      headerName: 'SX03(&deg;f)',
      field: 'SX03',
    },
  },
  {
    id: 'SX11',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with grass cover at 5 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX11(&deg;c)',
      field: 'SX11',
    },
    standardColumnDef: {
      headerName: 'SX11(&deg;f)',
      field: 'SX11',
    },
  },
  {
    id: 'SX12',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with grass cover at 10 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX12(&deg;c)',
      field: 'SX12',
    },
    standardColumnDef: {
      headerName: 'SX12(&deg;f)',
      field: 'SX12',
    },
  },
  {
    id: 'SX13',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with grass cover at 20 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX13(&deg;c)',
      field: 'SX13',
    },
    standardColumnDef: {
      headerName: 'SX13(&deg;f)',
      field: 'SX13',
    },
  },
  {
    id: 'SX14',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with grass cover at 50 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX14(&deg;c)',
      field: 'SX14',
    },
    standardColumnDef: {
      headerName: 'SX14(&deg;f)',
      field: 'SX14',
    },
  },
  {
    id: 'SX15',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with grass cover at 100 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX15(&deg;c)',
      field: 'SX15',
    },
    standardColumnDef: {
      headerName: 'SX15(&deg;f)',
      field: 'SX15',
    },
  },
  {
    id: 'SX17',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with grass cover at 180 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX17(&deg;c)',
      field: 'SX17',
    },
    standardColumnDef: {
      headerName: 'SX17(&deg;f)',
      field: 'SX17',
    },
  },
  {
    id: 'SX21',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with fallow cover at 5 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX21(&deg;c)',
      field: 'SX21',
    },
    standardColumnDef: {
      headerName: 'SX21(&deg;f)',
      field: 'SX21',
    },
  },
  {
    id: 'SX22',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with fallow cover at 10 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX22(&deg;c)',
      field: 'SX22',
    },
    standardColumnDef: {
      headerName: 'SX22(&deg;f)',
      field: 'SX22',
    },
  },
  {
    id: 'SX23',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with fallow cover at 20 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX23(&deg;c)',
      field: 'SX23',
    },
    standardColumnDef: {
      headerName: 'SX23(&deg;f)',
      field: 'SX23',
    },
  },
  {
    id: 'SX31',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with bare ground cover at 5 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX31(&deg;c)',
      field: 'SX31',
    },
    standardColumnDef: {
      headerName: 'SX31(&deg;f)',
      field: 'SX31',
    },
  },
  {
    id: 'SX32',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with bare ground cover at 10 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX32(&deg;c)',
      field: 'SX32',
    },
    standardColumnDef: {
      headerName: 'SX32(&deg;f)',
      field: 'SX32',
    },
  },
  {
    id: 'SX33',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with bare ground cover at 20 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX33(&deg;c)',
      field: 'SX33',
    },
    standardColumnDef: {
      headerName: 'SX33(&deg;f)',
      field: 'SX33',
    },
  },
  {
    id: 'SX34',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with bare ground cover at 50 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX34(&deg;c)',
      field: 'SX34',
    },
    standardColumnDef: {
      headerName: 'SX34(&deg;f)',
      field: 'SX34',
    },
  },
  {
    id: 'SX35',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with bare ground cover at 100 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX35(&deg;c)',
      field: 'SX35',
    },
    standardColumnDef: {
      headerName: 'SX35(&deg;f)',
      field: 'SX35',
    },
  },
  {
    id: 'SX36',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with bare ground cover at 150 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX36(&deg;c)',
      field: 'SX36',
    },
    standardColumnDef: {
      headerName: 'SX36(&deg;f)',
      field: 'SX36',
    },
  },
  {
    id: 'SX51',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with sod cover at 5 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX51(&deg;c)',
      field: 'SX51',
    },
    standardColumnDef: {
      headerName: 'SX51(&deg;f)',
      field: 'SX51',
    },
  },
  {
    id: 'SX52',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with sod cover at 10 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX52(&deg;c)',
      field: 'SX52',
    },
    standardColumnDef: {
      headerName: 'SX52(&deg;f)',
      field: 'SX52',
    },
  },
  {
    id: 'SX53',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with sod cover at 20 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX53(&deg;c)',
      field: 'SX53',
    },
    standardColumnDef: {
      headerName: 'SX53(&deg;f)',
      field: 'SX53',
    },
  },
  {
    id: 'SX54',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with sod cover at 50 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX54(&deg;c)',
      field: 'SX54',
    },
    standardColumnDef: {
      headerName: 'SX54(&deg;f)',
      field: 'SX54',
    },
  },
  {
    id: 'SX55',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with sod cover at 100 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX55(&deg;c)',
      field: 'SX55',
    },
    standardColumnDef: {
      headerName: 'SX55(&deg;f)',
      field: 'SX55',
    },
  },
  {
    id: 'SX56',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with sod cover at 150 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX56(&deg;c)',
      field: 'SX56',
    },
    standardColumnDef: {
      headerName: 'SX56(&deg;f)',
      field: 'SX56',
    },
  },
  {
    id: 'SX61',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with straw multch cover at 5 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX61(&deg;c)',
      field: 'SX61',
    },
    standardColumnDef: {
      headerName: 'SX61(&deg;f)',
      field: 'SX61',
    },
  },
  {
    id: 'SX72',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with grass muck cover at 10 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX72(&deg;c)',
      field: 'SX72',
    },
    standardColumnDef: {
      headerName: 'SX72(&deg;f)',
      field: 'SX72',
    },
  },
  {
    id: 'SX81',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with bare muck cover at 5 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX81(&deg;c)',
      field: 'SX81',
    },
    standardColumnDef: {
      headerName: 'SX81(&deg;f)',
      field: 'SX81',
    },
  },
  {
    id: 'SX82',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with bare muck cover at 10 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX82(&deg;c)',
      field: 'SX82',
    },
    standardColumnDef: {
      headerName: 'SX82(&deg;f)',
      field: 'SX82',
    },
  },
  {
    id: 'SX83',
    datasetId: 'daily-summaries',
    name: 'Maximum soil temperature with bare muck cover at 20 cm depth',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SX83(&deg;c)',
      field: 'SX83',
    },
    standardColumnDef: {
      headerName: 'SX83(&deg;f)',
      field: 'SX83',
    },
  },
  {
    id: 'TAVG',
    datasetId: 'daily-summaries',
    name: 'Average temperature',
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
    id: 'THIC',
    datasetId: 'daily-summaries',
    name: 'Thickness of ice on water',
    selected: false,
    metricUnits: 'mm',
    standardUnits: 'mm',
    metricColumnDef: {
      headerName: 'THIC(mm)',
      field: 'THIC',
    },
    standardColumnDef: {
      headerName: 'THIC(in)',
      field: 'THIC',
    },
  },
  {
    id: 'TMAX',
    datasetId: 'daily-summaries',
    name: 'Maximum temperature (tenths of degrees C)',
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
    id: 'TMIN',
    datasetId: 'daily-summaries',
    name: 'Minimum temperature (tenths of degrees C)',
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
    id: 'TOBS',
    datasetId: 'daily-summaries',
    name: 'Temperature at the time of observation (tenths of degrees C)',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'TOBS(&deg;c)',
      field: 'TOBS',
    },
    standardColumnDef: {
      headerName: 'TOBS(&deg;f)',
      field: 'TOBS',
    },
  },
  {
    id: 'WDMV',
    datasetId: 'daily-summaries',
    name: '24-hour wind movement',
    selected: false,
    metricUnits: 'km',
    standardUnits: 'km',
    metricColumnDef: {
      headerName: 'WDMV(km)',
      field: 'WDMV',
    },
    standardColumnDef: {
      headerName: 'WDMV',
      field: 'WDMV',
    },
  },
  {
    id: 'WESD',
    datasetId: 'daily-summaries',
    name: 'Water equivalent of snow on the ground',
    selected: false,
    metricUnits: 'mm',
    standardUnits: 'mm',
    metricColumnDef: {
      headerName: 'WESD(mm)',
      field: 'WESD',
    },
    standardColumnDef: {
      headerName: 'WESD(in)',
      field: 'WESD',
    },
  },
  {
    id: 'WESF',
    datasetId: 'daily-summaries',
    name: 'Water equivalent of snowfall',
    selected: false,
    metricUnits: 'mm',
    standardUnits: 'mm',
    metricColumnDef: {
      headerName: 'WESF(mm)',
      field: 'WESF',
    },
    standardColumnDef: {
      headerName: 'WESF(in)',
      field: 'WESF',
    },
  },
  {
    id: 'WSF1',
    datasetId: 'daily-summaries',
    name: 'Fastest 1-minute wind speed',
    selected: false,
    metricUnits: 'm/s',
    standardUnits: 'm/s',
    metricColumnDef: {
      headerName: 'WSF1(m/s)',
      field: 'WSF1',
    },
    standardColumnDef: {
      headerName: 'WSF1(mile/h)',
      field: 'WSF1',
    },
  },
  {
    id: 'WSF2',
    datasetId: 'daily-summaries',
    name: 'Fastest 2-minute wind speed',
    selected: false,
    metricUnits: 'm/s',
    standardUnits: 'm/s',
    metricColumnDef: {
      headerName: 'WSF2(m/s)',
      field: 'WSF2',
    },
    standardColumnDef: {
      headerName: 'WSF2(mile/h)',
      field: 'WSF2',
    },
  },
  {
    id: 'WSF5',
    datasetId: 'daily-summaries',
    name: 'Fastest 5-second wind speed',
    selected: false,
    metricUnits: 'm/s',
    standardUnits: 'm/s',
    metricColumnDef: {
      headerName: 'WSF5(m/s)',
      field: 'WSF5',
    },
    standardColumnDef: {
      headerName: 'WSF5(mile/h)',
      field: 'WSF5',
    },
  },
  {
    id: 'WSFG',
    datasetId: 'daily-summaries',
    name: 'Peak guest wind speed',
    selected: false,
    metricUnits: 'm/s',
    standardUnits: 'm/s',
    metricColumnDef: {
      headerName: 'WSFG(m/s)',
      field: 'WSFG',
    },
    standardColumnDef: {
      headerName: 'WSFG(mile/h)',
      field: 'WSFG',
    },
  },
  {
    id: 'WSFI',
    datasetId: 'daily-summaries',
    name: 'Highest instantaneous wind speed',
    selected: false,
    metricUnits: 'm/s',
    standardUnits: 'm/s',
    metricColumnDef: {
      headerName: 'WSFI(m/s)',
      field: 'WSFI',
    },
    standardColumnDef: {
      headerName: 'WSFI(mile/h)',
      field: 'WSFI',
    },
  },
  {
    id: 'WSFM',
    datasetId: 'daily-summaries',
    name: 'Fastest mile wind speed',
    selected: false,
    metricUnits: 'm/s',
    standardUnits: 'm/s',
    metricColumnDef: {
      headerName: 'WSFM(m/s)',
      field: 'WSFM',
    },
    standardColumnDef: {
      headerName: 'WSFM(mile/h)',
      field: 'WSFM',
    },
  },
];

export const DailySummariesCoreDataTypes: DataType[] = [
  {
    id: 'PRCP',
    datasetId: 'daily-summaries',
    name: 'Precipitation',
    selected: true,
    metricUnits: 'mm',
    standardUnits: 'mm',
    metricColumnDef: {
      headerName: 'PRCP(mm)',
      field: 'PRCP',
    },
    standardColumnDef: {
      headerName: 'PRCP(in)',
      field: 'PRCP',
    },
  },
  {
    id: 'TMAX',
    datasetId: 'daily-summaries',
    name: 'Maximum temperature (tenths of degrees C)',
    selected: true,
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
    id: 'TMIN',
    datasetId: 'daily-summaries',
    name: 'Minimum temperature (tenths of degrees C)',
    selected: true,
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
    id: 'SNOW',
    datasetId: 'daily-summaries',
    name: 'Snowfall (mm)',
    selected: false,
    metricUnits: 'mm',
    standardUnits: 'mm',
    metricColumnDef: {
      headerName: 'SNOW(mm)',
      field: 'SNOW',
    },
    standardColumnDef: {
      headerName: 'SNOW(in)',
      field: 'SNOW',
    },
  },
  {
    id: 'SNWD',
    datasetId: 'daily-summaries',
    name: 'Snow depth (mm)',
    selected: false,
    metricUnits: 'mm',
    standardUnits: 'mm',
    metricColumnDef: {
      headerName: 'SNWD(mm)',
      field: 'SNWD',
    },
    standardColumnDef: {
      headerName: 'SNWD(in)',
      field: 'SNWD',
    },
  },
];

