import { StationObservation, DataType } from '../classes';

export interface NormalsAnnualSeasonalObservation extends StationObservation {
  DATE: string;
  ELEVATION: number;
  LATITUDE: number;
  LONGITUDE: number;
  NAME: string;
  STATION: string;
  'ANN-CLDD-BASE45': number;
  'ANN-CLDD-BASE50': number;
  'ANN-CLDD-BASE55': number;
  'ANN-CLDD-BASE57': number;
  'ANN-CLDD-BASE60': number;
  'ANN-CLDD-BASE70': number;
  'ANN-CLDD-BASE72': number;
  'ANN-CLDD-NORMAL': number;
  'ANN-DUTR-NORMAL': number;
  'ANN-GRDD-BASE40': number;
  'ANN-GRDD-BASE45': number;
  'ANN-GRDD-BASE50': number;
  'ANN-GRDD-BASE55': number;
  'ANN-GRDD-BASE57': number;
  'ANN-GRDD-BASE60': number;
  'ANN-GRDD-BASE65': number;
  'ANN-GRDD-BASE70': number;
  'ANN-GRDD-BASE72': number;
  'ANN-GRDD-TB4886': number;
  'ANN-GRDD-TB5086': number;
  'ANN-HTDD-BASE40': number;
  'ANN-HTDD-BASE45': number;
  'ANN-HTDD-BASE50': number;
  'ANN-HTDD-BASE55': number;
  'ANN-HTDD-BASE57': number;
  'ANN-HTDD-BASE60': number;
  'ANN-HTDD-NORMAL': number;
  'ANN-PRCP-AVGNDS-GE001HI': string;
  'ANN-PRCP-AVGNDS-GE010HI': string;
  'ANN-PRCP-AVGNDS-GE050HI': string;
  'ANN-PRCP-AVGNDS-GE100HI': string;
  'ANN-PRCP-NORMAL': number;
  'ANN-SNOW-AVGNDS-GE001TI': string;
  'ANN-SNOW-AVGNDS-GE010TI': string;
  'ANN-SNOW-AVGNDS-GE030TI': string;
  'ANN-SNOW-AVGNDS-GE050TI': string;
  'ANN-SNOW-AVGNDS-GE100TI': string;
  'ANN-SNOW-NORMAL': number;
  'ANN-SNWD-AVGNDS-GE001WI': string;
  'ANN-SNWD-AVGNDS-GE003WI': string;
  'ANN-SNWD-AVGNDS-GE005WI': string;
  'ANN-SNWD-AVGNDS-GE010WI': string;
  'ANN-TAVG-NORMAL': number;
  'ANN-TMAX-AVGNDS-GRTH040': string;
  'ANN-TMAX-AVGNDS-GRTH050': string;
  'ANN-TMAX-AVGNDS-GRTH060': string;
  'ANN-TMAX-AVGNDS-GRTH070': string;
  'ANN-TMAX-AVGNDS-GRTH080': string;
  'ANN-TMAX-AVGNDS-GRTH090': string;
  'ANN-TMAX-AVGNDS-GRTH100': string;
  'ANN-TMAX-AVGNDS-LSTH032': string;
  'ANN-TMAX-NORMAL': number;
  'ANN-TMIN-AVGNDS-LSTH000': string;
  'ANN-TMIN-AVGNDS-LSTH010': string;
  'ANN-TMIN-AVGNDS-LSTH020': string;
  'ANN-TMIN-AVGNDS-LSTH032': string;
  'ANN-TMIN-AVGNDS-LSTH040': string;
  'ANN-TMIN-AVGNDS-LSTH050': string;
  'ANN-TMIN-AVGNDS-LSTH060': string;
  'ANN-TMIN-AVGNDS-LSTH070': string;
  'ANN-TMIN-NORMAL': number;
  'ANN-TMIN-PRBFST-T16FP10': string;
  'ANN-TMIN-PRBFST-T16FP20': string;
  'ANN-TMIN-PRBFST-T16FP30': string;
  'ANN-TMIN-PRBFST-T16FP40': string;
  'ANN-TMIN-PRBFST-T16FP50': string;
  'ANN-TMIN-PRBFST-T16FP60': string;
  'ANN-TMIN-PRBFST-T16FP70': string;
  'ANN-TMIN-PRBFST-T16FP80': string;
  'ANN-TMIN-PRBFST-T16FP90': string;
  'ANN-TMIN-PRBFST-T20FP10': string;
  'ANN-TMIN-PRBFST-T20FP20': string;
  'ANN-TMIN-PRBFST-T20FP30': string;
  'ANN-TMIN-PRBFST-T20FP40': string;
  'ANN-TMIN-PRBFST-T20FP50': string;
  'ANN-TMIN-PRBFST-T20FP60': string;
  'ANN-TMIN-PRBFST-T20FP70': string;
  'ANN-TMIN-PRBFST-T20FP80': string;
  'ANN-TMIN-PRBFST-T20FP90': string;
  'ANN-TMIN-PRBFST-T24FP10': string;
  'ANN-TMIN-PRBFST-T24FP20': string;
  'ANN-TMIN-PRBFST-T24FP30': string;
  'ANN-TMIN-PRBFST-T24FP40': string;
  'ANN-TMIN-PRBFST-T24FP50': string;
  'ANN-TMIN-PRBFST-T24FP60': string;
  'ANN-TMIN-PRBFST-T24FP70': string;
  'ANN-TMIN-PRBFST-T24FP80': string;
  'ANN-TMIN-PRBFST-T24FP90': string;
  'ANN-TMIN-PRBFST-T28FP10': string;
  'ANN-TMIN-PRBFST-T28FP20': string;
  'ANN-TMIN-PRBFST-T28FP30': string;
  'ANN-TMIN-PRBFST-T28FP40': string;
  'ANN-TMIN-PRBFST-T28FP50': string;
  'ANN-TMIN-PRBFST-T28FP60': string;
  'ANN-TMIN-PRBFST-T28FP70': string;
  'ANN-TMIN-PRBFST-T28FP80': string;
  'ANN-TMIN-PRBFST-T28FP90': string;
  'ANN-TMIN-PRBFST-T32FP10': string;
  'ANN-TMIN-PRBFST-T32FP20': string;
  'ANN-TMIN-PRBFST-T32FP30': string;
  'ANN-TMIN-PRBFST-T32FP40': string;
  'ANN-TMIN-PRBFST-T32FP50': string;
  'ANN-TMIN-PRBFST-T32FP60': string;
  'ANN-TMIN-PRBFST-T32FP70': string;
  'ANN-TMIN-PRBFST-T32FP80': string;
  'ANN-TMIN-PRBFST-T32FP90': string;
  'ANN-TMIN-PRBFST-T36FP10': string;
  'ANN-TMIN-PRBFST-T36FP20': string;
  'ANN-TMIN-PRBFST-T36FP30': string;
  'ANN-TMIN-PRBFST-T36FP40': string;
  'ANN-TMIN-PRBFST-T36FP50': string;
  'ANN-TMIN-PRBFST-T36FP60': string;
  'ANN-TMIN-PRBFST-T36FP70': string;
  'ANN-TMIN-PRBFST-T36FP80': string;
  'ANN-TMIN-PRBFST-T36FP90': string;
  'ANN-TMIN-PRBGSL-T16FP10': string;
  'ANN-TMIN-PRBGSL-T16FP20': string;
  'ANN-TMIN-PRBGSL-T16FP30': string;
  'ANN-TMIN-PRBGSL-T16FP40': string;
  'ANN-TMIN-PRBGSL-T16FP50': string;
  'ANN-TMIN-PRBGSL-T16FP60': string;
  'ANN-TMIN-PRBGSL-T16FP70': string;
  'ANN-TMIN-PRBGSL-T16FP80': string;
  'ANN-TMIN-PRBGSL-T16FP90': string;
  'ANN-TMIN-PRBGSL-T20FP10': string;
  'ANN-TMIN-PRBGSL-T20FP20': string;
  'ANN-TMIN-PRBGSL-T20FP30': string;
  'ANN-TMIN-PRBGSL-T20FP40': string;
  'ANN-TMIN-PRBGSL-T20FP50': string;
  'ANN-TMIN-PRBGSL-T20FP60': string;
  'ANN-TMIN-PRBGSL-T20FP70': string;
  'ANN-TMIN-PRBGSL-T20FP80': string;
  'ANN-TMIN-PRBGSL-T20FP90': string;
  'ANN-TMIN-PRBGSL-T24FP10': string;
  'ANN-TMIN-PRBGSL-T24FP20': string;
  'ANN-TMIN-PRBGSL-T24FP30': string;
  'ANN-TMIN-PRBGSL-T24FP40': string;
  'ANN-TMIN-PRBGSL-T24FP50': string;
  'ANN-TMIN-PRBGSL-T24FP60': string;
  'ANN-TMIN-PRBGSL-T24FP70': string;
  'ANN-TMIN-PRBGSL-T24FP80': string;
  'ANN-TMIN-PRBGSL-T24FP90': string;
  'ANN-TMIN-PRBGSL-T28FP10': string;
  'ANN-TMIN-PRBGSL-T28FP20': string;
  'ANN-TMIN-PRBGSL-T28FP30': string;
  'ANN-TMIN-PRBGSL-T28FP40': string;
  'ANN-TMIN-PRBGSL-T28FP50': string;
  'ANN-TMIN-PRBGSL-T28FP60': string;
  'ANN-TMIN-PRBGSL-T28FP70': string;
  'ANN-TMIN-PRBGSL-T28FP80': string;
  'ANN-TMIN-PRBGSL-T28FP90': string;
  'ANN-TMIN-PRBGSL-T32FP10': string;
  'ANN-TMIN-PRBGSL-T32FP20': string;
  'ANN-TMIN-PRBGSL-T32FP30': string;
  'ANN-TMIN-PRBGSL-T32FP40': string;
  'ANN-TMIN-PRBGSL-T32FP50': string;
  'ANN-TMIN-PRBGSL-T32FP60': string;
  'ANN-TMIN-PRBGSL-T32FP70': string;
  'ANN-TMIN-PRBGSL-T32FP80': string;
  'ANN-TMIN-PRBGSL-T32FP90': string;
  'ANN-TMIN-PRBGSL-T36FP10': string;
  'ANN-TMIN-PRBGSL-T36FP20': string;
  'ANN-TMIN-PRBGSL-T36FP30': string;
  'ANN-TMIN-PRBGSL-T36FP40': string;
  'ANN-TMIN-PRBGSL-T36FP50': string;
  'ANN-TMIN-PRBGSL-T36FP60': string;
  'ANN-TMIN-PRBGSL-T36FP70': string;
  'ANN-TMIN-PRBGSL-T36FP80': string;
  'ANN-TMIN-PRBGSL-T36FP90': string;
  'ANN-TMIN-PRBLST-T16FP10': string;
  'ANN-TMIN-PRBLST-T16FP20': string;
  'ANN-TMIN-PRBLST-T16FP30': string;
  'ANN-TMIN-PRBLST-T16FP40': string;
  'ANN-TMIN-PRBLST-T16FP50': string;
  'ANN-TMIN-PRBLST-T16FP60': string;
  'ANN-TMIN-PRBLST-T16FP70': string;
  'ANN-TMIN-PRBLST-T16FP80': string;
  'ANN-TMIN-PRBLST-T16FP90': string;
  'ANN-TMIN-PRBLST-T20FP10': string;
  'ANN-TMIN-PRBLST-T20FP20': string;
  'ANN-TMIN-PRBLST-T20FP30': string;
  'ANN-TMIN-PRBLST-T20FP40': string;
  'ANN-TMIN-PRBLST-T20FP50': string;
  'ANN-TMIN-PRBLST-T20FP60': string;
  'ANN-TMIN-PRBLST-T20FP70': string;
  'ANN-TMIN-PRBLST-T20FP80': string;
  'ANN-TMIN-PRBLST-T20FP90': string;
  'ANN-TMIN-PRBLST-T24FP10': string;
  'ANN-TMIN-PRBLST-T24FP20': string;
  'ANN-TMIN-PRBLST-T24FP30': string;
  'ANN-TMIN-PRBLST-T24FP40': string;
  'ANN-TMIN-PRBLST-T24FP50': string;
  'ANN-TMIN-PRBLST-T24FP60': string;
  'ANN-TMIN-PRBLST-T24FP70': string;
  'ANN-TMIN-PRBLST-T24FP80': string;
  'ANN-TMIN-PRBLST-T24FP90': string;
  'ANN-TMIN-PRBLST-T28FP10': string;
  'ANN-TMIN-PRBLST-T28FP20': string;
  'ANN-TMIN-PRBLST-T28FP30': string;
  'ANN-TMIN-PRBLST-T28FP40': string;
  'ANN-TMIN-PRBLST-T28FP50': string;
  'ANN-TMIN-PRBLST-T28FP60': string;
  'ANN-TMIN-PRBLST-T28FP70': string;
  'ANN-TMIN-PRBLST-T28FP80': string;
  'ANN-TMIN-PRBLST-T28FP90': string;
  'ANN-TMIN-PRBLST-T32FP10': string;
  'ANN-TMIN-PRBLST-T32FP20': string;
  'ANN-TMIN-PRBLST-T32FP30': string;
  'ANN-TMIN-PRBLST-T32FP40': string;
  'ANN-TMIN-PRBLST-T32FP50': string;
  'ANN-TMIN-PRBLST-T32FP60': string;
  'ANN-TMIN-PRBLST-T32FP70': string;
  'ANN-TMIN-PRBLST-T32FP80': string;
  'ANN-TMIN-PRBLST-T32FP90': string;
  'ANN-TMIN-PRBLST-T36FP10': string;
  'ANN-TMIN-PRBLST-T36FP20': string;
  'ANN-TMIN-PRBLST-T36FP30': string;
  'ANN-TMIN-PRBLST-T36FP40': string;
  'ANN-TMIN-PRBLST-T36FP50': string;
  'ANN-TMIN-PRBLST-T36FP60': string;
  'ANN-TMIN-PRBLST-T36FP70': string;
  'ANN-TMIN-PRBLST-T36FP80': string;
  'ANN-TMIN-PRBLST-T36FP90': string;
  'ANN-TMIN-PRBOCC-LSTH016': string;
  'ANN-TMIN-PRBOCC-LSTH020': string;
  'ANN-TMIN-PRBOCC-LSTH024': string;
  'ANN-TMIN-PRBOCC-LSTH028': string;
  'ANN-TMIN-PRBOCC-LSTH032': string;
  'ANN-TMIN-PRBOCC-LSTH036': string;
  'DJF-CLDD-BASE45': number;
  'DJF-CLDD-BASE50': number;
  'DJF-CLDD-BASE55': number;
  'DJF-CLDD-BASE57': number;
  'DJF-CLDD-BASE60': number;
  'DJF-CLDD-BASE70': number;
  'DJF-CLDD-BASE72': number;
  'DJF-CLDD-NORMAL': number;
  'DJF-DUTR-NORMAL': number;
  'DJF-GRDD-BASE40': number;
  'DJF-GRDD-BASE45': number;
  'DJF-GRDD-BASE50': number;
  'DJF-GRDD-BASE55': number;
  'DJF-GRDD-BASE57': number;
  'DJF-GRDD-BASE60': number;
  'DJF-GRDD-BASE65': number;
  'DJF-GRDD-BASE70': number;
  'DJF-GRDD-BASE72': number;
  'DJF-GRDD-TB4886': number;
  'DJF-GRDD-TB5086': number;
  'DJF-HTDD-BASE40': number;
  'DJF-HTDD-BASE45': number;
  'DJF-HTDD-BASE50': number;
  'DJF-HTDD-BASE55': number;
  'DJF-HTDD-BASE57': number;
  'DJF-HTDD-BASE60': number;
  'DJF-HTDD-NORMAL': number;
  'DJF-PRCP-AVGNDS-GE001HI': string;
  'DJF-PRCP-AVGNDS-GE010HI': string;
  'DJF-PRCP-AVGNDS-GE050HI': string;
  'DJF-PRCP-AVGNDS-GE100HI': string;
  'DJF-PRCP-NORMAL': number;
  'DJF-SNOW-AVGNDS-GE001TI': string;
  'DJF-SNOW-AVGNDS-GE010TI': string;
  'DJF-SNOW-AVGNDS-GE030TI': string;
  'DJF-SNOW-AVGNDS-GE050TI': string;
  'DJF-SNOW-AVGNDS-GE100TI': string;
  'DJF-SNOW-NORMAL': number;
  'DJF-SNWD-AVGNDS-GE001WI': string;
  'DJF-SNWD-AVGNDS-GE003WI': string;
  'DJF-SNWD-AVGNDS-GE005WI': string;
  'DJF-SNWD-AVGNDS-GE010WI': string;
  'DJF-TAVG-NORMAL': number;
  'DJF-TMAX-AVGNDS-GRTH040': string;
  'DJF-TMAX-AVGNDS-GRTH050': string;
  'DJF-TMAX-AVGNDS-GRTH060': string;
  'DJF-TMAX-AVGNDS-GRTH070': string;
  'DJF-TMAX-AVGNDS-GRTH080': string;
  'DJF-TMAX-AVGNDS-GRTH090': string;
  'DJF-TMAX-AVGNDS-GRTH100': string;
  'DJF-TMAX-AVGNDS-LSTH032': string;
  'DJF-TMAX-NORMAL': number;
  'DJF-TMIN-AVGNDS-LSTH000': string;
  'DJF-TMIN-AVGNDS-LSTH010': string;
  'DJF-TMIN-AVGNDS-LSTH020': string;
  'DJF-TMIN-AVGNDS-LSTH032': string;
  'DJF-TMIN-AVGNDS-LSTH040': string;
  'DJF-TMIN-AVGNDS-LSTH050': string;
  'DJF-TMIN-AVGNDS-LSTH060': string;
  'DJF-TMIN-AVGNDS-LSTH070': string;
  'DJF-TMIN-NORMAL': number;
  'JJA-CLDD-BASE45': number;
  'JJA-CLDD-BASE50': number;
  'JJA-CLDD-BASE55': number;
  'JJA-CLDD-BASE57': number;
  'JJA-CLDD-BASE60': number;
  'JJA-CLDD-BASE70': number;
  'JJA-CLDD-BASE72': number;
  'JJA-CLDD-NORMAL': number;
  'JJA-DUTR-NORMAL': number;
  'JJA-GRDD-BASE40': number;
  'JJA-GRDD-BASE45': number;
  'JJA-GRDD-BASE50': number;
  'JJA-GRDD-BASE55': number;
  'JJA-GRDD-BASE57': number;
  'JJA-GRDD-BASE60': number;
  'JJA-GRDD-BASE65': number;
  'JJA-GRDD-BASE70': number;
  'JJA-GRDD-BASE72': number;
  'JJA-GRDD-TB4886': number;
  'JJA-GRDD-TB5086': number;
  'JJA-HTDD-BASE40': number;
  'JJA-HTDD-BASE45': number;
  'JJA-HTDD-BASE50': number;
  'JJA-HTDD-BASE55': number;
  'JJA-HTDD-BASE57': number;
  'JJA-HTDD-BASE60': number;
  'JJA-HTDD-NORMAL': number;
  'JJA-PRCP-AVGNDS-GE001HI': string;
  'JJA-PRCP-AVGNDS-GE010HI': string;
  'JJA-PRCP-AVGNDS-GE050HI': string;
  'JJA-PRCP-AVGNDS-GE100HI': string;
  'JJA-PRCP-NORMAL': number;
  'JJA-SNOW-AVGNDS-GE001TI': string;
  'JJA-SNOW-AVGNDS-GE010TI': string;
  'JJA-SNOW-AVGNDS-GE030TI': string;
  'JJA-SNOW-AVGNDS-GE050TI': string;
  'JJA-SNOW-AVGNDS-GE100TI': string;
  'JJA-SNOW-NORMAL': number;
  'JJA-SNWD-AVGNDS-GE001WI': string;
  'JJA-SNWD-AVGNDS-GE003WI': string;
  'JJA-SNWD-AVGNDS-GE005WI': string;
  'JJA-SNWD-AVGNDS-GE010WI': string;
  'JJA-TAVG-NORMAL': number;
  'JJA-TMAX-AVGNDS-GRTH040': string;
  'JJA-TMAX-AVGNDS-GRTH050': string;
  'JJA-TMAX-AVGNDS-GRTH060': string;
  'JJA-TMAX-AVGNDS-GRTH070': string;
  'JJA-TMAX-AVGNDS-GRTH080': string;
  'JJA-TMAX-AVGNDS-GRTH090': string;
  'JJA-TMAX-AVGNDS-GRTH100': string;
  'JJA-TMAX-AVGNDS-LSTH032': string;
  'JJA-TMAX-NORMAL': number;
  'JJA-TMIN-AVGNDS-LSTH000': string;
  'JJA-TMIN-AVGNDS-LSTH010': string;
  'JJA-TMIN-AVGNDS-LSTH020': string;
  'JJA-TMIN-AVGNDS-LSTH032': string;
  'JJA-TMIN-AVGNDS-LSTH040': string;
  'JJA-TMIN-AVGNDS-LSTH050': string;
  'JJA-TMIN-AVGNDS-LSTH060': string;
  'JJA-TMIN-AVGNDS-LSTH070': string;
  'JJA-TMIN-NORMAL': number;
  'MAM-CLDD-BASE45': number;
  'MAM-CLDD-BASE50': number;
  'MAM-CLDD-BASE55': number;
  'MAM-CLDD-BASE57': number;
  'MAM-CLDD-BASE60': number;
  'MAM-CLDD-BASE70': number;
  'MAM-CLDD-BASE72': number;
  'MAM-CLDD-NORMAL': number;
  'MAM-DUTR-NORMAL': number;
  'MAM-GRDD-BASE40': number;
  'MAM-GRDD-BASE45': number;
  'MAM-GRDD-BASE50': number;
  'MAM-GRDD-BASE55': number;
  'MAM-GRDD-BASE57': number;
  'MAM-GRDD-BASE60': number;
  'MAM-GRDD-BASE65': number;
  'MAM-GRDD-BASE70': number;
  'MAM-GRDD-BASE72': number;
  'MAM-GRDD-TB4886': number;
  'MAM-GRDD-TB5086': number;
  'MAM-HTDD-BASE40': number;
  'MAM-HTDD-BASE45': number;
  'MAM-HTDD-BASE50': number;
  'MAM-HTDD-BASE55': number;
  'MAM-HTDD-BASE57': number;
  'MAM-HTDD-BASE60': number;
  'MAM-HTDD-NORMAL': number;
  'MAM-PRCP-AVGNDS-GE001HI': string;
  'MAM-PRCP-AVGNDS-GE010HI': string;
  'MAM-PRCP-AVGNDS-GE050HI': string;
  'MAM-PRCP-AVGNDS-GE100HI': string;
  'MAM-PRCP-NORMAL': number;
  'MAM-SNOW-AVGNDS-GE001TI': string;
  'MAM-SNOW-AVGNDS-GE010TI': string;
  'MAM-SNOW-AVGNDS-GE030TI': string;
  'MAM-SNOW-AVGNDS-GE050TI': string;
  'MAM-SNOW-AVGNDS-GE100TI': string;
  'MAM-SNOW-NORMAL': number;
  'MAM-SNWD-AVGNDS-GE001WI': string;
  'MAM-SNWD-AVGNDS-GE003WI': string;
  'MAM-SNWD-AVGNDS-GE005WI': string;
  'MAM-SNWD-AVGNDS-GE010WI': string;
  'MAM-TAVG-NORMAL': number;
  'MAM-TMAX-AVGNDS-GRTH040': string;
  'MAM-TMAX-AVGNDS-GRTH050': string;
  'MAM-TMAX-AVGNDS-GRTH060': string;
  'MAM-TMAX-AVGNDS-GRTH070': string;
  'MAM-TMAX-AVGNDS-GRTH080': string;
  'MAM-TMAX-AVGNDS-GRTH090': string;
  'MAM-TMAX-AVGNDS-GRTH100': string;
  'MAM-TMAX-AVGNDS-LSTH032': string;
  'MAM-TMAX-NORMAL': number;
  'MAM-TMIN-AVGNDS-LSTH000': string;
  'MAM-TMIN-AVGNDS-LSTH010': string;
  'MAM-TMIN-AVGNDS-LSTH020': string;
  'MAM-TMIN-AVGNDS-LSTH032': string;
  'MAM-TMIN-AVGNDS-LSTH040': string;
  'MAM-TMIN-AVGNDS-LSTH050': string;
  'MAM-TMIN-AVGNDS-LSTH060': string;
  'MAM-TMIN-AVGNDS-LSTH070': string;
  'MAM-TMIN-NORMAL': number;
  'SON-CLDD-BASE45': number;
  'SON-CLDD-BASE50': number;
  'SON-CLDD-BASE55': number;
  'SON-CLDD-BASE57': number;
  'SON-CLDD-BASE60': number;
  'SON-CLDD-BASE70': number;
  'SON-CLDD-BASE72': number;
  'SON-CLDD-NORMAL': number;
  'SON-DUTR-NORMAL': number;
  'SON-GRDD-BASE40': number;
  'SON-GRDD-BASE45': number;
  'SON-GRDD-BASE50': number;
  'SON-GRDD-BASE55': number;
  'SON-GRDD-BASE57': number;
  'SON-GRDD-BASE60': number;
  'SON-GRDD-BASE65': number;
  'SON-GRDD-BASE70': number;
  'SON-GRDD-BASE72': number;
  'SON-GRDD-TB4886': number;
  'SON-GRDD-TB5086': number;
  'SON-HTDD-BASE40': number;
  'SON-HTDD-BASE45': number;
  'SON-HTDD-BASE50': number;
  'SON-HTDD-BASE55': number;
  'SON-HTDD-BASE57': number;
  'SON-HTDD-BASE60': number;
  'SON-HTDD-NORMAL': number;
  'SON-PRCP-AVGNDS-GE001HI': string;
  'SON-PRCP-AVGNDS-GE010HI': string;
  'SON-PRCP-AVGNDS-GE050HI': string;
  'SON-PRCP-AVGNDS-GE100HI': string;
  'SON-PRCP-NORMAL': number;
  'SON-SNOW-AVGNDS-GE001TI': string;
  'SON-SNOW-AVGNDS-GE010TI': string;
  'SON-SNOW-AVGNDS-GE030TI': string;
  'SON-SNOW-AVGNDS-GE050TI': string;
  'SON-SNOW-AVGNDS-GE100TI': string;
  'SON-SNOW-NORMAL': number;
  'SON-SNWD-AVGNDS-GE001WI': string;
  'SON-SNWD-AVGNDS-GE003WI': string;
  'SON-SNWD-AVGNDS-GE005WI': string;
  'SON-SNWD-AVGNDS-GE010WI': string;
  'SON-TAVG-NORMAL': number;
  'SON-TMAX-AVGNDS-GRTH040': string;
  'SON-TMAX-AVGNDS-GRTH050': string;
  'SON-TMAX-AVGNDS-GRTH060': string;
  'SON-TMAX-AVGNDS-GRTH070': string;
  'SON-TMAX-AVGNDS-GRTH080': string;
  'SON-TMAX-AVGNDS-GRTH090': string;
  'SON-TMAX-AVGNDS-GRTH100': string;
  'SON-TMAX-AVGNDS-LSTH032': string;
  'SON-TMAX-NORMAL': number;
  'SON-TMIN-AVGNDS-LSTH000': string;
  'SON-TMIN-AVGNDS-LSTH010': string;
  'SON-TMIN-AVGNDS-LSTH020': string;
  'SON-TMIN-AVGNDS-LSTH032': string;
  'SON-TMIN-AVGNDS-LSTH040': string;
  'SON-TMIN-AVGNDS-LSTH050': string;
  'SON-TMIN-AVGNDS-LSTH060': string;
  'SON-TMIN-AVGNDS-LSTH070': string;
  'SON-TMIN-NORMAL': number;
  alt: number;
  lat: string;
  lon: string;
  precipitation_flux: number;
  station_info: string;
  station_name: string;
  time: string;
}

export const NormalsAnnualSeasonalDataTypes: DataType[] = [
  {
    id: 'time',
    datasetId: 'normals-annualseasonal',
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
    datasetId: 'normals-annualseasonal',
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
    datasetId: 'normals-annualseasonal',
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
    id: 'precipitation_flux',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of seasonal precipitation totals forDecember-February',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'precipitation_flux',
      field: 'precipitation_flux',
    },
    standardColumnDef: {
      headerName: 'precipitation_flux(in)',
      field: 'precipitation_flux',
    },
  },
  {
    id: 'lon',
    datasetId: 'normals-annualseasonal',
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
    datasetId: 'normals-annualseasonal',
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
    datasetId: 'normals-annualseasonal',
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
    id: 'SON-TMIN-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of autumn minimum temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SON-TMIN-NORMAL(&deg;c)',
      field: 'SON-TMIN-NORMAL',
    },
    standardColumnDef: {
      headerName: 'SON-TMIN-NORMAL(&deg;f)',
      field: 'SON-TMIN-NORMAL',
    },
  },
  {
    id: 'SON-TMIN-AVGNDS-LSTH070',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per autumn where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-TMIN-AVGNDS-LSTH070',
      field: 'SON-TMIN-AVGNDS-LSTH070',
    },
    standardColumnDef: {
      headerName: 'SON-TMIN-AVGNDS-LSTH070',
      field: 'SON-TMIN-AVGNDS-LSTH070',
    },
  },
  {
    id: 'SON-TMIN-AVGNDS-LSTH060',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per autumn where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-TMIN-AVGNDS-LSTH060',
      field: 'SON-TMIN-AVGNDS-LSTH060',
    },
    standardColumnDef: {
      headerName: 'SON-TMIN-AVGNDS-LSTH060',
      field: 'SON-TMIN-AVGNDS-LSTH060',
    },
  },
  {
    id: 'SON-TMIN-AVGNDS-LSTH050',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per autumn where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-TMIN-AVGNDS-LSTH050',
      field: 'SON-TMIN-AVGNDS-LSTH050',
    },
    standardColumnDef: {
      headerName: 'SON-TMIN-AVGNDS-LSTH050',
      field: 'SON-TMIN-AVGNDS-LSTH050',
    },
  },
  {
    id: 'SON-TMIN-AVGNDS-LSTH040',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per autumn where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-TMIN-AVGNDS-LSTH040',
      field: 'SON-TMIN-AVGNDS-LSTH040',
    },
    standardColumnDef: {
      headerName: 'SON-TMIN-AVGNDS-LSTH040',
      field: 'SON-TMIN-AVGNDS-LSTH040',
    },
  },
  {
    id: 'SON-TMIN-AVGNDS-LSTH032',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per autumn where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-TMIN-AVGNDS-LSTH032',
      field: 'SON-TMIN-AVGNDS-LSTH032',
    },
    standardColumnDef: {
      headerName: 'SON-TMIN-AVGNDS-LSTH032',
      field: 'SON-TMIN-AVGNDS-LSTH032',
    },
  },
  {
    id: 'SON-TMIN-AVGNDS-LSTH020',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per autumn where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-TMIN-AVGNDS-LSTH020',
      field: 'SON-TMIN-AVGNDS-LSTH020',
    },
    standardColumnDef: {
      headerName: 'SON-TMIN-AVGNDS-LSTH020',
      field: 'SON-TMIN-AVGNDS-LSTH020',
    },
  },
  {
    id: 'SON-TMIN-AVGNDS-LSTH010',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per autumn where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-TMIN-AVGNDS-LSTH010',
      field: 'SON-TMIN-AVGNDS-LSTH010',
    },
    standardColumnDef: {
      headerName: 'SON-TMIN-AVGNDS-LSTH010',
      field: 'SON-TMIN-AVGNDS-LSTH010',
    },
  },
  {
    id: 'SON-TMIN-AVGNDS-LSTH000',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per autumn where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-TMIN-AVGNDS-LSTH000',
      field: 'SON-TMIN-AVGNDS-LSTH000',
    },
    standardColumnDef: {
      headerName: 'SON-TMIN-AVGNDS-LSTH000',
      field: 'SON-TMIN-AVGNDS-LSTH000',
    },
  },
  {
    id: 'SON-TMAX-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of autumn maximum temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SON-TMAX-NORMAL(&deg;c)',
      field: 'SON-TMAX-NORMAL',
    },
    standardColumnDef: {
      headerName: 'SON-TMAX-NORMAL(&deg;f)',
      field: 'SON-TMAX-NORMAL',
    },
  },
  {
    id: 'SON-TMAX-AVGNDS-LSTH032',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per autumn where tmax is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-TMAX-AVGNDS-LSTH032',
      field: 'SON-TMAX-AVGNDS-LSTH032',
    },
    standardColumnDef: {
      headerName: 'SON-TMAX-AVGNDS-LSTH032',
      field: 'SON-TMAX-AVGNDS-LSTH032',
    },
  },
  {
    id: 'SON-TMAX-AVGNDS-GRTH100',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per autumn where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-TMAX-AVGNDS-GRTH100',
      field: 'SON-TMAX-AVGNDS-GRTH100',
    },
    standardColumnDef: {
      headerName: 'SON-TMAX-AVGNDS-GRTH100',
      field: 'SON-TMAX-AVGNDS-GRTH100',
    },
  },
  {
    id: 'SON-TMAX-AVGNDS-GRTH090',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per autumn where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-TMAX-AVGNDS-GRTH090',
      field: 'SON-TMAX-AVGNDS-GRTH090',
    },
    standardColumnDef: {
      headerName: 'SON-TMAX-AVGNDS-GRTH090',
      field: 'SON-TMAX-AVGNDS-GRTH090',
    },
  },
  {
    id: 'SON-TMAX-AVGNDS-GRTH080',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per autumn where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-TMAX-AVGNDS-GRTH080',
      field: 'SON-TMAX-AVGNDS-GRTH080',
    },
    standardColumnDef: {
      headerName: 'SON-TMAX-AVGNDS-GRTH080',
      field: 'SON-TMAX-AVGNDS-GRTH080',
    },
  },
  {
    id: 'SON-TMAX-AVGNDS-GRTH070',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per autumn where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-TMAX-AVGNDS-GRTH070',
      field: 'SON-TMAX-AVGNDS-GRTH070',
    },
    standardColumnDef: {
      headerName: 'SON-TMAX-AVGNDS-GRTH070',
      field: 'SON-TMAX-AVGNDS-GRTH070',
    },
  },
  {
    id: 'SON-TMAX-AVGNDS-GRTH060',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per autumn where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-TMAX-AVGNDS-GRTH060',
      field: 'SON-TMAX-AVGNDS-GRTH060',
    },
    standardColumnDef: {
      headerName: 'SON-TMAX-AVGNDS-GRTH060',
      field: 'SON-TMAX-AVGNDS-GRTH060',
    },
  },
  {
    id: 'SON-TMAX-AVGNDS-GRTH050',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per autumn where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-TMAX-AVGNDS-GRTH050',
      field: 'SON-TMAX-AVGNDS-GRTH050',
    },
    standardColumnDef: {
      headerName: 'SON-TMAX-AVGNDS-GRTH050',
      field: 'SON-TMAX-AVGNDS-GRTH050',
    },
  },
  {
    id: 'SON-TMAX-AVGNDS-GRTH040',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per autumn where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-TMAX-AVGNDS-GRTH040',
      field: 'SON-TMAX-AVGNDS-GRTH040',
    },
    standardColumnDef: {
      headerName: 'SON-TMAX-AVGNDS-GRTH040',
      field: 'SON-TMAX-AVGNDS-GRTH040',
    },
  },
  {
    id: 'SON-TAVG-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of autumn average temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SON-TAVG-NORMAL(&deg;c)',
      field: 'SON-TAVG-NORMAL',
    },
    standardColumnDef: {
      headerName: 'SON-TAVG-NORMAL(&deg;f)',
      field: 'SON-TAVG-NORMAL',
    },
  },
  {
    id: 'SON-SNWD-AVGNDS-GE010WI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during September-November with snow depth ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-SNWD-AVGNDS-GE010WI',
      field: 'SON-SNWD-AVGNDS-GE010WI',
    },
    standardColumnDef: {
      headerName: 'SON-SNWD-AVGNDS-GE010WI',
      field: 'SON-SNWD-AVGNDS-GE010WI',
    },
  },
  {
    id: 'SON-SNWD-AVGNDS-GE005WI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during September-November with snow depth ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-SNWD-AVGNDS-GE005WI',
      field: 'SON-SNWD-AVGNDS-GE005WI',
    },
    standardColumnDef: {
      headerName: 'SON-SNWD-AVGNDS-GE005WI',
      field: 'SON-SNWD-AVGNDS-GE005WI',
    },
  },
  {
    id: 'SON-SNWD-AVGNDS-GE003WI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during September-November with snow depth ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-SNWD-AVGNDS-GE003WI',
      field: 'SON-SNWD-AVGNDS-GE003WI',
    },
    standardColumnDef: {
      headerName: 'SON-SNWD-AVGNDS-GE003WI',
      field: 'SON-SNWD-AVGNDS-GE003WI',
    },
  },
  {
    id: 'SON-SNWD-AVGNDS-GE001WI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during September-November with snow depth ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-SNWD-AVGNDS-GE001WI',
      field: 'SON-SNWD-AVGNDS-GE001WI',
    },
    standardColumnDef: {
      headerName: 'SON-SNWD-AVGNDS-GE001WI',
      field: 'SON-SNWD-AVGNDS-GE001WI',
    },
  },
  {
    id: 'SON-SNOW-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of seasonal snowfall totals for September-November',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-SNOW-NORMAL',
      field: 'SON-SNOW-NORMAL',
    },
    standardColumnDef: {
      headerName: 'SON-SNOW-NORMAL(in)',
      field: 'SON-SNOW-NORMAL',
    },
  },
  {
    id: 'SON-SNOW-AVGNDS-GE100TI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during September-November with snowfall >=',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-SNOW-AVGNDS-GE100TI',
      field: 'SON-SNOW-AVGNDS-GE100TI',
    },
    standardColumnDef: {
      headerName: 'SON-SNOW-AVGNDS-GE100TI',
      field: 'SON-SNOW-AVGNDS-GE100TI',
    },
  },
  {
    id: 'SON-SNOW-AVGNDS-GE050TI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during September-November with snowfall >=',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-SNOW-AVGNDS-GE050TI',
      field: 'SON-SNOW-AVGNDS-GE050TI',
    },
    standardColumnDef: {
      headerName: 'SON-SNOW-AVGNDS-GE050TI',
      field: 'SON-SNOW-AVGNDS-GE050TI',
    },
  },
  {
    id: 'SON-SNOW-AVGNDS-GE030TI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during September-November with snowfall >=',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-SNOW-AVGNDS-GE030TI',
      field: 'SON-SNOW-AVGNDS-GE030TI',
    },
    standardColumnDef: {
      headerName: 'SON-SNOW-AVGNDS-GE030TI',
      field: 'SON-SNOW-AVGNDS-GE030TI',
    },
  },
  {
    id: 'SON-SNOW-AVGNDS-GE010TI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during September-November with snowfall >=',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-SNOW-AVGNDS-GE010TI',
      field: 'SON-SNOW-AVGNDS-GE010TI',
    },
    standardColumnDef: {
      headerName: 'SON-SNOW-AVGNDS-GE010TI',
      field: 'SON-SNOW-AVGNDS-GE010TI',
    },
  },
  {
    id: 'SON-SNOW-AVGNDS-GE001TI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during September-November with snowfall >=',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-SNOW-AVGNDS-GE001TI',
      field: 'SON-SNOW-AVGNDS-GE001TI',
    },
    standardColumnDef: {
      headerName: 'SON-SNOW-AVGNDS-GE001TI',
      field: 'SON-SNOW-AVGNDS-GE001TI',
    },
  },
  {
    id: 'SON-PRCP-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of seasonal precipitation totals for September-November',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-PRCP-NORMAL',
      field: 'SON-PRCP-NORMAL',
    },
    standardColumnDef: {
      headerName: 'SON-PRCP-NORMAL(in)',
      field: 'SON-PRCP-NORMAL',
    },
  },
  {
    id: 'SON-PRCP-AVGNDS-GE100HI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during September-November with precipitati',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-PRCP-AVGNDS-GE100HI',
      field: 'SON-PRCP-AVGNDS-GE100HI',
    },
    standardColumnDef: {
      headerName: 'SON-PRCP-AVGNDS-GE100HI',
      field: 'SON-PRCP-AVGNDS-GE100HI',
    },
  },
  {
    id: 'SON-PRCP-AVGNDS-GE050HI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during September-November with precipitati',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-PRCP-AVGNDS-GE050HI',
      field: 'SON-PRCP-AVGNDS-GE050HI',
    },
    standardColumnDef: {
      headerName: 'SON-PRCP-AVGNDS-GE050HI',
      field: 'SON-PRCP-AVGNDS-GE050HI',
    },
  },
  {
    id: 'SON-PRCP-AVGNDS-GE010HI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during September-November with precipitati',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-PRCP-AVGNDS-GE010HI',
      field: 'SON-PRCP-AVGNDS-GE010HI',
    },
    standardColumnDef: {
      headerName: 'SON-PRCP-AVGNDS-GE010HI',
      field: 'SON-PRCP-AVGNDS-GE010HI',
    },
  },
  {
    id: 'SON-PRCP-AVGNDS-GE001HI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during September-November with precipitati',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'SON-PRCP-AVGNDS-GE001HI',
      field: 'SON-PRCP-AVGNDS-GE001HI',
    },
    standardColumnDef: {
      headerName: 'SON-PRCP-AVGNDS-GE001HI',
      field: 'SON-PRCP-AVGNDS-GE001HI',
    },
  },
  {
    id: 'SON-HTDD-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of autumn heating degree days with base 65F',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SON-HTDD-NORMAL(&deg;c)',
      field: 'SON-HTDD-NORMAL',
    },
    standardColumnDef: {
      headerName: 'SON-HTDD-NORMAL(&deg;f)',
      field: 'SON-HTDD-NORMAL',
    },
  },
  {
    id: 'SON-HTDD-BASE60',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of autumn heating degree days with base 60F',
    selected: false,
    metricUnits: '&deg;c@15.6',
    standardUnits: '&deg;c@15.6',
    metricColumnDef: {
      headerName: 'SON-HTDD-BASE60(&deg;c@15.6)',
      field: 'SON-HTDD-BASE60',
    },
    standardColumnDef: {
      headerName: 'SON-HTDD-BASE60(&deg;f@60)',
      field: 'SON-HTDD-BASE60',
    },
  },
  {
    id: 'SON-HTDD-BASE57',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of autumn heating degree days with base 57F',
    selected: false,
    metricUnits: '&deg;c@13.9',
    standardUnits: '&deg;c@13.9',
    metricColumnDef: {
      headerName: 'SON-HTDD-BASE57(&deg;c@13.9)',
      field: 'SON-HTDD-BASE57',
    },
    standardColumnDef: {
      headerName: 'SON-HTDD-BASE57(&deg;f@57)',
      field: 'SON-HTDD-BASE57',
    },
  },
  {
    id: 'SON-HTDD-BASE55',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of autumn heating degree days with base 55F',
    selected: false,
    metricUnits: '&deg;c@12.8',
    standardUnits: '&deg;c@12.8',
    metricColumnDef: {
      headerName: 'SON-HTDD-BASE55(&deg;c@12.8)',
      field: 'SON-HTDD-BASE55',
    },
    standardColumnDef: {
      headerName: 'SON-HTDD-BASE55(&deg;f@55)',
      field: 'SON-HTDD-BASE55',
    },
  },
  {
    id: 'SON-HTDD-BASE50',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of autumn heating degree days with base 50F',
    selected: false,
    metricUnits: '&deg;c@10.0',
    standardUnits: '&deg;c@10.0',
    metricColumnDef: {
      headerName: 'SON-HTDD-BASE50(&deg;c@10.0)',
      field: 'SON-HTDD-BASE50',
    },
    standardColumnDef: {
      headerName: 'SON-HTDD-BASE50(&deg;f@50)',
      field: 'SON-HTDD-BASE50',
    },
  },
  {
    id: 'SON-HTDD-BASE45',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of autumn heating degree days with base 45F',
    selected: false,
    metricUnits: '&deg;c@7.2',
    standardUnits: '&deg;c@7.2',
    metricColumnDef: {
      headerName: 'SON-HTDD-BASE45(&deg;c@7.2)',
      field: 'SON-HTDD-BASE45',
    },
    standardColumnDef: {
      headerName: 'SON-HTDD-BASE45(&deg;f@45)',
      field: 'SON-HTDD-BASE45',
    },
  },
  {
    id: 'SON-HTDD-BASE40',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of autumn heating degree days with base 40F',
    selected: false,
    metricUnits: '&deg;c@4.4',
    standardUnits: '&deg;c@4.4',
    metricColumnDef: {
      headerName: 'SON-HTDD-BASE40(&deg;c@4.4)',
      field: 'SON-HTDD-BASE40',
    },
    standardColumnDef: {
      headerName: 'SON-HTDD-BASE40(&deg;f@40)',
      field: 'SON-HTDD-BASE40',
    },
  },
  {
    id: 'SON-GRDD-TB5086',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer growing degree days with truncated bases 50F and 8',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SON-GRDD-TB5086(&deg;c)',
      field: 'SON-GRDD-TB5086',
    },
    standardColumnDef: {
      headerName: 'SON-GRDD-TB5086(&deg;f)',
      field: 'SON-GRDD-TB5086',
    },
  },
  {
    id: 'SON-GRDD-TB4886',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer growing degree days with truncated bases 48F and 8',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SON-GRDD-TB4886(&deg;c)',
      field: 'SON-GRDD-TB4886',
    },
    standardColumnDef: {
      headerName: 'SON-GRDD-TB4886(&deg;f)',
      field: 'SON-GRDD-TB4886',
    },
  },
  {
    id: 'SON-GRDD-BASE72',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of fall growing degree days with base 72F',
    selected: false,
    metricUnits: '&deg;c@22.2',
    standardUnits: '&deg;c@22.2',
    metricColumnDef: {
      headerName: 'SON-GRDD-BASE72(&deg;c@22.2)',
      field: 'SON-GRDD-BASE72',
    },
    standardColumnDef: {
      headerName: 'SON-GRDD-BASE72(&deg;f@72)',
      field: 'SON-GRDD-BASE72',
    },
  },
  {
    id: 'SON-GRDD-BASE70',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of fall growing degree days with base 70F',
    selected: false,
    metricUnits: '&deg;c@21.1',
    standardUnits: '&deg;c@21.1',
    metricColumnDef: {
      headerName: 'SON-GRDD-BASE70(&deg;c@21.1)',
      field: 'SON-GRDD-BASE70',
    },
    standardColumnDef: {
      headerName: 'SON-GRDD-BASE70(&deg;f@70)',
      field: 'SON-GRDD-BASE70',
    },
  },
  {
    id: 'SON-GRDD-BASE65',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of fall growing degree days with base 65F',
    selected: false,
    metricUnits: '&deg;c@18.3',
    standardUnits: '&deg;c@18.3',
    metricColumnDef: {
      headerName: 'SON-GRDD-BASE65(&deg;c@18.3)',
      field: 'SON-GRDD-BASE65',
    },
    standardColumnDef: {
      headerName: 'SON-GRDD-BASE65(&deg;f@65)',
      field: 'SON-GRDD-BASE65',
    },
  },
  {
    id: 'SON-GRDD-BASE60',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of fall growing degree days with base 60F',
    selected: false,
    metricUnits: '&deg;c@15.6',
    standardUnits: '&deg;c@15.6',
    metricColumnDef: {
      headerName: 'SON-GRDD-BASE60(&deg;c@15.6)',
      field: 'SON-GRDD-BASE60',
    },
    standardColumnDef: {
      headerName: 'SON-GRDD-BASE60(&deg;f@60)',
      field: 'SON-GRDD-BASE60',
    },
  },
  {
    id: 'SON-GRDD-BASE57',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of fall growing degree days with base 57F',
    selected: false,
    metricUnits: '&deg;c@13.9',
    standardUnits: '&deg;c@13.9',
    metricColumnDef: {
      headerName: 'SON-GRDD-BASE57(&deg;c@13.9)',
      field: 'SON-GRDD-BASE57',
    },
    standardColumnDef: {
      headerName: 'SON-GRDD-BASE57(&deg;f@57)',
      field: 'SON-GRDD-BASE57',
    },
  },
  {
    id: 'SON-GRDD-BASE55',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of fall growing degree days with base 55F',
    selected: false,
    metricUnits: '&deg;c@12.8',
    standardUnits: '&deg;c@12.8',
    metricColumnDef: {
      headerName: 'SON-GRDD-BASE55(&deg;c@12.8)',
      field: 'SON-GRDD-BASE55',
    },
    standardColumnDef: {
      headerName: 'SON-GRDD-BASE55(&deg;f@55)',
      field: 'SON-GRDD-BASE55',
    },
  },
  {
    id: 'SON-GRDD-BASE50',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of fall growing degree days with base 50F',
    selected: false,
    metricUnits: '&deg;c@10.0',
    standardUnits: '&deg;c@10.0',
    metricColumnDef: {
      headerName: 'SON-GRDD-BASE50(&deg;c@10.0)',
      field: 'SON-GRDD-BASE50',
    },
    standardColumnDef: {
      headerName: 'SON-GRDD-BASE50(&deg;f@50)',
      field: 'SON-GRDD-BASE50',
    },
  },
  {
    id: 'SON-GRDD-BASE45',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of fall growing degree days with base 45F',
    selected: false,
    metricUnits: '&deg;c@7.2',
    standardUnits: '&deg;c@7.2',
    metricColumnDef: {
      headerName: 'SON-GRDD-BASE45(&deg;c@7.2)',
      field: 'SON-GRDD-BASE45',
    },
    standardColumnDef: {
      headerName: 'SON-GRDD-BASE45(&deg;f@45)',
      field: 'SON-GRDD-BASE45',
    },
  },
  {
    id: 'SON-GRDD-BASE40',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of fall growing degree days with base 40F',
    selected: false,
    metricUnits: '&deg;c@4.4',
    standardUnits: '&deg;c@4.4',
    metricColumnDef: {
      headerName: 'SON-GRDD-BASE40(&deg;c@4.4)',
      field: 'SON-GRDD-BASE40',
    },
    standardColumnDef: {
      headerName: 'SON-GRDD-BASE40(&deg;f@40)',
      field: 'SON-GRDD-BASE40',
    },
  },
  {
    id: 'SON-DUTR-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of autumn diurnal temperature range',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SON-DUTR-NORMAL(&deg;c)',
      field: 'SON-DUTR-NORMAL',
    },
    standardColumnDef: {
      headerName: 'SON-DUTR-NORMAL(&deg;f)',
      field: 'SON-DUTR-NORMAL',
    },
  },
  {
    id: 'SON-CLDD-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of autumn cooling degree days with base 65F',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'SON-CLDD-NORMAL(&deg;c)',
      field: 'SON-CLDD-NORMAL',
    },
    standardColumnDef: {
      headerName: 'SON-CLDD-NORMAL(&deg;f)',
      field: 'SON-CLDD-NORMAL',
    },
  },
  {
    id: 'SON-CLDD-BASE72',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of autumn cooling degree days with base 72F',
    selected: false,
    metricUnits: '&deg;c@22.2',
    standardUnits: '&deg;c@22.2',
    metricColumnDef: {
      headerName: 'SON-CLDD-BASE72(&deg;c@22.2)',
      field: 'SON-CLDD-BASE72',
    },
    standardColumnDef: {
      headerName: 'SON-CLDD-BASE72(&deg;f@72)',
      field: 'SON-CLDD-BASE72',
    },
  },
  {
    id: 'SON-CLDD-BASE70',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of autumn cooling degree days with base 70F',
    selected: false,
    metricUnits: '&deg;c@21.1',
    standardUnits: '&deg;c@21.1',
    metricColumnDef: {
      headerName: 'SON-CLDD-BASE70(&deg;c@21.1)',
      field: 'SON-CLDD-BASE70',
    },
    standardColumnDef: {
      headerName: 'SON-CLDD-BASE70(&deg;f@70)',
      field: 'SON-CLDD-BASE70',
    },
  },
  {
    id: 'SON-CLDD-BASE60',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of autumn cooling degree days with base 60F',
    selected: false,
    metricUnits: '&deg;c@15.6',
    standardUnits: '&deg;c@15.6',
    metricColumnDef: {
      headerName: 'SON-CLDD-BASE60(&deg;c@15.6)',
      field: 'SON-CLDD-BASE60',
    },
    standardColumnDef: {
      headerName: 'SON-CLDD-BASE60(&deg;f@60)',
      field: 'SON-CLDD-BASE60',
    },
  },
  {
    id: 'SON-CLDD-BASE57',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of autumn cooling degree days with base 57F',
    selected: false,
    metricUnits: '&deg;c@13.9',
    standardUnits: '&deg;c@13.9',
    metricColumnDef: {
      headerName: 'SON-CLDD-BASE57(&deg;c@13.9)',
      field: 'SON-CLDD-BASE57',
    },
    standardColumnDef: {
      headerName: 'SON-CLDD-BASE57(&deg;f@57)',
      field: 'SON-CLDD-BASE57',
    },
  },
  {
    id: 'SON-CLDD-BASE55',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of autumn cooling degree days with base 55F',
    selected: false,
    metricUnits: '&deg;c@12.8',
    standardUnits: '&deg;c@12.8',
    metricColumnDef: {
      headerName: 'SON-CLDD-BASE55(&deg;c@12.8)',
      field: 'SON-CLDD-BASE55',
    },
    standardColumnDef: {
      headerName: 'SON-CLDD-BASE55(&deg;f@55)',
      field: 'SON-CLDD-BASE55',
    },
  },
  {
    id: 'SON-CLDD-BASE50',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of autumn cooling degree days with base 50F',
    selected: false,
    metricUnits: '&deg;c@10.0',
    standardUnits: '&deg;c@10.0',
    metricColumnDef: {
      headerName: 'SON-CLDD-BASE50(&deg;c@10.0)',
      field: 'SON-CLDD-BASE50',
    },
    standardColumnDef: {
      headerName: 'SON-CLDD-BASE50(&deg;f@50)',
      field: 'SON-CLDD-BASE50',
    },
  },
  {
    id: 'SON-CLDD-BASE45',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of autumn cooling degree days with base 45F',
    selected: false,
    metricUnits: '&deg;c@7.2',
    standardUnits: '&deg;c@7.2',
    metricColumnDef: {
      headerName: 'SON-CLDD-BASE45(&deg;c@7.2)',
      field: 'SON-CLDD-BASE45',
    },
    standardColumnDef: {
      headerName: 'SON-CLDD-BASE45(&deg;f@45)',
      field: 'SON-CLDD-BASE45',
    },
  },
  {
    id: 'MAM-TMIN-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring minimum temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MAM-TMIN-NORMAL(&deg;c)',
      field: 'MAM-TMIN-NORMAL',
    },
    standardColumnDef: {
      headerName: 'MAM-TMIN-NORMAL(&deg;f)',
      field: 'MAM-TMIN-NORMAL',
    },
  },
  {
    id: 'MAM-TMIN-AVGNDS-LSTH070',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per spring where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-TMIN-AVGNDS-LSTH070',
      field: 'MAM-TMIN-AVGNDS-LSTH070',
    },
    standardColumnDef: {
      headerName: 'MAM-TMIN-AVGNDS-LSTH070',
      field: 'MAM-TMIN-AVGNDS-LSTH070',
    },
  },
  {
    id: 'MAM-TMIN-AVGNDS-LSTH060',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per spring where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-TMIN-AVGNDS-LSTH060',
      field: 'MAM-TMIN-AVGNDS-LSTH060',
    },
    standardColumnDef: {
      headerName: 'MAM-TMIN-AVGNDS-LSTH060',
      field: 'MAM-TMIN-AVGNDS-LSTH060',
    },
  },
  {
    id: 'MAM-TMIN-AVGNDS-LSTH050',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per spring where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-TMIN-AVGNDS-LSTH050',
      field: 'MAM-TMIN-AVGNDS-LSTH050',
    },
    standardColumnDef: {
      headerName: 'MAM-TMIN-AVGNDS-LSTH050',
      field: 'MAM-TMIN-AVGNDS-LSTH050',
    },
  },
  {
    id: 'MAM-TMIN-AVGNDS-LSTH040',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per spring where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-TMIN-AVGNDS-LSTH040',
      field: 'MAM-TMIN-AVGNDS-LSTH040',
    },
    standardColumnDef: {
      headerName: 'MAM-TMIN-AVGNDS-LSTH040',
      field: 'MAM-TMIN-AVGNDS-LSTH040',
    },
  },
  {
    id: 'MAM-TMIN-AVGNDS-LSTH032',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per spring where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-TMIN-AVGNDS-LSTH032',
      field: 'MAM-TMIN-AVGNDS-LSTH032',
    },
    standardColumnDef: {
      headerName: 'MAM-TMIN-AVGNDS-LSTH032',
      field: 'MAM-TMIN-AVGNDS-LSTH032',
    },
  },
  {
    id: 'MAM-TMIN-AVGNDS-LSTH020',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per spring where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-TMIN-AVGNDS-LSTH020',
      field: 'MAM-TMIN-AVGNDS-LSTH020',
    },
    standardColumnDef: {
      headerName: 'MAM-TMIN-AVGNDS-LSTH020',
      field: 'MAM-TMIN-AVGNDS-LSTH020',
    },
  },
  {
    id: 'MAM-TMIN-AVGNDS-LSTH010',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per spring where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-TMIN-AVGNDS-LSTH010',
      field: 'MAM-TMIN-AVGNDS-LSTH010',
    },
    standardColumnDef: {
      headerName: 'MAM-TMIN-AVGNDS-LSTH010',
      field: 'MAM-TMIN-AVGNDS-LSTH010',
    },
  },
  {
    id: 'MAM-TMIN-AVGNDS-LSTH000',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per spring where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-TMIN-AVGNDS-LSTH000',
      field: 'MAM-TMIN-AVGNDS-LSTH000',
    },
    standardColumnDef: {
      headerName: 'MAM-TMIN-AVGNDS-LSTH000',
      field: 'MAM-TMIN-AVGNDS-LSTH000',
    },
  },
  {
    id: 'MAM-TMAX-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring maximum temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MAM-TMAX-NORMAL(&deg;c)',
      field: 'MAM-TMAX-NORMAL',
    },
    standardColumnDef: {
      headerName: 'MAM-TMAX-NORMAL(&deg;f)',
      field: 'MAM-TMAX-NORMAL',
    },
  },
  {
    id: 'MAM-TMAX-AVGNDS-LSTH032',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per spring where tmax is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-TMAX-AVGNDS-LSTH032',
      field: 'MAM-TMAX-AVGNDS-LSTH032',
    },
    standardColumnDef: {
      headerName: 'MAM-TMAX-AVGNDS-LSTH032',
      field: 'MAM-TMAX-AVGNDS-LSTH032',
    },
  },
  {
    id: 'MAM-TMAX-AVGNDS-GRTH100',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per spring where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-TMAX-AVGNDS-GRTH100',
      field: 'MAM-TMAX-AVGNDS-GRTH100',
    },
    standardColumnDef: {
      headerName: 'MAM-TMAX-AVGNDS-GRTH100',
      field: 'MAM-TMAX-AVGNDS-GRTH100',
    },
  },
  {
    id: 'MAM-TMAX-AVGNDS-GRTH090',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per spring where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-TMAX-AVGNDS-GRTH090',
      field: 'MAM-TMAX-AVGNDS-GRTH090',
    },
    standardColumnDef: {
      headerName: 'MAM-TMAX-AVGNDS-GRTH090',
      field: 'MAM-TMAX-AVGNDS-GRTH090',
    },
  },
  {
    id: 'MAM-TMAX-AVGNDS-GRTH080',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per spring where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-TMAX-AVGNDS-GRTH080',
      field: 'MAM-TMAX-AVGNDS-GRTH080',
    },
    standardColumnDef: {
      headerName: 'MAM-TMAX-AVGNDS-GRTH080',
      field: 'MAM-TMAX-AVGNDS-GRTH080',
    },
  },
  {
    id: 'MAM-TMAX-AVGNDS-GRTH070',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per spring where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-TMAX-AVGNDS-GRTH070',
      field: 'MAM-TMAX-AVGNDS-GRTH070',
    },
    standardColumnDef: {
      headerName: 'MAM-TMAX-AVGNDS-GRTH070',
      field: 'MAM-TMAX-AVGNDS-GRTH070',
    },
  },
  {
    id: 'MAM-TMAX-AVGNDS-GRTH060',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per spring where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-TMAX-AVGNDS-GRTH060',
      field: 'MAM-TMAX-AVGNDS-GRTH060',
    },
    standardColumnDef: {
      headerName: 'MAM-TMAX-AVGNDS-GRTH060',
      field: 'MAM-TMAX-AVGNDS-GRTH060',
    },
  },
  {
    id: 'MAM-TMAX-AVGNDS-GRTH050',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per spring where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-TMAX-AVGNDS-GRTH050',
      field: 'MAM-TMAX-AVGNDS-GRTH050',
    },
    standardColumnDef: {
      headerName: 'MAM-TMAX-AVGNDS-GRTH050',
      field: 'MAM-TMAX-AVGNDS-GRTH050',
    },
  },
  {
    id: 'MAM-TMAX-AVGNDS-GRTH040',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per spring where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-TMAX-AVGNDS-GRTH040',
      field: 'MAM-TMAX-AVGNDS-GRTH040',
    },
    standardColumnDef: {
      headerName: 'MAM-TMAX-AVGNDS-GRTH040',
      field: 'MAM-TMAX-AVGNDS-GRTH040',
    },
  },
  {
    id: 'MAM-TAVG-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring average temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MAM-TAVG-NORMAL(&deg;c)',
      field: 'MAM-TAVG-NORMAL',
    },
    standardColumnDef: {
      headerName: 'MAM-TAVG-NORMAL(&deg;f)',
      field: 'MAM-TAVG-NORMAL',
    },
  },
  {
    id: 'MAM-SNWD-AVGNDS-GE010WI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during March-May with snow depth >= 10 inc',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-SNWD-AVGNDS-GE010WI',
      field: 'MAM-SNWD-AVGNDS-GE010WI',
    },
    standardColumnDef: {
      headerName: 'MAM-SNWD-AVGNDS-GE010WI',
      field: 'MAM-SNWD-AVGNDS-GE010WI',
    },
  },
  {
    id: 'MAM-SNWD-AVGNDS-GE005WI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during March-May with snow depth >= 5 inch',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-SNWD-AVGNDS-GE005WI',
      field: 'MAM-SNWD-AVGNDS-GE005WI',
    },
    standardColumnDef: {
      headerName: 'MAM-SNWD-AVGNDS-GE005WI',
      field: 'MAM-SNWD-AVGNDS-GE005WI',
    },
  },
  {
    id: 'MAM-SNWD-AVGNDS-GE003WI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during March-May with snow depth >= 3 inch',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-SNWD-AVGNDS-GE003WI',
      field: 'MAM-SNWD-AVGNDS-GE003WI',
    },
    standardColumnDef: {
      headerName: 'MAM-SNWD-AVGNDS-GE003WI',
      field: 'MAM-SNWD-AVGNDS-GE003WI',
    },
  },
  {
    id: 'MAM-SNWD-AVGNDS-GE001WI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during March-May with snow depth >= 1 inch',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-SNWD-AVGNDS-GE001WI',
      field: 'MAM-SNWD-AVGNDS-GE001WI',
    },
    standardColumnDef: {
      headerName: 'MAM-SNWD-AVGNDS-GE001WI',
      field: 'MAM-SNWD-AVGNDS-GE001WI',
    },
  },
  {
    id: 'MAM-SNOW-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of seasonal snowfall totals for March-May',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-SNOW-NORMAL',
      field: 'MAM-SNOW-NORMAL',
    },
    standardColumnDef: {
      headerName: 'MAM-SNOW-NORMAL(in)',
      field: 'MAM-SNOW-NORMAL',
    },
  },
  {
    id: 'MAM-SNOW-AVGNDS-GE100TI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during March-May with snowfall >= 10.0 inc',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-SNOW-AVGNDS-GE100TI',
      field: 'MAM-SNOW-AVGNDS-GE100TI',
    },
    standardColumnDef: {
      headerName: 'MAM-SNOW-AVGNDS-GE100TI',
      field: 'MAM-SNOW-AVGNDS-GE100TI',
    },
  },
  {
    id: 'MAM-SNOW-AVGNDS-GE050TI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during March-May with snowfall >= 5.0 inch',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-SNOW-AVGNDS-GE050TI',
      field: 'MAM-SNOW-AVGNDS-GE050TI',
    },
    standardColumnDef: {
      headerName: 'MAM-SNOW-AVGNDS-GE050TI',
      field: 'MAM-SNOW-AVGNDS-GE050TI',
    },
  },
  {
    id: 'MAM-SNOW-AVGNDS-GE030TI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during March-May with snowfall >= 3.0 inch',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-SNOW-AVGNDS-GE030TI',
      field: 'MAM-SNOW-AVGNDS-GE030TI',
    },
    standardColumnDef: {
      headerName: 'MAM-SNOW-AVGNDS-GE030TI',
      field: 'MAM-SNOW-AVGNDS-GE030TI',
    },
  },
  {
    id: 'MAM-SNOW-AVGNDS-GE010TI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during March-May with snowfall >= 1.0 inch',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-SNOW-AVGNDS-GE010TI',
      field: 'MAM-SNOW-AVGNDS-GE010TI',
    },
    standardColumnDef: {
      headerName: 'MAM-SNOW-AVGNDS-GE010TI',
      field: 'MAM-SNOW-AVGNDS-GE010TI',
    },
  },
  {
    id: 'MAM-SNOW-AVGNDS-GE001TI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during March-May with snowfall >= 0.1 inch',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-SNOW-AVGNDS-GE001TI',
      field: 'MAM-SNOW-AVGNDS-GE001TI',
    },
    standardColumnDef: {
      headerName: 'MAM-SNOW-AVGNDS-GE001TI',
      field: 'MAM-SNOW-AVGNDS-GE001TI',
    },
  },
  {
    id: 'MAM-PRCP-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of seasonal precipitation totals for March-May',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-PRCP-NORMAL',
      field: 'MAM-PRCP-NORMAL',
    },
    standardColumnDef: {
      headerName: 'MAM-PRCP-NORMAL(in)',
      field: 'MAM-PRCP-NORMAL',
    },
  },
  {
    id: 'MAM-PRCP-AVGNDS-GE100HI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during March-May with precipitation >= 1.0',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-PRCP-AVGNDS-GE100HI',
      field: 'MAM-PRCP-AVGNDS-GE100HI',
    },
    standardColumnDef: {
      headerName: 'MAM-PRCP-AVGNDS-GE100HI',
      field: 'MAM-PRCP-AVGNDS-GE100HI',
    },
  },
  {
    id: 'MAM-PRCP-AVGNDS-GE050HI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during March-May with precipitation >= 0.5',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-PRCP-AVGNDS-GE050HI',
      field: 'MAM-PRCP-AVGNDS-GE050HI',
    },
    standardColumnDef: {
      headerName: 'MAM-PRCP-AVGNDS-GE050HI',
      field: 'MAM-PRCP-AVGNDS-GE050HI',
    },
  },
  {
    id: 'MAM-PRCP-AVGNDS-GE010HI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during March-May with precipitation >= a 0',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-PRCP-AVGNDS-GE010HI',
      field: 'MAM-PRCP-AVGNDS-GE010HI',
    },
    standardColumnDef: {
      headerName: 'MAM-PRCP-AVGNDS-GE010HI',
      field: 'MAM-PRCP-AVGNDS-GE010HI',
    },
  },
  {
    id: 'MAM-PRCP-AVGNDS-GE001HI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during March-May with precipitation >= 0.0',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'MAM-PRCP-AVGNDS-GE001HI',
      field: 'MAM-PRCP-AVGNDS-GE001HI',
    },
    standardColumnDef: {
      headerName: 'MAM-PRCP-AVGNDS-GE001HI',
      field: 'MAM-PRCP-AVGNDS-GE001HI',
    },
  },
  {
    id: 'MAM-HTDD-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring heating degree days with base 65F',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MAM-HTDD-NORMAL(&deg;c)',
      field: 'MAM-HTDD-NORMAL',
    },
    standardColumnDef: {
      headerName: 'MAM-HTDD-NORMAL(&deg;f)',
      field: 'MAM-HTDD-NORMAL',
    },
  },
  {
    id: 'MAM-HTDD-BASE60',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring heating degree days with base 60F',
    selected: false,
    metricUnits: '&deg;c@15.6',
    standardUnits: '&deg;c@15.6',
    metricColumnDef: {
      headerName: 'MAM-HTDD-BASE60(&deg;c@15.6)',
      field: 'MAM-HTDD-BASE60',
    },
    standardColumnDef: {
      headerName: 'MAM-HTDD-BASE60(&deg;f@60)',
      field: 'MAM-HTDD-BASE60',
    },
  },
  {
    id: 'MAM-HTDD-BASE57',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring heating degree days with base 57F',
    selected: false,
    metricUnits: '&deg;c@13.9',
    standardUnits: '&deg;c@13.9',
    metricColumnDef: {
      headerName: 'MAM-HTDD-BASE57(&deg;c@13.9)',
      field: 'MAM-HTDD-BASE57',
    },
    standardColumnDef: {
      headerName: 'MAM-HTDD-BASE57(&deg;f@57)',
      field: 'MAM-HTDD-BASE57',
    },
  },
  {
    id: 'MAM-HTDD-BASE55',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring heating degree days with base 55F',
    selected: false,
    metricUnits: '&deg;c@12.8',
    standardUnits: '&deg;c@12.8',
    metricColumnDef: {
      headerName: 'MAM-HTDD-BASE55(&deg;c@12.8)',
      field: 'MAM-HTDD-BASE55',
    },
    standardColumnDef: {
      headerName: 'MAM-HTDD-BASE55(&deg;f@55)',
      field: 'MAM-HTDD-BASE55',
    },
  },
  {
    id: 'MAM-HTDD-BASE50',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring heating degree days with base 50F',
    selected: false,
    metricUnits: '&deg;c@10.0',
    standardUnits: '&deg;c@10.0',
    metricColumnDef: {
      headerName: 'MAM-HTDD-BASE50(&deg;c@10.0)',
      field: 'MAM-HTDD-BASE50',
    },
    standardColumnDef: {
      headerName: 'MAM-HTDD-BASE50(&deg;f@50)',
      field: 'MAM-HTDD-BASE50',
    },
  },
  {
    id: 'MAM-HTDD-BASE45',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring heating degree days with base 45F',
    selected: false,
    metricUnits: '&deg;c@7.2',
    standardUnits: '&deg;c@7.2',
    metricColumnDef: {
      headerName: 'MAM-HTDD-BASE45(&deg;c@7.2)',
      field: 'MAM-HTDD-BASE45',
    },
    standardColumnDef: {
      headerName: 'MAM-HTDD-BASE45(&deg;f@45)',
      field: 'MAM-HTDD-BASE45',
    },
  },
  {
    id: 'MAM-HTDD-BASE40',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring heating degree days with base 40F',
    selected: false,
    metricUnits: '&deg;c@4.4',
    standardUnits: '&deg;c@4.4',
    metricColumnDef: {
      headerName: 'MAM-HTDD-BASE40(&deg;c@4.4)',
      field: 'MAM-HTDD-BASE40',
    },
    standardColumnDef: {
      headerName: 'MAM-HTDD-BASE40(&deg;f@40)',
      field: 'MAM-HTDD-BASE40',
    },
  },
  {
    id: 'MAM-GRDD-TB5086',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer growing degree days with truncated bases 50F and 8',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MAM-GRDD-TB5086(&deg;c)',
      field: 'MAM-GRDD-TB5086',
    },
    standardColumnDef: {
      headerName: 'MAM-GRDD-TB5086(&deg;f)',
      field: 'MAM-GRDD-TB5086',
    },
  },
  {
    id: 'MAM-GRDD-TB4886',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer growing degree days with truncated bases 48F and 8',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MAM-GRDD-TB4886(&deg;c)',
      field: 'MAM-GRDD-TB4886',
    },
    standardColumnDef: {
      headerName: 'MAM-GRDD-TB4886(&deg;f)',
      field: 'MAM-GRDD-TB4886',
    },
  },
  {
    id: 'MAM-GRDD-BASE72',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring growing degree days with base 72F',
    selected: false,
    metricUnits: '&deg;c@22.2',
    standardUnits: '&deg;c@22.2',
    metricColumnDef: {
      headerName: 'MAM-GRDD-BASE72(&deg;c@22.2)',
      field: 'MAM-GRDD-BASE72',
    },
    standardColumnDef: {
      headerName: 'MAM-GRDD-BASE72(&deg;f@72)',
      field: 'MAM-GRDD-BASE72',
    },
  },
  {
    id: 'MAM-GRDD-BASE70',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring growing degree days with base 70F',
    selected: false,
    metricUnits: '&deg;c@21.1',
    standardUnits: '&deg;c@21.1',
    metricColumnDef: {
      headerName: 'MAM-GRDD-BASE70(&deg;c@21.1)',
      field: 'MAM-GRDD-BASE70',
    },
    standardColumnDef: {
      headerName: 'MAM-GRDD-BASE70(&deg;f@70)',
      field: 'MAM-GRDD-BASE70',
    },
  },
  {
    id: 'MAM-GRDD-BASE65',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring growing degree days with base 65F',
    selected: false,
    metricUnits: '&deg;c@18.3',
    standardUnits: '&deg;c@18.3',
    metricColumnDef: {
      headerName: 'MAM-GRDD-BASE65(&deg;c@18.3)',
      field: 'MAM-GRDD-BASE65',
    },
    standardColumnDef: {
      headerName: 'MAM-GRDD-BASE65(&deg;f@65)',
      field: 'MAM-GRDD-BASE65',
    },
  },
  {
    id: 'MAM-GRDD-BASE60',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring growing degree days with base 60F',
    selected: false,
    metricUnits: '&deg;c@15.6',
    standardUnits: '&deg;c@15.6',
    metricColumnDef: {
      headerName: 'MAM-GRDD-BASE60(&deg;c@15.6)',
      field: 'MAM-GRDD-BASE60',
    },
    standardColumnDef: {
      headerName: 'MAM-GRDD-BASE60(&deg;f@60)',
      field: 'MAM-GRDD-BASE60',
    },
  },
  {
    id: 'MAM-GRDD-BASE57',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring growing degree days with base 57F',
    selected: false,
    metricUnits: '&deg;c@13.9',
    standardUnits: '&deg;c@13.9',
    metricColumnDef: {
      headerName: 'MAM-GRDD-BASE57(&deg;c@13.9)',
      field: 'MAM-GRDD-BASE57',
    },
    standardColumnDef: {
      headerName: 'MAM-GRDD-BASE57(&deg;f@57)',
      field: 'MAM-GRDD-BASE57',
    },
  },
  {
    id: 'MAM-GRDD-BASE55',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring growing degree days with base 55F',
    selected: false,
    metricUnits: '&deg;c@12.8',
    standardUnits: '&deg;c@12.8',
    metricColumnDef: {
      headerName: 'MAM-GRDD-BASE55(&deg;c@12.8)',
      field: 'MAM-GRDD-BASE55',
    },
    standardColumnDef: {
      headerName: 'MAM-GRDD-BASE55(&deg;f@55)',
      field: 'MAM-GRDD-BASE55',
    },
  },
  {
    id: 'MAM-GRDD-BASE50',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring growing degree days with base 50F',
    selected: false,
    metricUnits: '&deg;c@10.0',
    standardUnits: '&deg;c@10.0',
    metricColumnDef: {
      headerName: 'MAM-GRDD-BASE50(&deg;c@10.0)',
      field: 'MAM-GRDD-BASE50',
    },
    standardColumnDef: {
      headerName: 'MAM-GRDD-BASE50(&deg;f@50)',
      field: 'MAM-GRDD-BASE50',
    },
  },
  {
    id: 'MAM-GRDD-BASE45',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring growing degree days with base 45F',
    selected: false,
    metricUnits: '&deg;c@7.2',
    standardUnits: '&deg;c@7.2',
    metricColumnDef: {
      headerName: 'MAM-GRDD-BASE45(&deg;c@7.2)',
      field: 'MAM-GRDD-BASE45',
    },
    standardColumnDef: {
      headerName: 'MAM-GRDD-BASE45(&deg;f@45)',
      field: 'MAM-GRDD-BASE45',
    },
  },
  {
    id: 'MAM-GRDD-BASE40',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring growing degree days with base 40F',
    selected: false,
    metricUnits: '&deg;c@4.4',
    standardUnits: '&deg;c@4.4',
    metricColumnDef: {
      headerName: 'MAM-GRDD-BASE40(&deg;c@4.4)',
      field: 'MAM-GRDD-BASE40',
    },
    standardColumnDef: {
      headerName: 'MAM-GRDD-BASE40(&deg;f@40)',
      field: 'MAM-GRDD-BASE40',
    },
  },
  {
    id: 'MAM-DUTR-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring diurnal temperature range',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MAM-DUTR-NORMAL(&deg;c)',
      field: 'MAM-DUTR-NORMAL',
    },
    standardColumnDef: {
      headerName: 'MAM-DUTR-NORMAL(&deg;f)',
      field: 'MAM-DUTR-NORMAL',
    },
  },
  {
    id: 'MAM-CLDD-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring cooling degree days with base 65F',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'MAM-CLDD-NORMAL(&deg;c)',
      field: 'MAM-CLDD-NORMAL',
    },
    standardColumnDef: {
      headerName: 'MAM-CLDD-NORMAL(&deg;f)',
      field: 'MAM-CLDD-NORMAL',
    },
  },
  {
    id: 'MAM-CLDD-BASE72',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring cooling degree days with base 72F',
    selected: false,
    metricUnits: '&deg;c@22.2',
    standardUnits: '&deg;c@22.2',
    metricColumnDef: {
      headerName: 'MAM-CLDD-BASE72(&deg;c@22.2)',
      field: 'MAM-CLDD-BASE72',
    },
    standardColumnDef: {
      headerName: 'MAM-CLDD-BASE72(&deg;f@72)',
      field: 'MAM-CLDD-BASE72',
    },
  },
  {
    id: 'MAM-CLDD-BASE70',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring cooling degree days with base 70F',
    selected: false,
    metricUnits: '&deg;c@21.1',
    standardUnits: '&deg;c@21.1',
    metricColumnDef: {
      headerName: 'MAM-CLDD-BASE70(&deg;c@21.1)',
      field: 'MAM-CLDD-BASE70',
    },
    standardColumnDef: {
      headerName: 'MAM-CLDD-BASE70(&deg;f@70)',
      field: 'MAM-CLDD-BASE70',
    },
  },
  {
    id: 'MAM-CLDD-BASE60',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring cooling degree days with base 60F',
    selected: false,
    metricUnits: '&deg;c@15.6',
    standardUnits: '&deg;c@15.6',
    metricColumnDef: {
      headerName: 'MAM-CLDD-BASE60(&deg;c@15.6)',
      field: 'MAM-CLDD-BASE60',
    },
    standardColumnDef: {
      headerName: 'MAM-CLDD-BASE60(&deg;f@60)',
      field: 'MAM-CLDD-BASE60',
    },
  },
  {
    id: 'MAM-CLDD-BASE57',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring cooling degree days with base 57F',
    selected: false,
    metricUnits: '&deg;c@13.9',
    standardUnits: '&deg;c@13.9',
    metricColumnDef: {
      headerName: 'MAM-CLDD-BASE57(&deg;c@13.9)',
      field: 'MAM-CLDD-BASE57',
    },
    standardColumnDef: {
      headerName: 'MAM-CLDD-BASE57(&deg;f@57)',
      field: 'MAM-CLDD-BASE57',
    },
  },
  {
    id: 'MAM-CLDD-BASE55',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring cooling degree days with base 55F',
    selected: false,
    metricUnits: '&deg;c@12.8',
    standardUnits: '&deg;c@12.8',
    metricColumnDef: {
      headerName: 'MAM-CLDD-BASE55(&deg;c@12.8)',
      field: 'MAM-CLDD-BASE55',
    },
    standardColumnDef: {
      headerName: 'MAM-CLDD-BASE55(&deg;f@55)',
      field: 'MAM-CLDD-BASE55',
    },
  },
  {
    id: 'MAM-CLDD-BASE50',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring cooling degree days with base 50F',
    selected: false,
    metricUnits: '&deg;c@10.0',
    standardUnits: '&deg;c@10.0',
    metricColumnDef: {
      headerName: 'MAM-CLDD-BASE50(&deg;c@10.0)',
      field: 'MAM-CLDD-BASE50',
    },
    standardColumnDef: {
      headerName: 'MAM-CLDD-BASE50(&deg;f@50)',
      field: 'MAM-CLDD-BASE50',
    },
  },
  {
    id: 'MAM-CLDD-BASE45',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of spring cooling degree days with base 45F',
    selected: false,
    metricUnits: '&deg;c@7.2',
    standardUnits: '&deg;c@7.2',
    metricColumnDef: {
      headerName: 'MAM-CLDD-BASE45(&deg;c@7.2)',
      field: 'MAM-CLDD-BASE45',
    },
    standardColumnDef: {
      headerName: 'MAM-CLDD-BASE45(&deg;f@45)',
      field: 'MAM-CLDD-BASE45',
    },
  },
  {
    id: 'JJA-TMIN-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer minimum temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'JJA-TMIN-NORMAL(&deg;c)',
      field: 'JJA-TMIN-NORMAL',
    },
    standardColumnDef: {
      headerName: 'JJA-TMIN-NORMAL(&deg;f)',
      field: 'JJA-TMIN-NORMAL',
    },
  },
  {
    id: 'JJA-TMIN-AVGNDS-LSTH070',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per summer where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-TMIN-AVGNDS-LSTH070',
      field: 'JJA-TMIN-AVGNDS-LSTH070',
    },
    standardColumnDef: {
      headerName: 'JJA-TMIN-AVGNDS-LSTH070',
      field: 'JJA-TMIN-AVGNDS-LSTH070',
    },
  },
  {
    id: 'JJA-TMIN-AVGNDS-LSTH060',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per summer where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-TMIN-AVGNDS-LSTH060',
      field: 'JJA-TMIN-AVGNDS-LSTH060',
    },
    standardColumnDef: {
      headerName: 'JJA-TMIN-AVGNDS-LSTH060',
      field: 'JJA-TMIN-AVGNDS-LSTH060',
    },
  },
  {
    id: 'JJA-TMIN-AVGNDS-LSTH050',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per summer where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-TMIN-AVGNDS-LSTH050',
      field: 'JJA-TMIN-AVGNDS-LSTH050',
    },
    standardColumnDef: {
      headerName: 'JJA-TMIN-AVGNDS-LSTH050',
      field: 'JJA-TMIN-AVGNDS-LSTH050',
    },
  },
  {
    id: 'JJA-TMIN-AVGNDS-LSTH040',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per summer where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-TMIN-AVGNDS-LSTH040',
      field: 'JJA-TMIN-AVGNDS-LSTH040',
    },
    standardColumnDef: {
      headerName: 'JJA-TMIN-AVGNDS-LSTH040',
      field: 'JJA-TMIN-AVGNDS-LSTH040',
    },
  },
  {
    id: 'JJA-TMIN-AVGNDS-LSTH032',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per summer where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-TMIN-AVGNDS-LSTH032',
      field: 'JJA-TMIN-AVGNDS-LSTH032',
    },
    standardColumnDef: {
      headerName: 'JJA-TMIN-AVGNDS-LSTH032',
      field: 'JJA-TMIN-AVGNDS-LSTH032',
    },
  },
  {
    id: 'JJA-TMIN-AVGNDS-LSTH020',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per summer where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-TMIN-AVGNDS-LSTH020',
      field: 'JJA-TMIN-AVGNDS-LSTH020',
    },
    standardColumnDef: {
      headerName: 'JJA-TMIN-AVGNDS-LSTH020',
      field: 'JJA-TMIN-AVGNDS-LSTH020',
    },
  },
  {
    id: 'JJA-TMIN-AVGNDS-LSTH010',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per summer where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-TMIN-AVGNDS-LSTH010',
      field: 'JJA-TMIN-AVGNDS-LSTH010',
    },
    standardColumnDef: {
      headerName: 'JJA-TMIN-AVGNDS-LSTH010',
      field: 'JJA-TMIN-AVGNDS-LSTH010',
    },
  },
  {
    id: 'JJA-TMIN-AVGNDS-LSTH000',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per summer where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-TMIN-AVGNDS-LSTH000',
      field: 'JJA-TMIN-AVGNDS-LSTH000',
    },
    standardColumnDef: {
      headerName: 'JJA-TMIN-AVGNDS-LSTH000',
      field: 'JJA-TMIN-AVGNDS-LSTH000',
    },
  },
  {
    id: 'JJA-TMAX-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer maximum temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'JJA-TMAX-NORMAL(&deg;c)',
      field: 'JJA-TMAX-NORMAL',
    },
    standardColumnDef: {
      headerName: 'JJA-TMAX-NORMAL(&deg;f)',
      field: 'JJA-TMAX-NORMAL',
    },
  },
  {
    id: 'JJA-TMAX-AVGNDS-LSTH032',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per summer where tmax is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-TMAX-AVGNDS-LSTH032',
      field: 'JJA-TMAX-AVGNDS-LSTH032',
    },
    standardColumnDef: {
      headerName: 'JJA-TMAX-AVGNDS-LSTH032',
      field: 'JJA-TMAX-AVGNDS-LSTH032',
    },
  },
  {
    id: 'JJA-TMAX-AVGNDS-GRTH100',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per summer where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-TMAX-AVGNDS-GRTH100',
      field: 'JJA-TMAX-AVGNDS-GRTH100',
    },
    standardColumnDef: {
      headerName: 'JJA-TMAX-AVGNDS-GRTH100',
      field: 'JJA-TMAX-AVGNDS-GRTH100',
    },
  },
  {
    id: 'JJA-TMAX-AVGNDS-GRTH090',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per summer where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-TMAX-AVGNDS-GRTH090',
      field: 'JJA-TMAX-AVGNDS-GRTH090',
    },
    standardColumnDef: {
      headerName: 'JJA-TMAX-AVGNDS-GRTH090',
      field: 'JJA-TMAX-AVGNDS-GRTH090',
    },
  },
  {
    id: 'JJA-TMAX-AVGNDS-GRTH080',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per summer where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-TMAX-AVGNDS-GRTH080',
      field: 'JJA-TMAX-AVGNDS-GRTH080',
    },
    standardColumnDef: {
      headerName: 'JJA-TMAX-AVGNDS-GRTH080',
      field: 'JJA-TMAX-AVGNDS-GRTH080',
    },
  },
  {
    id: 'JJA-TMAX-AVGNDS-GRTH070',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per summer where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-TMAX-AVGNDS-GRTH070',
      field: 'JJA-TMAX-AVGNDS-GRTH070',
    },
    standardColumnDef: {
      headerName: 'JJA-TMAX-AVGNDS-GRTH070',
      field: 'JJA-TMAX-AVGNDS-GRTH070',
    },
  },
  {
    id: 'JJA-TMAX-AVGNDS-GRTH060',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per summer where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-TMAX-AVGNDS-GRTH060',
      field: 'JJA-TMAX-AVGNDS-GRTH060',
    },
    standardColumnDef: {
      headerName: 'JJA-TMAX-AVGNDS-GRTH060',
      field: 'JJA-TMAX-AVGNDS-GRTH060',
    },
  },
  {
    id: 'JJA-TMAX-AVGNDS-GRTH050',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per summer where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-TMAX-AVGNDS-GRTH050',
      field: 'JJA-TMAX-AVGNDS-GRTH050',
    },
    standardColumnDef: {
      headerName: 'JJA-TMAX-AVGNDS-GRTH050',
      field: 'JJA-TMAX-AVGNDS-GRTH050',
    },
  },
  {
    id: 'JJA-TMAX-AVGNDS-GRTH040',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per summer where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-TMAX-AVGNDS-GRTH040',
      field: 'JJA-TMAX-AVGNDS-GRTH040',
    },
    standardColumnDef: {
      headerName: 'JJA-TMAX-AVGNDS-GRTH040',
      field: 'JJA-TMAX-AVGNDS-GRTH040',
    },
  },
  {
    id: 'JJA-TAVG-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer average temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'JJA-TAVG-NORMAL(&deg;c)',
      field: 'JJA-TAVG-NORMAL',
    },
    standardColumnDef: {
      headerName: 'JJA-TAVG-NORMAL(&deg;f)',
      field: 'JJA-TAVG-NORMAL',
    },
  },
  {
    id: 'JJA-SNWD-AVGNDS-GE010WI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during June-August with snow depth >= 10 i',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-SNWD-AVGNDS-GE010WI',
      field: 'JJA-SNWD-AVGNDS-GE010WI',
    },
    standardColumnDef: {
      headerName: 'JJA-SNWD-AVGNDS-GE010WI',
      field: 'JJA-SNWD-AVGNDS-GE010WI',
    },
  },
  {
    id: 'JJA-SNWD-AVGNDS-GE005WI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during June-August with snow depth >= 5 in',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-SNWD-AVGNDS-GE005WI',
      field: 'JJA-SNWD-AVGNDS-GE005WI',
    },
    standardColumnDef: {
      headerName: 'JJA-SNWD-AVGNDS-GE005WI',
      field: 'JJA-SNWD-AVGNDS-GE005WI',
    },
  },
  {
    id: 'JJA-SNWD-AVGNDS-GE003WI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during June-August with snow depth >= 3 in',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-SNWD-AVGNDS-GE003WI',
      field: 'JJA-SNWD-AVGNDS-GE003WI',
    },
    standardColumnDef: {
      headerName: 'JJA-SNWD-AVGNDS-GE003WI',
      field: 'JJA-SNWD-AVGNDS-GE003WI',
    },
  },
  {
    id: 'JJA-SNWD-AVGNDS-GE001WI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during June-August with snow depth >= 1 in',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-SNWD-AVGNDS-GE001WI',
      field: 'JJA-SNWD-AVGNDS-GE001WI',
    },
    standardColumnDef: {
      headerName: 'JJA-SNWD-AVGNDS-GE001WI',
      field: 'JJA-SNWD-AVGNDS-GE001WI',
    },
  },
  {
    id: 'JJA-SNOW-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of seasonal snowfall totals for June-August',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-SNOW-NORMAL',
      field: 'JJA-SNOW-NORMAL',
    },
    standardColumnDef: {
      headerName: 'JJA-SNOW-NORMAL(in)',
      field: 'JJA-SNOW-NORMAL',
    },
  },
  {
    id: 'JJA-SNOW-AVGNDS-GE100TI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during June-August with snowfall >= 10.0 i',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-SNOW-AVGNDS-GE100TI',
      field: 'JJA-SNOW-AVGNDS-GE100TI',
    },
    standardColumnDef: {
      headerName: 'JJA-SNOW-AVGNDS-GE100TI',
      field: 'JJA-SNOW-AVGNDS-GE100TI',
    },
  },
  {
    id: 'JJA-SNOW-AVGNDS-GE050TI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during June-August with snowfall >= 5.0 in',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-SNOW-AVGNDS-GE050TI',
      field: 'JJA-SNOW-AVGNDS-GE050TI',
    },
    standardColumnDef: {
      headerName: 'JJA-SNOW-AVGNDS-GE050TI',
      field: 'JJA-SNOW-AVGNDS-GE050TI',
    },
  },
  {
    id: 'JJA-SNOW-AVGNDS-GE030TI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during June-August with snowfall >= 3.0 in',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-SNOW-AVGNDS-GE030TI',
      field: 'JJA-SNOW-AVGNDS-GE030TI',
    },
    standardColumnDef: {
      headerName: 'JJA-SNOW-AVGNDS-GE030TI',
      field: 'JJA-SNOW-AVGNDS-GE030TI',
    },
  },
  {
    id: 'JJA-SNOW-AVGNDS-GE010TI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during June-August with snowfall >= 1.0 in',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-SNOW-AVGNDS-GE010TI',
      field: 'JJA-SNOW-AVGNDS-GE010TI',
    },
    standardColumnDef: {
      headerName: 'JJA-SNOW-AVGNDS-GE010TI',
      field: 'JJA-SNOW-AVGNDS-GE010TI',
    },
  },
  {
    id: 'JJA-SNOW-AVGNDS-GE001TI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during June-August with snowfall >= 0.1 in',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-SNOW-AVGNDS-GE001TI',
      field: 'JJA-SNOW-AVGNDS-GE001TI',
    },
    standardColumnDef: {
      headerName: 'JJA-SNOW-AVGNDS-GE001TI',
      field: 'JJA-SNOW-AVGNDS-GE001TI',
    },
  },
  {
    id: 'JJA-PRCP-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of seasonal precipitation totals for June-August',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-PRCP-NORMAL',
      field: 'JJA-PRCP-NORMAL',
    },
    standardColumnDef: {
      headerName: 'JJA-PRCP-NORMAL(in)',
      field: 'JJA-PRCP-NORMAL',
    },
  },
  {
    id: 'JJA-PRCP-AVGNDS-GE100HI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during June-August with precipitation >= 1',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-PRCP-AVGNDS-GE100HI',
      field: 'JJA-PRCP-AVGNDS-GE100HI',
    },
    standardColumnDef: {
      headerName: 'JJA-PRCP-AVGNDS-GE100HI',
      field: 'JJA-PRCP-AVGNDS-GE100HI',
    },
  },
  {
    id: 'JJA-PRCP-AVGNDS-GE050HI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during June-August with precipitation >= 0',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-PRCP-AVGNDS-GE050HI',
      field: 'JJA-PRCP-AVGNDS-GE050HI',
    },
    standardColumnDef: {
      headerName: 'JJA-PRCP-AVGNDS-GE050HI',
      field: 'JJA-PRCP-AVGNDS-GE050HI',
    },
  },
  {
    id: 'JJA-PRCP-AVGNDS-GE010HI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during June-August with precipitation >= 0',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-PRCP-AVGNDS-GE010HI',
      field: 'JJA-PRCP-AVGNDS-GE010HI',
    },
    standardColumnDef: {
      headerName: 'JJA-PRCP-AVGNDS-GE010HI',
      field: 'JJA-PRCP-AVGNDS-GE010HI',
    },
  },
  {
    id: 'JJA-PRCP-AVGNDS-GE001HI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during June-August with precipitation >= 0',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'JJA-PRCP-AVGNDS-GE001HI',
      field: 'JJA-PRCP-AVGNDS-GE001HI',
    },
    standardColumnDef: {
      headerName: 'JJA-PRCP-AVGNDS-GE001HI',
      field: 'JJA-PRCP-AVGNDS-GE001HI',
    },
  },
  {
    id: 'JJA-HTDD-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer heating degree days with base 65F',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'JJA-HTDD-NORMAL(&deg;c)',
      field: 'JJA-HTDD-NORMAL',
    },
    standardColumnDef: {
      headerName: 'JJA-HTDD-NORMAL(&deg;f)',
      field: 'JJA-HTDD-NORMAL',
    },
  },
  {
    id: 'JJA-HTDD-BASE60',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer heating degree days with base 60F',
    selected: false,
    metricUnits: '&deg;c@15.6',
    standardUnits: '&deg;c@15.6',
    metricColumnDef: {
      headerName: 'JJA-HTDD-BASE60(&deg;c@15.6)',
      field: 'JJA-HTDD-BASE60',
    },
    standardColumnDef: {
      headerName: 'JJA-HTDD-BASE60(&deg;f@60)',
      field: 'JJA-HTDD-BASE60',
    },
  },
  {
    id: 'JJA-HTDD-BASE57',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer heating degree days with base 57F',
    selected: false,
    metricUnits: '&deg;c@13.9',
    standardUnits: '&deg;c@13.9',
    metricColumnDef: {
      headerName: 'JJA-HTDD-BASE57(&deg;c@13.9)',
      field: 'JJA-HTDD-BASE57',
    },
    standardColumnDef: {
      headerName: 'JJA-HTDD-BASE57(&deg;f@57)',
      field: 'JJA-HTDD-BASE57',
    },
  },
  {
    id: 'JJA-HTDD-BASE55',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer heating degree days with base 55F',
    selected: false,
    metricUnits: '&deg;c@12.8',
    standardUnits: '&deg;c@12.8',
    metricColumnDef: {
      headerName: 'JJA-HTDD-BASE55(&deg;c@12.8)',
      field: 'JJA-HTDD-BASE55',
    },
    standardColumnDef: {
      headerName: 'JJA-HTDD-BASE55(&deg;f@55)',
      field: 'JJA-HTDD-BASE55',
    },
  },
  {
    id: 'JJA-HTDD-BASE50',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer heating degree days with base 50F',
    selected: false,
    metricUnits: '&deg;c@10.0',
    standardUnits: '&deg;c@10.0',
    metricColumnDef: {
      headerName: 'JJA-HTDD-BASE50(&deg;c@10.0)',
      field: 'JJA-HTDD-BASE50',
    },
    standardColumnDef: {
      headerName: 'JJA-HTDD-BASE50(&deg;f@50)',
      field: 'JJA-HTDD-BASE50',
    },
  },
  {
    id: 'JJA-HTDD-BASE45',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer heating degree days with base 45F',
    selected: false,
    metricUnits: '&deg;c@7.2',
    standardUnits: '&deg;c@7.2',
    metricColumnDef: {
      headerName: 'JJA-HTDD-BASE45(&deg;c@7.2)',
      field: 'JJA-HTDD-BASE45',
    },
    standardColumnDef: {
      headerName: 'JJA-HTDD-BASE45(&deg;f@45)',
      field: 'JJA-HTDD-BASE45',
    },
  },
  {
    id: 'JJA-HTDD-BASE40',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer heating degree days with base 40F',
    selected: false,
    metricUnits: '&deg;c@4.4',
    standardUnits: '&deg;c@4.4',
    metricColumnDef: {
      headerName: 'JJA-HTDD-BASE40(&deg;c@4.4)',
      field: 'JJA-HTDD-BASE40',
    },
    standardColumnDef: {
      headerName: 'JJA-HTDD-BASE40(&deg;f@40)',
      field: 'JJA-HTDD-BASE40',
    },
  },
  {
    id: 'JJA-GRDD-TB5086',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer growing degree days with truncated bases 50F and 8',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'JJA-GRDD-TB5086(&deg;c)',
      field: 'JJA-GRDD-TB5086',
    },
    standardColumnDef: {
      headerName: 'JJA-GRDD-TB5086(&deg;f)',
      field: 'JJA-GRDD-TB5086',
    },
  },
  {
    id: 'JJA-GRDD-TB4886',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer growing degree days with truncated bases 48F and 8',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'JJA-GRDD-TB4886(&deg;c)',
      field: 'JJA-GRDD-TB4886',
    },
    standardColumnDef: {
      headerName: 'JJA-GRDD-TB4886(&deg;f)',
      field: 'JJA-GRDD-TB4886',
    },
  },
  {
    id: 'JJA-GRDD-BASE72',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer growing degree days with base 72F',
    selected: false,
    metricUnits: '&deg;c@22.2',
    standardUnits: '&deg;c@22.2',
    metricColumnDef: {
      headerName: 'JJA-GRDD-BASE72(&deg;c@22.2)',
      field: 'JJA-GRDD-BASE72',
    },
    standardColumnDef: {
      headerName: 'JJA-GRDD-BASE72(&deg;f@72)',
      field: 'JJA-GRDD-BASE72',
    },
  },
  {
    id: 'JJA-GRDD-BASE70',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer growing degree days with base 70F',
    selected: false,
    metricUnits: '&deg;c@21.1',
    standardUnits: '&deg;c@21.1',
    metricColumnDef: {
      headerName: 'JJA-GRDD-BASE70(&deg;c@21.1)',
      field: 'JJA-GRDD-BASE70',
    },
    standardColumnDef: {
      headerName: 'JJA-GRDD-BASE70(&deg;f@70)',
      field: 'JJA-GRDD-BASE70',
    },
  },
  {
    id: 'JJA-GRDD-BASE65',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer growing degree days with base 65F',
    selected: false,
    metricUnits: '&deg;c@18.3',
    standardUnits: '&deg;c@18.3',
    metricColumnDef: {
      headerName: 'JJA-GRDD-BASE65(&deg;c@18.3)',
      field: 'JJA-GRDD-BASE65',
    },
    standardColumnDef: {
      headerName: 'JJA-GRDD-BASE65(&deg;f@65)',
      field: 'JJA-GRDD-BASE65',
    },
  },
  {
    id: 'JJA-GRDD-BASE60',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer growing degree days with base 60F',
    selected: false,
    metricUnits: '&deg;c@15.6',
    standardUnits: '&deg;c@15.6',
    metricColumnDef: {
      headerName: 'JJA-GRDD-BASE60(&deg;c@15.6)',
      field: 'JJA-GRDD-BASE60',
    },
    standardColumnDef: {
      headerName: 'JJA-GRDD-BASE60(&deg;f@60)',
      field: 'JJA-GRDD-BASE60',
    },
  },
  {
    id: 'JJA-GRDD-BASE57',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer growing degree days with base 57F',
    selected: false,
    metricUnits: '&deg;c@13.9',
    standardUnits: '&deg;c@13.9',
    metricColumnDef: {
      headerName: 'JJA-GRDD-BASE57(&deg;c@13.9)',
      field: 'JJA-GRDD-BASE57',
    },
    standardColumnDef: {
      headerName: 'JJA-GRDD-BASE57(&deg;f@57)',
      field: 'JJA-GRDD-BASE57',
    },
  },
  {
    id: 'JJA-GRDD-BASE55',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer growing degree days with base 55F',
    selected: false,
    metricUnits: '&deg;c@12.8',
    standardUnits: '&deg;c@12.8',
    metricColumnDef: {
      headerName: 'JJA-GRDD-BASE55(&deg;c@12.8)',
      field: 'JJA-GRDD-BASE55',
    },
    standardColumnDef: {
      headerName: 'JJA-GRDD-BASE55(&deg;f@55)',
      field: 'JJA-GRDD-BASE55',
    },
  },
  {
    id: 'JJA-GRDD-BASE50',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer growing degree days with base 50F',
    selected: false,
    metricUnits: '&deg;c@10.0',
    standardUnits: '&deg;c@10.0',
    metricColumnDef: {
      headerName: 'JJA-GRDD-BASE50(&deg;c@10.0)',
      field: 'JJA-GRDD-BASE50',
    },
    standardColumnDef: {
      headerName: 'JJA-GRDD-BASE50(&deg;f@50)',
      field: 'JJA-GRDD-BASE50',
    },
  },
  {
    id: 'JJA-GRDD-BASE45',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer growing degree days with base 45F',
    selected: false,
    metricUnits: '&deg;c@7.2',
    standardUnits: '&deg;c@7.2',
    metricColumnDef: {
      headerName: 'JJA-GRDD-BASE45(&deg;c@7.2)',
      field: 'JJA-GRDD-BASE45',
    },
    standardColumnDef: {
      headerName: 'JJA-GRDD-BASE45(&deg;f@45)',
      field: 'JJA-GRDD-BASE45',
    },
  },
  {
    id: 'JJA-GRDD-BASE40',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer growing degree days with base 40F',
    selected: false,
    metricUnits: '&deg;c@4.4',
    standardUnits: '&deg;c@4.4',
    metricColumnDef: {
      headerName: 'JJA-GRDD-BASE40(&deg;c@4.4)',
      field: 'JJA-GRDD-BASE40',
    },
    standardColumnDef: {
      headerName: 'JJA-GRDD-BASE40(&deg;f@40)',
      field: 'JJA-GRDD-BASE40',
    },
  },
  {
    id: 'JJA-DUTR-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer diurnal temperature range',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'JJA-DUTR-NORMAL(&deg;c)',
      field: 'JJA-DUTR-NORMAL',
    },
    standardColumnDef: {
      headerName: 'JJA-DUTR-NORMAL(&deg;f)',
      field: 'JJA-DUTR-NORMAL',
    },
  },
  {
    id: 'JJA-CLDD-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer cooling degree days with base 65F',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'JJA-CLDD-NORMAL(&deg;c)',
      field: 'JJA-CLDD-NORMAL',
    },
    standardColumnDef: {
      headerName: 'JJA-CLDD-NORMAL(&deg;f)',
      field: 'JJA-CLDD-NORMAL',
    },
  },
  {
    id: 'JJA-CLDD-BASE72',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer cooling degree days with base 72F',
    selected: false,
    metricUnits: '&deg;c@22.2',
    standardUnits: '&deg;c@22.2',
    metricColumnDef: {
      headerName: 'JJA-CLDD-BASE72(&deg;c@22.2)',
      field: 'JJA-CLDD-BASE72',
    },
    standardColumnDef: {
      headerName: 'JJA-CLDD-BASE72(&deg;f@72)',
      field: 'JJA-CLDD-BASE72',
    },
  },
  {
    id: 'JJA-CLDD-BASE70',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer cooling degree days with base 70F',
    selected: false,
    metricUnits: '&deg;c@21.1',
    standardUnits: '&deg;c@21.1',
    metricColumnDef: {
      headerName: 'JJA-CLDD-BASE70(&deg;c@21.1)',
      field: 'JJA-CLDD-BASE70',
    },
    standardColumnDef: {
      headerName: 'JJA-CLDD-BASE70(&deg;f@70)',
      field: 'JJA-CLDD-BASE70',
    },
  },
  {
    id: 'JJA-CLDD-BASE60',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer cooling degree days with base 60F',
    selected: false,
    metricUnits: '&deg;c@15.6',
    standardUnits: '&deg;c@15.6',
    metricColumnDef: {
      headerName: 'JJA-CLDD-BASE60(&deg;c@15.6)',
      field: 'JJA-CLDD-BASE60',
    },
    standardColumnDef: {
      headerName: 'JJA-CLDD-BASE60(&deg;f@60)',
      field: 'JJA-CLDD-BASE60',
    },
  },
  {
    id: 'JJA-CLDD-BASE57',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer cooling degree days with base 57F',
    selected: false,
    metricUnits: '&deg;c@13.9',
    standardUnits: '&deg;c@13.9',
    metricColumnDef: {
      headerName: 'JJA-CLDD-BASE57(&deg;c@13.9)',
      field: 'JJA-CLDD-BASE57',
    },
    standardColumnDef: {
      headerName: 'JJA-CLDD-BASE57(&deg;f@57)',
      field: 'JJA-CLDD-BASE57',
    },
  },
  {
    id: 'JJA-CLDD-BASE55',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer cooling degree days with base 55F',
    selected: false,
    metricUnits: '&deg;c@12.8',
    standardUnits: '&deg;c@12.8',
    metricColumnDef: {
      headerName: 'JJA-CLDD-BASE55(&deg;c@12.8)',
      field: 'JJA-CLDD-BASE55',
    },
    standardColumnDef: {
      headerName: 'JJA-CLDD-BASE55(&deg;f@55)',
      field: 'JJA-CLDD-BASE55',
    },
  },
  {
    id: 'JJA-CLDD-BASE50',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer cooling degree days with base 50F',
    selected: false,
    metricUnits: '&deg;c@10.0',
    standardUnits: '&deg;c@10.0',
    metricColumnDef: {
      headerName: 'JJA-CLDD-BASE50(&deg;c@10.0)',
      field: 'JJA-CLDD-BASE50',
    },
    standardColumnDef: {
      headerName: 'JJA-CLDD-BASE50(&deg;f@50)',
      field: 'JJA-CLDD-BASE50',
    },
  },
  {
    id: 'JJA-CLDD-BASE45',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of summer cooling degree days with base 45F',
    selected: false,
    metricUnits: '&deg;c@7.2',
    standardUnits: '&deg;c@7.2',
    metricColumnDef: {
      headerName: 'JJA-CLDD-BASE45(&deg;c@7.2)',
      field: 'JJA-CLDD-BASE45',
    },
    standardColumnDef: {
      headerName: 'JJA-CLDD-BASE45(&deg;f@45)',
      field: 'JJA-CLDD-BASE45',
    },
  },
  {
    id: 'DJF-TMIN-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter minimum temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'DJF-TMIN-NORMAL(&deg;c)',
      field: 'DJF-TMIN-NORMAL',
    },
    standardColumnDef: {
      headerName: 'DJF-TMIN-NORMAL(&deg;f)',
      field: 'DJF-TMIN-NORMAL',
    },
  },
  {
    id: 'DJF-TMIN-AVGNDS-LSTH070',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per winter where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-TMIN-AVGNDS-LSTH070',
      field: 'DJF-TMIN-AVGNDS-LSTH070',
    },
    standardColumnDef: {
      headerName: 'DJF-TMIN-AVGNDS-LSTH070',
      field: 'DJF-TMIN-AVGNDS-LSTH070',
    },
  },
  {
    id: 'DJF-TMIN-AVGNDS-LSTH060',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per winter where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-TMIN-AVGNDS-LSTH060',
      field: 'DJF-TMIN-AVGNDS-LSTH060',
    },
    standardColumnDef: {
      headerName: 'DJF-TMIN-AVGNDS-LSTH060',
      field: 'DJF-TMIN-AVGNDS-LSTH060',
    },
  },
  {
    id: 'DJF-TMIN-AVGNDS-LSTH050',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per winter where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-TMIN-AVGNDS-LSTH050',
      field: 'DJF-TMIN-AVGNDS-LSTH050',
    },
    standardColumnDef: {
      headerName: 'DJF-TMIN-AVGNDS-LSTH050',
      field: 'DJF-TMIN-AVGNDS-LSTH050',
    },
  },
  {
    id: 'DJF-TMIN-AVGNDS-LSTH040',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per winter where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-TMIN-AVGNDS-LSTH040',
      field: 'DJF-TMIN-AVGNDS-LSTH040',
    },
    standardColumnDef: {
      headerName: 'DJF-TMIN-AVGNDS-LSTH040',
      field: 'DJF-TMIN-AVGNDS-LSTH040',
    },
  },
  {
    id: 'DJF-TMIN-AVGNDS-LSTH032',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per winter where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-TMIN-AVGNDS-LSTH032',
      field: 'DJF-TMIN-AVGNDS-LSTH032',
    },
    standardColumnDef: {
      headerName: 'DJF-TMIN-AVGNDS-LSTH032',
      field: 'DJF-TMIN-AVGNDS-LSTH032',
    },
  },
  {
    id: 'DJF-TMIN-AVGNDS-LSTH020',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per winter where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-TMIN-AVGNDS-LSTH020',
      field: 'DJF-TMIN-AVGNDS-LSTH020',
    },
    standardColumnDef: {
      headerName: 'DJF-TMIN-AVGNDS-LSTH020',
      field: 'DJF-TMIN-AVGNDS-LSTH020',
    },
  },
  {
    id: 'DJF-TMIN-AVGNDS-LSTH010',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per winter where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-TMIN-AVGNDS-LSTH010',
      field: 'DJF-TMIN-AVGNDS-LSTH010',
    },
    standardColumnDef: {
      headerName: 'DJF-TMIN-AVGNDS-LSTH010',
      field: 'DJF-TMIN-AVGNDS-LSTH010',
    },
  },
  {
    id: 'DJF-TMIN-AVGNDS-LSTH000',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per winter where tmin is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-TMIN-AVGNDS-LSTH000',
      field: 'DJF-TMIN-AVGNDS-LSTH000',
    },
    standardColumnDef: {
      headerName: 'DJF-TMIN-AVGNDS-LSTH000',
      field: 'DJF-TMIN-AVGNDS-LSTH000',
    },
  },
  {
    id: 'DJF-TMAX-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter maximum temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'DJF-TMAX-NORMAL(&deg;c)',
      field: 'DJF-TMAX-NORMAL',
    },
    standardColumnDef: {
      headerName: 'DJF-TMAX-NORMAL(&deg;f)',
      field: 'DJF-TMAX-NORMAL',
    },
  },
  {
    id: 'DJF-TMAX-AVGNDS-LSTH032',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per winter where tmax is less than or equal to',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-TMAX-AVGNDS-LSTH032',
      field: 'DJF-TMAX-AVGNDS-LSTH032',
    },
    standardColumnDef: {
      headerName: 'DJF-TMAX-AVGNDS-LSTH032',
      field: 'DJF-TMAX-AVGNDS-LSTH032',
    },
  },
  {
    id: 'DJF-TMAX-AVGNDS-GRTH100',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per winter where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-TMAX-AVGNDS-GRTH100',
      field: 'DJF-TMAX-AVGNDS-GRTH100',
    },
    standardColumnDef: {
      headerName: 'DJF-TMAX-AVGNDS-GRTH100',
      field: 'DJF-TMAX-AVGNDS-GRTH100',
    },
  },
  {
    id: 'DJF-TMAX-AVGNDS-GRTH090',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per winter where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-TMAX-AVGNDS-GRTH090',
      field: 'DJF-TMAX-AVGNDS-GRTH090',
    },
    standardColumnDef: {
      headerName: 'DJF-TMAX-AVGNDS-GRTH090',
      field: 'DJF-TMAX-AVGNDS-GRTH090',
    },
  },
  {
    id: 'DJF-TMAX-AVGNDS-GRTH080',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per winter where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-TMAX-AVGNDS-GRTH080',
      field: 'DJF-TMAX-AVGNDS-GRTH080',
    },
    standardColumnDef: {
      headerName: 'DJF-TMAX-AVGNDS-GRTH080',
      field: 'DJF-TMAX-AVGNDS-GRTH080',
    },
  },
  {
    id: 'DJF-TMAX-AVGNDS-GRTH070',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per winter where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-TMAX-AVGNDS-GRTH070',
      field: 'DJF-TMAX-AVGNDS-GRTH070',
    },
    standardColumnDef: {
      headerName: 'DJF-TMAX-AVGNDS-GRTH070',
      field: 'DJF-TMAX-AVGNDS-GRTH070',
    },
  },
  {
    id: 'DJF-TMAX-AVGNDS-GRTH060',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per winter where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-TMAX-AVGNDS-GRTH060',
      field: 'DJF-TMAX-AVGNDS-GRTH060',
    },
    standardColumnDef: {
      headerName: 'DJF-TMAX-AVGNDS-GRTH060',
      field: 'DJF-TMAX-AVGNDS-GRTH060',
    },
  },
  {
    id: 'DJF-TMAX-AVGNDS-GRTH050',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per winter where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-TMAX-AVGNDS-GRTH050',
      field: 'DJF-TMAX-AVGNDS-GRTH050',
    },
    standardColumnDef: {
      headerName: 'DJF-TMAX-AVGNDS-GRTH050',
      field: 'DJF-TMAX-AVGNDS-GRTH050',
    },
  },
  {
    id: 'DJF-TMAX-AVGNDS-GRTH040',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per winter where tmax is greater than or equal',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-TMAX-AVGNDS-GRTH040',
      field: 'DJF-TMAX-AVGNDS-GRTH040',
    },
    standardColumnDef: {
      headerName: 'DJF-TMAX-AVGNDS-GRTH040',
      field: 'DJF-TMAX-AVGNDS-GRTH040',
    },
  },
  {
    id: 'DJF-TAVG-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter average temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'DJF-TAVG-NORMAL(&deg;c)',
      field: 'DJF-TAVG-NORMAL',
    },
    standardColumnDef: {
      headerName: 'DJF-TAVG-NORMAL(&deg;f)',
      field: 'DJF-TAVG-NORMAL',
    },
  },
  {
    id: 'DJF-SNWD-AVGNDS-GE010WI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during December-February with snow depth >',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-SNWD-AVGNDS-GE010WI',
      field: 'DJF-SNWD-AVGNDS-GE010WI',
    },
    standardColumnDef: {
      headerName: 'DJF-SNWD-AVGNDS-GE010WI',
      field: 'DJF-SNWD-AVGNDS-GE010WI',
    },
  },
  {
    id: 'DJF-SNWD-AVGNDS-GE005WI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during December-February with snow depth >',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-SNWD-AVGNDS-GE005WI',
      field: 'DJF-SNWD-AVGNDS-GE005WI',
    },
    standardColumnDef: {
      headerName: 'DJF-SNWD-AVGNDS-GE005WI',
      field: 'DJF-SNWD-AVGNDS-GE005WI',
    },
  },
  {
    id: 'DJF-SNWD-AVGNDS-GE003WI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during December-February with snow depth >',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-SNWD-AVGNDS-GE003WI',
      field: 'DJF-SNWD-AVGNDS-GE003WI',
    },
    standardColumnDef: {
      headerName: 'DJF-SNWD-AVGNDS-GE003WI',
      field: 'DJF-SNWD-AVGNDS-GE003WI',
    },
  },
  {
    id: 'DJF-SNWD-AVGNDS-GE001WI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during December-February with snow depth >',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-SNWD-AVGNDS-GE001WI',
      field: 'DJF-SNWD-AVGNDS-GE001WI',
    },
    standardColumnDef: {
      headerName: 'DJF-SNWD-AVGNDS-GE001WI',
      field: 'DJF-SNWD-AVGNDS-GE001WI',
    },
  },
  {
    id: 'DJF-SNOW-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of seasonal snowfall totals for December-February',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-SNOW-NORMAL',
      field: 'DJF-SNOW-NORMAL',
    },
    standardColumnDef: {
      headerName: 'DJF-SNOW-NORMAL(in)',
      field: 'DJF-SNOW-NORMAL',
    },
  },
  {
    id: 'DJF-SNOW-AVGNDS-GE100TI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during December-February with snowfall >= ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-SNOW-AVGNDS-GE100TI',
      field: 'DJF-SNOW-AVGNDS-GE100TI',
    },
    standardColumnDef: {
      headerName: 'DJF-SNOW-AVGNDS-GE100TI',
      field: 'DJF-SNOW-AVGNDS-GE100TI',
    },
  },
  {
    id: 'DJF-SNOW-AVGNDS-GE050TI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during December-February with snowfall >= ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-SNOW-AVGNDS-GE050TI',
      field: 'DJF-SNOW-AVGNDS-GE050TI',
    },
    standardColumnDef: {
      headerName: 'DJF-SNOW-AVGNDS-GE050TI',
      field: 'DJF-SNOW-AVGNDS-GE050TI',
    },
  },
  {
    id: 'DJF-SNOW-AVGNDS-GE030TI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during December-February with snowfall >= ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-SNOW-AVGNDS-GE030TI',
      field: 'DJF-SNOW-AVGNDS-GE030TI',
    },
    standardColumnDef: {
      headerName: 'DJF-SNOW-AVGNDS-GE030TI',
      field: 'DJF-SNOW-AVGNDS-GE030TI',
    },
  },
  {
    id: 'DJF-SNOW-AVGNDS-GE010TI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during December-February with snowfall >= ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-SNOW-AVGNDS-GE010TI',
      field: 'DJF-SNOW-AVGNDS-GE010TI',
    },
    standardColumnDef: {
      headerName: 'DJF-SNOW-AVGNDS-GE010TI',
      field: 'DJF-SNOW-AVGNDS-GE010TI',
    },
  },
  {
    id: 'DJF-SNOW-AVGNDS-GE001TI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during December-February with snowfall >= ',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-SNOW-AVGNDS-GE001TI',
      field: 'DJF-SNOW-AVGNDS-GE001TI',
    },
    standardColumnDef: {
      headerName: 'DJF-SNOW-AVGNDS-GE001TI',
      field: 'DJF-SNOW-AVGNDS-GE001TI',
    },
  },
  {
    id: 'DJF-PRCP-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of seasonal precipitation totals for December-February',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-PRCP-NORMAL',
      field: 'DJF-PRCP-NORMAL',
    },
    standardColumnDef: {
      headerName: 'DJF-PRCP-NORMAL(in)',
      field: 'DJF-PRCP-NORMAL',
    },
  },
  {
    id: 'DJF-PRCP-AVGNDS-GE100HI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during December-February with precipitatio',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-PRCP-AVGNDS-GE100HI',
      field: 'DJF-PRCP-AVGNDS-GE100HI',
    },
    standardColumnDef: {
      headerName: 'DJF-PRCP-AVGNDS-GE100HI',
      field: 'DJF-PRCP-AVGNDS-GE100HI',
    },
  },
  {
    id: 'DJF-PRCP-AVGNDS-GE050HI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during December-February with precipitatio',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-PRCP-AVGNDS-GE050HI',
      field: 'DJF-PRCP-AVGNDS-GE050HI',
    },
    standardColumnDef: {
      headerName: 'DJF-PRCP-AVGNDS-GE050HI',
      field: 'DJF-PRCP-AVGNDS-GE050HI',
    },
  },
  {
    id: 'DJF-PRCP-AVGNDS-GE010HI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during December-February with precipitatio',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-PRCP-AVGNDS-GE010HI',
      field: 'DJF-PRCP-AVGNDS-GE010HI',
    },
    standardColumnDef: {
      headerName: 'DJF-PRCP-AVGNDS-GE010HI',
      field: 'DJF-PRCP-AVGNDS-GE010HI',
    },
  },
  {
    id: 'DJF-PRCP-AVGNDS-GE001HI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during December-February with precipitatio',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'DJF-PRCP-AVGNDS-GE001HI',
      field: 'DJF-PRCP-AVGNDS-GE001HI',
    },
    standardColumnDef: {
      headerName: 'DJF-PRCP-AVGNDS-GE001HI',
      field: 'DJF-PRCP-AVGNDS-GE001HI',
    },
  },
  {
    id: 'DJF-HTDD-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter heating degree days with base 65F',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'DJF-HTDD-NORMAL(&deg;c)',
      field: 'DJF-HTDD-NORMAL',
    },
    standardColumnDef: {
      headerName: 'DJF-HTDD-NORMAL(&deg;f)',
      field: 'DJF-HTDD-NORMAL',
    },
  },
  {
    id: 'DJF-HTDD-BASE60',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter heating degree days with base 60F',
    selected: false,
    metricUnits: '&deg;c@15.6',
    standardUnits: '&deg;c@15.6',
    metricColumnDef: {
      headerName: 'DJF-HTDD-BASE60(&deg;c@15.6)',
      field: 'DJF-HTDD-BASE60',
    },
    standardColumnDef: {
      headerName: 'DJF-HTDD-BASE60(&deg;f@60)',
      field: 'DJF-HTDD-BASE60',
    },
  },
  {
    id: 'DJF-HTDD-BASE57',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter heating degree days with base 57F',
    selected: false,
    metricUnits: '&deg;c@13.9',
    standardUnits: '&deg;c@13.9',
    metricColumnDef: {
      headerName: 'DJF-HTDD-BASE57(&deg;c@13.9)',
      field: 'DJF-HTDD-BASE57',
    },
    standardColumnDef: {
      headerName: 'DJF-HTDD-BASE57(&deg;f@57)',
      field: 'DJF-HTDD-BASE57',
    },
  },
  {
    id: 'DJF-HTDD-BASE55',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter heating degree days with base 55F',
    selected: false,
    metricUnits: '&deg;c@12.8',
    standardUnits: '&deg;c@12.8',
    metricColumnDef: {
      headerName: 'DJF-HTDD-BASE55(&deg;c@12.8)',
      field: 'DJF-HTDD-BASE55',
    },
    standardColumnDef: {
      headerName: 'DJF-HTDD-BASE55(&deg;f@55)',
      field: 'DJF-HTDD-BASE55',
    },
  },
  {
    id: 'DJF-HTDD-BASE50',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter heating degree days with base 50F',
    selected: false,
    metricUnits: '&deg;c@10.0',
    standardUnits: '&deg;c@10.0',
    metricColumnDef: {
      headerName: 'DJF-HTDD-BASE50(&deg;c@10.0)',
      field: 'DJF-HTDD-BASE50',
    },
    standardColumnDef: {
      headerName: 'DJF-HTDD-BASE50(&deg;f@50)',
      field: 'DJF-HTDD-BASE50',
    },
  },
  {
    id: 'DJF-HTDD-BASE45',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter heating degree days with base 45F',
    selected: false,
    metricUnits: '&deg;c@7.2',
    standardUnits: '&deg;c@7.2',
    metricColumnDef: {
      headerName: 'DJF-HTDD-BASE45(&deg;c@7.2)',
      field: 'DJF-HTDD-BASE45',
    },
    standardColumnDef: {
      headerName: 'DJF-HTDD-BASE45(&deg;f@45)',
      field: 'DJF-HTDD-BASE45',
    },
  },
  {
    id: 'DJF-HTDD-BASE40',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter heating degree days with base 40F',
    selected: false,
    metricUnits: '&deg;c@4.4',
    standardUnits: '&deg;c@4.4',
    metricColumnDef: {
      headerName: 'DJF-HTDD-BASE40(&deg;c@4.4)',
      field: 'DJF-HTDD-BASE40',
    },
    standardColumnDef: {
      headerName: 'DJF-HTDD-BASE40(&deg;f@40)',
      field: 'DJF-HTDD-BASE40',
    },
  },
  {
    id: 'DJF-GRDD-TB5086',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter growing degree days with truncated bases 50F and 8',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'DJF-GRDD-TB5086(&deg;c)',
      field: 'DJF-GRDD-TB5086',
    },
    standardColumnDef: {
      headerName: 'DJF-GRDD-TB5086(&deg;f)',
      field: 'DJF-GRDD-TB5086',
    },
  },
  {
    id: 'DJF-GRDD-TB4886',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter growing degree days with truncated bases 48F and 8',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'DJF-GRDD-TB4886(&deg;c)',
      field: 'DJF-GRDD-TB4886',
    },
    standardColumnDef: {
      headerName: 'DJF-GRDD-TB4886(&deg;f)',
      field: 'DJF-GRDD-TB4886',
    },
  },
  {
    id: 'DJF-GRDD-BASE72',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter growing degree days with base 72F',
    selected: false,
    metricUnits: '&deg;c@22.2',
    standardUnits: '&deg;c@22.2',
    metricColumnDef: {
      headerName: 'DJF-GRDD-BASE72(&deg;c@22.2)',
      field: 'DJF-GRDD-BASE72',
    },
    standardColumnDef: {
      headerName: 'DJF-GRDD-BASE72(&deg;f@72)',
      field: 'DJF-GRDD-BASE72',
    },
  },
  {
    id: 'DJF-GRDD-BASE70',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter growing degree days with base 70F',
    selected: false,
    metricUnits: '&deg;c@21.1',
    standardUnits: '&deg;c@21.1',
    metricColumnDef: {
      headerName: 'DJF-GRDD-BASE70(&deg;c@21.1)',
      field: 'DJF-GRDD-BASE70',
    },
    standardColumnDef: {
      headerName: 'DJF-GRDD-BASE70(&deg;f@70)',
      field: 'DJF-GRDD-BASE70',
    },
  },
  {
    id: 'DJF-GRDD-BASE65',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter growing degree days with base 65F',
    selected: false,
    metricUnits: '&deg;c@18.3',
    standardUnits: '&deg;c@18.3',
    metricColumnDef: {
      headerName: 'DJF-GRDD-BASE65(&deg;c@18.3)',
      field: 'DJF-GRDD-BASE65',
    },
    standardColumnDef: {
      headerName: 'DJF-GRDD-BASE65(&deg;f@65)',
      field: 'DJF-GRDD-BASE65',
    },
  },
  {
    id: 'DJF-GRDD-BASE60',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter growing degree days with base 60F',
    selected: false,
    metricUnits: '&deg;c@15.6',
    standardUnits: '&deg;c@15.6',
    metricColumnDef: {
      headerName: 'DJF-GRDD-BASE60(&deg;c@15.6)',
      field: 'DJF-GRDD-BASE60',
    },
    standardColumnDef: {
      headerName: 'DJF-GRDD-BASE60(&deg;f@60)',
      field: 'DJF-GRDD-BASE60',
    },
  },
  {
    id: 'DJF-GRDD-BASE57',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter growing degree days with base 57F',
    selected: false,
    metricUnits: '&deg;c@13.9',
    standardUnits: '&deg;c@13.9',
    metricColumnDef: {
      headerName: 'DJF-GRDD-BASE57(&deg;c@13.9)',
      field: 'DJF-GRDD-BASE57',
    },
    standardColumnDef: {
      headerName: 'DJF-GRDD-BASE57(&deg;f@57)',
      field: 'DJF-GRDD-BASE57',
    },
  },
  {
    id: 'DJF-GRDD-BASE55',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter growing degree days with base 55F',
    selected: false,
    metricUnits: '&deg;c@12.8',
    standardUnits: '&deg;c@12.8',
    metricColumnDef: {
      headerName: 'DJF-GRDD-BASE55(&deg;c@12.8)',
      field: 'DJF-GRDD-BASE55',
    },
    standardColumnDef: {
      headerName: 'DJF-GRDD-BASE55(&deg;f@55)',
      field: 'DJF-GRDD-BASE55',
    },
  },
  {
    id: 'DJF-GRDD-BASE50',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter growing degree days with base 50F',
    selected: false,
    metricUnits: '&deg;c@10.0',
    standardUnits: '&deg;c@10.0',
    metricColumnDef: {
      headerName: 'DJF-GRDD-BASE50(&deg;c@10.0)',
      field: 'DJF-GRDD-BASE50',
    },
    standardColumnDef: {
      headerName: 'DJF-GRDD-BASE50(&deg;f@50)',
      field: 'DJF-GRDD-BASE50',
    },
  },
  {
    id: 'DJF-GRDD-BASE45',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter growing degree days with base 45F',
    selected: false,
    metricUnits: '&deg;c@7.2',
    standardUnits: '&deg;c@7.2',
    metricColumnDef: {
      headerName: 'DJF-GRDD-BASE45(&deg;c@7.2)',
      field: 'DJF-GRDD-BASE45',
    },
    standardColumnDef: {
      headerName: 'DJF-GRDD-BASE45(&deg;f@45)',
      field: 'DJF-GRDD-BASE45',
    },
  },
  {
    id: 'DJF-GRDD-BASE40',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter growing degree days with base 40F',
    selected: false,
    metricUnits: '&deg;c@4.4',
    standardUnits: '&deg;c@4.4',
    metricColumnDef: {
      headerName: 'DJF-GRDD-BASE40(&deg;c@4.4)',
      field: 'DJF-GRDD-BASE40',
    },
    standardColumnDef: {
      headerName: 'DJF-GRDD-BASE40(&deg;f@40)',
      field: 'DJF-GRDD-BASE40',
    },
  },
  {
    id: 'DJF-DUTR-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter diurnal temperature range',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'DJF-DUTR-NORMAL(&deg;c)',
      field: 'DJF-DUTR-NORMAL',
    },
    standardColumnDef: {
      headerName: 'DJF-DUTR-NORMAL(&deg;f)',
      field: 'DJF-DUTR-NORMAL',
    },
  },
  {
    id: 'DJF-CLDD-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter cooling degree days with base 65F',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'DJF-CLDD-NORMAL(&deg;c)',
      field: 'DJF-CLDD-NORMAL',
    },
    standardColumnDef: {
      headerName: 'DJF-CLDD-NORMAL(&deg;f)',
      field: 'DJF-CLDD-NORMAL',
    },
  },
  {
    id: 'DJF-CLDD-BASE72',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter cooling degree days with base 72F',
    selected: false,
    metricUnits: '&deg;c@22.2',
    standardUnits: '&deg;c@22.2',
    metricColumnDef: {
      headerName: 'DJF-CLDD-BASE72(&deg;c@22.2)',
      field: 'DJF-CLDD-BASE72',
    },
    standardColumnDef: {
      headerName: 'DJF-CLDD-BASE72(&deg;f@72)',
      field: 'DJF-CLDD-BASE72',
    },
  },
  {
    id: 'DJF-CLDD-BASE70',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter cooling degree days with base 70F',
    selected: false,
    metricUnits: '&deg;c@21.1',
    standardUnits: '&deg;c@21.1',
    metricColumnDef: {
      headerName: 'DJF-CLDD-BASE70(&deg;c@21.1)',
      field: 'DJF-CLDD-BASE70',
    },
    standardColumnDef: {
      headerName: 'DJF-CLDD-BASE70(&deg;f@70)',
      field: 'DJF-CLDD-BASE70',
    },
  },
  {
    id: 'DJF-CLDD-BASE60',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter cooling degree days with base 60F',
    selected: false,
    metricUnits: '&deg;c@15.6',
    standardUnits: '&deg;c@15.6',
    metricColumnDef: {
      headerName: 'DJF-CLDD-BASE60(&deg;c@15.6)',
      field: 'DJF-CLDD-BASE60',
    },
    standardColumnDef: {
      headerName: 'DJF-CLDD-BASE60(&deg;f@60)',
      field: 'DJF-CLDD-BASE60',
    },
  },
  {
    id: 'DJF-CLDD-BASE57',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter cooling degree days with base 57F',
    selected: false,
    metricUnits: '&deg;c@13.9',
    standardUnits: '&deg;c@13.9',
    metricColumnDef: {
      headerName: 'DJF-CLDD-BASE57(&deg;c@13.9)',
      field: 'DJF-CLDD-BASE57',
    },
    standardColumnDef: {
      headerName: 'DJF-CLDD-BASE57(&deg;f@57)',
      field: 'DJF-CLDD-BASE57',
    },
  },
  {
    id: 'DJF-CLDD-BASE55',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter cooling degree days with base 55F',
    selected: false,
    metricUnits: '&deg;c@12.8',
    standardUnits: '&deg;c@12.8',
    metricColumnDef: {
      headerName: 'DJF-CLDD-BASE55(&deg;c@12.8)',
      field: 'DJF-CLDD-BASE55',
    },
    standardColumnDef: {
      headerName: 'DJF-CLDD-BASE55(&deg;f@55)',
      field: 'DJF-CLDD-BASE55',
    },
  },
  {
    id: 'DJF-CLDD-BASE50',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter cooling degree days with base 50F',
    selected: false,
    metricUnits: '&deg;c@10.0',
    standardUnits: '&deg;c@10.0',
    metricColumnDef: {
      headerName: 'DJF-CLDD-BASE50(&deg;c@10.0)',
      field: 'DJF-CLDD-BASE50',
    },
    standardColumnDef: {
      headerName: 'DJF-CLDD-BASE50(&deg;f@50)',
      field: 'DJF-CLDD-BASE50',
    },
  },
  {
    id: 'DJF-CLDD-BASE45',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of winter cooling degree days with base 45F',
    selected: false,
    metricUnits: '&deg;c@7.2',
    standardUnits: '&deg;c@7.2',
    metricColumnDef: {
      headerName: 'DJF-CLDD-BASE45(&deg;c@7.2)',
      field: 'DJF-CLDD-BASE45',
    },
    standardColumnDef: {
      headerName: 'DJF-CLDD-BASE45(&deg;f@45)',
      field: 'DJF-CLDD-BASE45',
    },
  },
  {
    id: 'ANN-TMIN-PRBOCC-LSTH036',
    datasetId: 'normals-annualseasonal',
    name: 'probability of 36F or below at least once in the year',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBOCC-LSTH036',
      field: 'ANN-TMIN-PRBOCC-LSTH036',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBOCC-LSTH036',
      field: 'ANN-TMIN-PRBOCC-LSTH036',
    },
  },
  {
    id: 'ANN-TMIN-PRBOCC-LSTH032',
    datasetId: 'normals-annualseasonal',
    name: 'probability of 32F or below at least once in the year',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBOCC-LSTH032',
      field: 'ANN-TMIN-PRBOCC-LSTH032',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBOCC-LSTH032',
      field: 'ANN-TMIN-PRBOCC-LSTH032',
    },
  },
  {
    id: 'ANN-TMIN-PRBOCC-LSTH028',
    datasetId: 'normals-annualseasonal',
    name: 'probability of 28F or below at least once in the year',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBOCC-LSTH028',
      field: 'ANN-TMIN-PRBOCC-LSTH028',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBOCC-LSTH028',
      field: 'ANN-TMIN-PRBOCC-LSTH028',
    },
  },
  {
    id: 'ANN-TMIN-PRBOCC-LSTH024',
    datasetId: 'normals-annualseasonal',
    name: 'probability of 24F or below at least once in the year',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBOCC-LSTH024',
      field: 'ANN-TMIN-PRBOCC-LSTH024',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBOCC-LSTH024',
      field: 'ANN-TMIN-PRBOCC-LSTH024',
    },
  },
  {
    id: 'ANN-TMIN-PRBOCC-LSTH020',
    datasetId: 'normals-annualseasonal',
    name: 'probability of 20F or below at least once in the year',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBOCC-LSTH020',
      field: 'ANN-TMIN-PRBOCC-LSTH020',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBOCC-LSTH020',
      field: 'ANN-TMIN-PRBOCC-LSTH020',
    },
  },
  {
    id: 'ANN-TMIN-PRBOCC-LSTH016',
    datasetId: 'normals-annualseasonal',
    name: 'probability of 16F or below at least once in the year',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBOCC-LSTH016',
      field: 'ANN-TMIN-PRBOCC-LSTH016',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBOCC-LSTH016',
      field: 'ANN-TMIN-PRBOCC-LSTH016',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T36FP90',
    datasetId: 'normals-annualseasonal',
    name: '90% probability date of last 36F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T36FP90',
      field: 'ANN-TMIN-PRBLST-T36FP90',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T36FP90',
      field: 'ANN-TMIN-PRBLST-T36FP90',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T36FP80',
    datasetId: 'normals-annualseasonal',
    name: '80% probability date of last 36F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T36FP80',
      field: 'ANN-TMIN-PRBLST-T36FP80',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T36FP80',
      field: 'ANN-TMIN-PRBLST-T36FP80',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T36FP70',
    datasetId: 'normals-annualseasonal',
    name: '70% probability date of last 36F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T36FP70',
      field: 'ANN-TMIN-PRBLST-T36FP70',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T36FP70',
      field: 'ANN-TMIN-PRBLST-T36FP70',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T36FP60',
    datasetId: 'normals-annualseasonal',
    name: '60% probability date of last 36F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T36FP60',
      field: 'ANN-TMIN-PRBLST-T36FP60',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T36FP60',
      field: 'ANN-TMIN-PRBLST-T36FP60',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T36FP50',
    datasetId: 'normals-annualseasonal',
    name: '50% probability date of last 36F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T36FP50',
      field: 'ANN-TMIN-PRBLST-T36FP50',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T36FP50',
      field: 'ANN-TMIN-PRBLST-T36FP50',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T36FP40',
    datasetId: 'normals-annualseasonal',
    name: '40% probability date of last 36F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T36FP40',
      field: 'ANN-TMIN-PRBLST-T36FP40',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T36FP40',
      field: 'ANN-TMIN-PRBLST-T36FP40',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T36FP30',
    datasetId: 'normals-annualseasonal',
    name: '30% probability date of last 36F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T36FP30',
      field: 'ANN-TMIN-PRBLST-T36FP30',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T36FP30',
      field: 'ANN-TMIN-PRBLST-T36FP30',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T36FP20',
    datasetId: 'normals-annualseasonal',
    name: '20% probability date of last 36F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T36FP20',
      field: 'ANN-TMIN-PRBLST-T36FP20',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T36FP20',
      field: 'ANN-TMIN-PRBLST-T36FP20',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T36FP10',
    datasetId: 'normals-annualseasonal',
    name: '10% probability date of last 36F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T36FP10',
      field: 'ANN-TMIN-PRBLST-T36FP10',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T36FP10',
      field: 'ANN-TMIN-PRBLST-T36FP10',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T32FP90',
    datasetId: 'normals-annualseasonal',
    name: '90% probability date of last 32F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T32FP90',
      field: 'ANN-TMIN-PRBLST-T32FP90',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T32FP90',
      field: 'ANN-TMIN-PRBLST-T32FP90',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T32FP80',
    datasetId: 'normals-annualseasonal',
    name: '80% probability date of last 32F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T32FP80',
      field: 'ANN-TMIN-PRBLST-T32FP80',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T32FP80',
      field: 'ANN-TMIN-PRBLST-T32FP80',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T32FP70',
    datasetId: 'normals-annualseasonal',
    name: '70% probability date of last 32F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T32FP70',
      field: 'ANN-TMIN-PRBLST-T32FP70',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T32FP70',
      field: 'ANN-TMIN-PRBLST-T32FP70',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T32FP60',
    datasetId: 'normals-annualseasonal',
    name: '60% probability date of last 32F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T32FP60',
      field: 'ANN-TMIN-PRBLST-T32FP60',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T32FP60',
      field: 'ANN-TMIN-PRBLST-T32FP60',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T32FP50',
    datasetId: 'normals-annualseasonal',
    name: '50% probability date of last 32F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T32FP50',
      field: 'ANN-TMIN-PRBLST-T32FP50',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T32FP50',
      field: 'ANN-TMIN-PRBLST-T32FP50',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T32FP40',
    datasetId: 'normals-annualseasonal',
    name: '40% probability date of last 32F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T32FP40',
      field: 'ANN-TMIN-PRBLST-T32FP40',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T32FP40',
      field: 'ANN-TMIN-PRBLST-T32FP40',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T32FP30',
    datasetId: 'normals-annualseasonal',
    name: '30% probability date of last 32F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T32FP30',
      field: 'ANN-TMIN-PRBLST-T32FP30',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T32FP30',
      field: 'ANN-TMIN-PRBLST-T32FP30',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T32FP20',
    datasetId: 'normals-annualseasonal',
    name: '20% probability date of last 32F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T32FP20',
      field: 'ANN-TMIN-PRBLST-T32FP20',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T32FP20',
      field: 'ANN-TMIN-PRBLST-T32FP20',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T32FP10',
    datasetId: 'normals-annualseasonal',
    name: '10% probability date of last 32F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T32FP10',
      field: 'ANN-TMIN-PRBLST-T32FP10',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T32FP10',
      field: 'ANN-TMIN-PRBLST-T32FP10',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T28FP90',
    datasetId: 'normals-annualseasonal',
    name: '90% probability date of last 28F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T28FP90',
      field: 'ANN-TMIN-PRBLST-T28FP90',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T28FP90',
      field: 'ANN-TMIN-PRBLST-T28FP90',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T28FP80',
    datasetId: 'normals-annualseasonal',
    name: '80% probability date of last 28F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T28FP80',
      field: 'ANN-TMIN-PRBLST-T28FP80',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T28FP80',
      field: 'ANN-TMIN-PRBLST-T28FP80',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T28FP70',
    datasetId: 'normals-annualseasonal',
    name: '70% probability date of last 28F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T28FP70',
      field: 'ANN-TMIN-PRBLST-T28FP70',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T28FP70',
      field: 'ANN-TMIN-PRBLST-T28FP70',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T28FP60',
    datasetId: 'normals-annualseasonal',
    name: '60% probability date of last 28F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T28FP60',
      field: 'ANN-TMIN-PRBLST-T28FP60',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T28FP60',
      field: 'ANN-TMIN-PRBLST-T28FP60',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T28FP50',
    datasetId: 'normals-annualseasonal',
    name: '50% probability date of last 28F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T28FP50',
      field: 'ANN-TMIN-PRBLST-T28FP50',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T28FP50',
      field: 'ANN-TMIN-PRBLST-T28FP50',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T28FP40',
    datasetId: 'normals-annualseasonal',
    name: '40% probability date of last 28F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T28FP40',
      field: 'ANN-TMIN-PRBLST-T28FP40',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T28FP40',
      field: 'ANN-TMIN-PRBLST-T28FP40',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T28FP30',
    datasetId: 'normals-annualseasonal',
    name: '30% probability date of last 28F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T28FP30',
      field: 'ANN-TMIN-PRBLST-T28FP30',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T28FP30',
      field: 'ANN-TMIN-PRBLST-T28FP30',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T28FP20',
    datasetId: 'normals-annualseasonal',
    name: '20% probability date of last 28F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T28FP20',
      field: 'ANN-TMIN-PRBLST-T28FP20',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T28FP20',
      field: 'ANN-TMIN-PRBLST-T28FP20',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T28FP10',
    datasetId: 'normals-annualseasonal',
    name: '10% probability date of last 28F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T28FP10',
      field: 'ANN-TMIN-PRBLST-T28FP10',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T28FP10',
      field: 'ANN-TMIN-PRBLST-T28FP10',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T24FP90',
    datasetId: 'normals-annualseasonal',
    name: '90% probability date of last 24F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T24FP90',
      field: 'ANN-TMIN-PRBLST-T24FP90',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T24FP90',
      field: 'ANN-TMIN-PRBLST-T24FP90',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T24FP80',
    datasetId: 'normals-annualseasonal',
    name: '80% probability date of last 24F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T24FP80',
      field: 'ANN-TMIN-PRBLST-T24FP80',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T24FP80',
      field: 'ANN-TMIN-PRBLST-T24FP80',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T24FP70',
    datasetId: 'normals-annualseasonal',
    name: '70% probability date of last 24F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T24FP70',
      field: 'ANN-TMIN-PRBLST-T24FP70',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T24FP70',
      field: 'ANN-TMIN-PRBLST-T24FP70',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T24FP60',
    datasetId: 'normals-annualseasonal',
    name: '60% probability date of last 24F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T24FP60',
      field: 'ANN-TMIN-PRBLST-T24FP60',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T24FP60',
      field: 'ANN-TMIN-PRBLST-T24FP60',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T24FP50',
    datasetId: 'normals-annualseasonal',
    name: '50% probability date of last 24F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T24FP50',
      field: 'ANN-TMIN-PRBLST-T24FP50',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T24FP50',
      field: 'ANN-TMIN-PRBLST-T24FP50',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T24FP40',
    datasetId: 'normals-annualseasonal',
    name: '40% probability date of last 24F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T24FP40',
      field: 'ANN-TMIN-PRBLST-T24FP40',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T24FP40',
      field: 'ANN-TMIN-PRBLST-T24FP40',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T24FP30',
    datasetId: 'normals-annualseasonal',
    name: '30% probability date of last 24F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T24FP30',
      field: 'ANN-TMIN-PRBLST-T24FP30',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T24FP30',
      field: 'ANN-TMIN-PRBLST-T24FP30',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T24FP20',
    datasetId: 'normals-annualseasonal',
    name: '20% probability date of last 24F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T24FP20',
      field: 'ANN-TMIN-PRBLST-T24FP20',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T24FP20',
      field: 'ANN-TMIN-PRBLST-T24FP20',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T24FP10',
    datasetId: 'normals-annualseasonal',
    name: '10% probability date of last 24F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T24FP10',
      field: 'ANN-TMIN-PRBLST-T24FP10',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T24FP10',
      field: 'ANN-TMIN-PRBLST-T24FP10',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T20FP90',
    datasetId: 'normals-annualseasonal',
    name: '90% probability date of last 20F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T20FP90',
      field: 'ANN-TMIN-PRBLST-T20FP90',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T20FP90',
      field: 'ANN-TMIN-PRBLST-T20FP90',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T20FP80',
    datasetId: 'normals-annualseasonal',
    name: '80% probability date of last 20F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T20FP80',
      field: 'ANN-TMIN-PRBLST-T20FP80',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T20FP80',
      field: 'ANN-TMIN-PRBLST-T20FP80',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T20FP70',
    datasetId: 'normals-annualseasonal',
    name: '70% probability date of last 20F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T20FP70',
      field: 'ANN-TMIN-PRBLST-T20FP70',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T20FP70',
      field: 'ANN-TMIN-PRBLST-T20FP70',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T20FP60',
    datasetId: 'normals-annualseasonal',
    name: '60% probability date of last 20F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T20FP60',
      field: 'ANN-TMIN-PRBLST-T20FP60',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T20FP60',
      field: 'ANN-TMIN-PRBLST-T20FP60',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T20FP50',
    datasetId: 'normals-annualseasonal',
    name: '50% probability date of last 20F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T20FP50',
      field: 'ANN-TMIN-PRBLST-T20FP50',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T20FP50',
      field: 'ANN-TMIN-PRBLST-T20FP50',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T20FP40',
    datasetId: 'normals-annualseasonal',
    name: '40% probability date of last 20F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T20FP40',
      field: 'ANN-TMIN-PRBLST-T20FP40',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T20FP40',
      field: 'ANN-TMIN-PRBLST-T20FP40',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T20FP30',
    datasetId: 'normals-annualseasonal',
    name: '30% probability date of last 20F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T20FP30',
      field: 'ANN-TMIN-PRBLST-T20FP30',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T20FP30',
      field: 'ANN-TMIN-PRBLST-T20FP30',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T20FP20',
    datasetId: 'normals-annualseasonal',
    name: '20% probability date of last 20F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T20FP20',
      field: 'ANN-TMIN-PRBLST-T20FP20',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T20FP20',
      field: 'ANN-TMIN-PRBLST-T20FP20',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T20FP10',
    datasetId: 'normals-annualseasonal',
    name: '10% probability date of last 20F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T20FP10',
      field: 'ANN-TMIN-PRBLST-T20FP10',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T20FP10',
      field: 'ANN-TMIN-PRBLST-T20FP10',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T16FP90',
    datasetId: 'normals-annualseasonal',
    name: '90% probability date of last 16F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T16FP90',
      field: 'ANN-TMIN-PRBLST-T16FP90',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T16FP90',
      field: 'ANN-TMIN-PRBLST-T16FP90',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T16FP80',
    datasetId: 'normals-annualseasonal',
    name: '80% probability date of last 16F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T16FP80',
      field: 'ANN-TMIN-PRBLST-T16FP80',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T16FP80',
      field: 'ANN-TMIN-PRBLST-T16FP80',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T16FP70',
    datasetId: 'normals-annualseasonal',
    name: '70% probability date of last 16F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T16FP70',
      field: 'ANN-TMIN-PRBLST-T16FP70',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T16FP70',
      field: 'ANN-TMIN-PRBLST-T16FP70',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T16FP60',
    datasetId: 'normals-annualseasonal',
    name: '60% probability date of last 16F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T16FP60',
      field: 'ANN-TMIN-PRBLST-T16FP60',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T16FP60',
      field: 'ANN-TMIN-PRBLST-T16FP60',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T16FP50',
    datasetId: 'normals-annualseasonal',
    name: '50% probability date of last 16F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T16FP50',
      field: 'ANN-TMIN-PRBLST-T16FP50',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T16FP50',
      field: 'ANN-TMIN-PRBLST-T16FP50',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T16FP40',
    datasetId: 'normals-annualseasonal',
    name: '40% probability date of last 16F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T16FP40',
      field: 'ANN-TMIN-PRBLST-T16FP40',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T16FP40',
      field: 'ANN-TMIN-PRBLST-T16FP40',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T16FP30',
    datasetId: 'normals-annualseasonal',
    name: '30% probability date of last 16F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T16FP30',
      field: 'ANN-TMIN-PRBLST-T16FP30',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T16FP30',
      field: 'ANN-TMIN-PRBLST-T16FP30',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T16FP20',
    datasetId: 'normals-annualseasonal',
    name: '20% probability date of last 16F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T16FP20',
      field: 'ANN-TMIN-PRBLST-T16FP20',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T16FP20',
      field: 'ANN-TMIN-PRBLST-T16FP20',
    },
  },
  {
    id: 'ANN-TMIN-PRBLST-T16FP10',
    datasetId: 'normals-annualseasonal',
    name: '10% probability date of last 16F occurrence or later',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T16FP10',
      field: 'ANN-TMIN-PRBLST-T16FP10',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBLST-T16FP10',
      field: 'ANN-TMIN-PRBLST-T16FP10',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T36FP90',
    datasetId: 'normals-annualseasonal',
    name: '90% probability of 36F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T36FP90',
      field: 'ANN-TMIN-PRBGSL-T36FP90',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T36FP90',
      field: 'ANN-TMIN-PRBGSL-T36FP90',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T36FP80',
    datasetId: 'normals-annualseasonal',
    name: '80% probability of 36F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T36FP80',
      field: 'ANN-TMIN-PRBGSL-T36FP80',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T36FP80',
      field: 'ANN-TMIN-PRBGSL-T36FP80',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T36FP70',
    datasetId: 'normals-annualseasonal',
    name: '70% probability of 36F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T36FP70',
      field: 'ANN-TMIN-PRBGSL-T36FP70',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T36FP70',
      field: 'ANN-TMIN-PRBGSL-T36FP70',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T36FP60',
    datasetId: 'normals-annualseasonal',
    name: '60% probability of 36F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T36FP60',
      field: 'ANN-TMIN-PRBGSL-T36FP60',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T36FP60',
      field: 'ANN-TMIN-PRBGSL-T36FP60',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T36FP50',
    datasetId: 'normals-annualseasonal',
    name: '50% probability of 36F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T36FP50',
      field: 'ANN-TMIN-PRBGSL-T36FP50',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T36FP50',
      field: 'ANN-TMIN-PRBGSL-T36FP50',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T36FP40',
    datasetId: 'normals-annualseasonal',
    name: '40% probability of 36F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T36FP40',
      field: 'ANN-TMIN-PRBGSL-T36FP40',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T36FP40',
      field: 'ANN-TMIN-PRBGSL-T36FP40',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T36FP30',
    datasetId: 'normals-annualseasonal',
    name: '30% probability of 36F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T36FP30',
      field: 'ANN-TMIN-PRBGSL-T36FP30',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T36FP30',
      field: 'ANN-TMIN-PRBGSL-T36FP30',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T36FP20',
    datasetId: 'normals-annualseasonal',
    name: '20% probability of 36F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T36FP20',
      field: 'ANN-TMIN-PRBGSL-T36FP20',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T36FP20',
      field: 'ANN-TMIN-PRBGSL-T36FP20',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T36FP10',
    datasetId: 'normals-annualseasonal',
    name: '10% probability of 36F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T36FP10',
      field: 'ANN-TMIN-PRBGSL-T36FP10',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T36FP10',
      field: 'ANN-TMIN-PRBGSL-T36FP10',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T32FP90',
    datasetId: 'normals-annualseasonal',
    name: '90% probability of 32F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T32FP90',
      field: 'ANN-TMIN-PRBGSL-T32FP90',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T32FP90',
      field: 'ANN-TMIN-PRBGSL-T32FP90',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T32FP80',
    datasetId: 'normals-annualseasonal',
    name: '80% probability of 32F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T32FP80',
      field: 'ANN-TMIN-PRBGSL-T32FP80',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T32FP80',
      field: 'ANN-TMIN-PRBGSL-T32FP80',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T32FP70',
    datasetId: 'normals-annualseasonal',
    name: '70% probability of 32F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T32FP70',
      field: 'ANN-TMIN-PRBGSL-T32FP70',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T32FP70',
      field: 'ANN-TMIN-PRBGSL-T32FP70',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T32FP60',
    datasetId: 'normals-annualseasonal',
    name: '60% probability of 32F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T32FP60',
      field: 'ANN-TMIN-PRBGSL-T32FP60',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T32FP60',
      field: 'ANN-TMIN-PRBGSL-T32FP60',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T32FP50',
    datasetId: 'normals-annualseasonal',
    name: '50% probability of 32F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T32FP50',
      field: 'ANN-TMIN-PRBGSL-T32FP50',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T32FP50',
      field: 'ANN-TMIN-PRBGSL-T32FP50',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T32FP40',
    datasetId: 'normals-annualseasonal',
    name: '40% probability of 32F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T32FP40',
      field: 'ANN-TMIN-PRBGSL-T32FP40',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T32FP40',
      field: 'ANN-TMIN-PRBGSL-T32FP40',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T32FP30',
    datasetId: 'normals-annualseasonal',
    name: '30% probability of 32F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T32FP30',
      field: 'ANN-TMIN-PRBGSL-T32FP30',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T32FP30',
      field: 'ANN-TMIN-PRBGSL-T32FP30',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T32FP20',
    datasetId: 'normals-annualseasonal',
    name: '20% probability of 32F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T32FP20',
      field: 'ANN-TMIN-PRBGSL-T32FP20',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T32FP20',
      field: 'ANN-TMIN-PRBGSL-T32FP20',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T32FP10',
    datasetId: 'normals-annualseasonal',
    name: '10% probability of 32F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T32FP10',
      field: 'ANN-TMIN-PRBGSL-T32FP10',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T32FP10',
      field: 'ANN-TMIN-PRBGSL-T32FP10',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T28FP90',
    datasetId: 'normals-annualseasonal',
    name: '90% probability of 28F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T28FP90',
      field: 'ANN-TMIN-PRBGSL-T28FP90',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T28FP90',
      field: 'ANN-TMIN-PRBGSL-T28FP90',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T28FP80',
    datasetId: 'normals-annualseasonal',
    name: '80% probability of 28F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T28FP80',
      field: 'ANN-TMIN-PRBGSL-T28FP80',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T28FP80',
      field: 'ANN-TMIN-PRBGSL-T28FP80',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T28FP70',
    datasetId: 'normals-annualseasonal',
    name: '70% probability of 28F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T28FP70',
      field: 'ANN-TMIN-PRBGSL-T28FP70',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T28FP70',
      field: 'ANN-TMIN-PRBGSL-T28FP70',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T28FP60',
    datasetId: 'normals-annualseasonal',
    name: '60% probability of 28F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T28FP60',
      field: 'ANN-TMIN-PRBGSL-T28FP60',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T28FP60',
      field: 'ANN-TMIN-PRBGSL-T28FP60',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T28FP50',
    datasetId: 'normals-annualseasonal',
    name: '50% probability of 28F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T28FP50',
      field: 'ANN-TMIN-PRBGSL-T28FP50',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T28FP50',
      field: 'ANN-TMIN-PRBGSL-T28FP50',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T28FP40',
    datasetId: 'normals-annualseasonal',
    name: '40% probability of 28F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T28FP40',
      field: 'ANN-TMIN-PRBGSL-T28FP40',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T28FP40',
      field: 'ANN-TMIN-PRBGSL-T28FP40',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T28FP30',
    datasetId: 'normals-annualseasonal',
    name: '30% probability of 28F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T28FP30',
      field: 'ANN-TMIN-PRBGSL-T28FP30',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T28FP30',
      field: 'ANN-TMIN-PRBGSL-T28FP30',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T28FP20',
    datasetId: 'normals-annualseasonal',
    name: '20% probability of 28F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T28FP20',
      field: 'ANN-TMIN-PRBGSL-T28FP20',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T28FP20',
      field: 'ANN-TMIN-PRBGSL-T28FP20',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T28FP10',
    datasetId: 'normals-annualseasonal',
    name: '10% probability of 28F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T28FP10',
      field: 'ANN-TMIN-PRBGSL-T28FP10',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T28FP10',
      field: 'ANN-TMIN-PRBGSL-T28FP10',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T24FP90',
    datasetId: 'normals-annualseasonal',
    name: '90% probability of 24F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T24FP90',
      field: 'ANN-TMIN-PRBGSL-T24FP90',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T24FP90',
      field: 'ANN-TMIN-PRBGSL-T24FP90',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T24FP80',
    datasetId: 'normals-annualseasonal',
    name: '80% probability of 24F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T24FP80',
      field: 'ANN-TMIN-PRBGSL-T24FP80',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T24FP80',
      field: 'ANN-TMIN-PRBGSL-T24FP80',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T24FP70',
    datasetId: 'normals-annualseasonal',
    name: '70% probability of 24F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T24FP70',
      field: 'ANN-TMIN-PRBGSL-T24FP70',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T24FP70',
      field: 'ANN-TMIN-PRBGSL-T24FP70',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T24FP60',
    datasetId: 'normals-annualseasonal',
    name: '60% probability of 24F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T24FP60',
      field: 'ANN-TMIN-PRBGSL-T24FP60',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T24FP60',
      field: 'ANN-TMIN-PRBGSL-T24FP60',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T24FP50',
    datasetId: 'normals-annualseasonal',
    name: '50% probability of 24F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T24FP50',
      field: 'ANN-TMIN-PRBGSL-T24FP50',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T24FP50',
      field: 'ANN-TMIN-PRBGSL-T24FP50',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T24FP40',
    datasetId: 'normals-annualseasonal',
    name: '40% probability of 24F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T24FP40',
      field: 'ANN-TMIN-PRBGSL-T24FP40',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T24FP40',
      field: 'ANN-TMIN-PRBGSL-T24FP40',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T24FP30',
    datasetId: 'normals-annualseasonal',
    name: '30% probability of 24F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T24FP30',
      field: 'ANN-TMIN-PRBGSL-T24FP30',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T24FP30',
      field: 'ANN-TMIN-PRBGSL-T24FP30',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T24FP20',
    datasetId: 'normals-annualseasonal',
    name: '20% probability of 24F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T24FP20',
      field: 'ANN-TMIN-PRBGSL-T24FP20',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T24FP20',
      field: 'ANN-TMIN-PRBGSL-T24FP20',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T24FP10',
    datasetId: 'normals-annualseasonal',
    name: '10% probability of 24F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T24FP10',
      field: 'ANN-TMIN-PRBGSL-T24FP10',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T24FP10',
      field: 'ANN-TMIN-PRBGSL-T24FP10',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T20FP90',
    datasetId: 'normals-annualseasonal',
    name: '90% probability of 20F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T20FP90',
      field: 'ANN-TMIN-PRBGSL-T20FP90',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T20FP90',
      field: 'ANN-TMIN-PRBGSL-T20FP90',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T20FP80',
    datasetId: 'normals-annualseasonal',
    name: '80% probability of 20F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T20FP80',
      field: 'ANN-TMIN-PRBGSL-T20FP80',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T20FP80',
      field: 'ANN-TMIN-PRBGSL-T20FP80',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T20FP70',
    datasetId: 'normals-annualseasonal',
    name: '70% probability of 20F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T20FP70',
      field: 'ANN-TMIN-PRBGSL-T20FP70',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T20FP70',
      field: 'ANN-TMIN-PRBGSL-T20FP70',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T20FP60',
    datasetId: 'normals-annualseasonal',
    name: '60% probability of 20F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T20FP60',
      field: 'ANN-TMIN-PRBGSL-T20FP60',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T20FP60',
      field: 'ANN-TMIN-PRBGSL-T20FP60',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T20FP50',
    datasetId: 'normals-annualseasonal',
    name: '50% probability of 20F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T20FP50',
      field: 'ANN-TMIN-PRBGSL-T20FP50',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T20FP50',
      field: 'ANN-TMIN-PRBGSL-T20FP50',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T20FP40',
    datasetId: 'normals-annualseasonal',
    name: '40% probability of 20F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T20FP40',
      field: 'ANN-TMIN-PRBGSL-T20FP40',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T20FP40',
      field: 'ANN-TMIN-PRBGSL-T20FP40',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T20FP30',
    datasetId: 'normals-annualseasonal',
    name: '30% probability of 20F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T20FP30',
      field: 'ANN-TMIN-PRBGSL-T20FP30',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T20FP30',
      field: 'ANN-TMIN-PRBGSL-T20FP30',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T20FP20',
    datasetId: 'normals-annualseasonal',
    name: '20% probability of 20F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T20FP20',
      field: 'ANN-TMIN-PRBGSL-T20FP20',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T20FP20',
      field: 'ANN-TMIN-PRBGSL-T20FP20',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T20FP10',
    datasetId: 'normals-annualseasonal',
    name: '10% probability of 20F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T20FP10',
      field: 'ANN-TMIN-PRBGSL-T20FP10',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T20FP10',
      field: 'ANN-TMIN-PRBGSL-T20FP10',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T16FP90',
    datasetId: 'normals-annualseasonal',
    name: '90% probability of 16F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T16FP90',
      field: 'ANN-TMIN-PRBGSL-T16FP90',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T16FP90',
      field: 'ANN-TMIN-PRBGSL-T16FP90',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T16FP80',
    datasetId: 'normals-annualseasonal',
    name: '80% probability of 16F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T16FP80',
      field: 'ANN-TMIN-PRBGSL-T16FP80',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T16FP80',
      field: 'ANN-TMIN-PRBGSL-T16FP80',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T16FP70',
    datasetId: 'normals-annualseasonal',
    name: '70% probability of 16F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T16FP70',
      field: 'ANN-TMIN-PRBGSL-T16FP70',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T16FP70',
      field: 'ANN-TMIN-PRBGSL-T16FP70',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T16FP60',
    datasetId: 'normals-annualseasonal',
    name: '60% probability of 16F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T16FP60',
      field: 'ANN-TMIN-PRBGSL-T16FP60',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T16FP60',
      field: 'ANN-TMIN-PRBGSL-T16FP60',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T16FP50',
    datasetId: 'normals-annualseasonal',
    name: '50% probability of 16F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T16FP50',
      field: 'ANN-TMIN-PRBGSL-T16FP50',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T16FP50',
      field: 'ANN-TMIN-PRBGSL-T16FP50',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T16FP40',
    datasetId: 'normals-annualseasonal',
    name: '40% probability of 16F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T16FP40',
      field: 'ANN-TMIN-PRBGSL-T16FP40',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T16FP40',
      field: 'ANN-TMIN-PRBGSL-T16FP40',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T16FP30',
    datasetId: 'normals-annualseasonal',
    name: '30% probability of 16F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T16FP30',
      field: 'ANN-TMIN-PRBGSL-T16FP30',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T16FP30',
      field: 'ANN-TMIN-PRBGSL-T16FP30',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T16FP20',
    datasetId: 'normals-annualseasonal',
    name: '20% probability of 16F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T16FP20',
      field: 'ANN-TMIN-PRBGSL-T16FP20',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T16FP20',
      field: 'ANN-TMIN-PRBGSL-T16FP20',
    },
  },
  {
    id: 'ANN-TMIN-PRBGSL-T16FP10',
    datasetId: 'normals-annualseasonal',
    name: '10% probability of 16F growing season length or longer',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T16FP10',
      field: 'ANN-TMIN-PRBGSL-T16FP10',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBGSL-T16FP10',
      field: 'ANN-TMIN-PRBGSL-T16FP10',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T36FP90',
    datasetId: 'normals-annualseasonal',
    name: '90% probability date of first 36F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T36FP90',
      field: 'ANN-TMIN-PRBFST-T36FP90',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T36FP90',
      field: 'ANN-TMIN-PRBFST-T36FP90',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T36FP80',
    datasetId: 'normals-annualseasonal',
    name: '80% probability date of first 36F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T36FP80',
      field: 'ANN-TMIN-PRBFST-T36FP80',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T36FP80',
      field: 'ANN-TMIN-PRBFST-T36FP80',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T36FP70',
    datasetId: 'normals-annualseasonal',
    name: '70% probability date of first 36F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T36FP70',
      field: 'ANN-TMIN-PRBFST-T36FP70',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T36FP70',
      field: 'ANN-TMIN-PRBFST-T36FP70',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T36FP60',
    datasetId: 'normals-annualseasonal',
    name: '60% probability date of first 36F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T36FP60',
      field: 'ANN-TMIN-PRBFST-T36FP60',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T36FP60',
      field: 'ANN-TMIN-PRBFST-T36FP60',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T36FP50',
    datasetId: 'normals-annualseasonal',
    name: '50% probability date of first 36F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T36FP50',
      field: 'ANN-TMIN-PRBFST-T36FP50',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T36FP50',
      field: 'ANN-TMIN-PRBFST-T36FP50',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T36FP40',
    datasetId: 'normals-annualseasonal',
    name: '40% probability date of first 36F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T36FP40',
      field: 'ANN-TMIN-PRBFST-T36FP40',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T36FP40',
      field: 'ANN-TMIN-PRBFST-T36FP40',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T36FP30',
    datasetId: 'normals-annualseasonal',
    name: '30% probability date of first 36F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T36FP30',
      field: 'ANN-TMIN-PRBFST-T36FP30',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T36FP30',
      field: 'ANN-TMIN-PRBFST-T36FP30',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T36FP20',
    datasetId: 'normals-annualseasonal',
    name: '20% probability date of first 36F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T36FP20',
      field: 'ANN-TMIN-PRBFST-T36FP20',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T36FP20',
      field: 'ANN-TMIN-PRBFST-T36FP20',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T36FP10',
    datasetId: 'normals-annualseasonal',
    name: '10% probability date of first 36F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T36FP10',
      field: 'ANN-TMIN-PRBFST-T36FP10',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T36FP10',
      field: 'ANN-TMIN-PRBFST-T36FP10',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T32FP90',
    datasetId: 'normals-annualseasonal',
    name: '90% probability date of first 32F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T32FP90',
      field: 'ANN-TMIN-PRBFST-T32FP90',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T32FP90',
      field: 'ANN-TMIN-PRBFST-T32FP90',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T32FP80',
    datasetId: 'normals-annualseasonal',
    name: '80% probability date of first 32F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T32FP80',
      field: 'ANN-TMIN-PRBFST-T32FP80',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T32FP80',
      field: 'ANN-TMIN-PRBFST-T32FP80',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T32FP70',
    datasetId: 'normals-annualseasonal',
    name: '70% probability date of first 32F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T32FP70',
      field: 'ANN-TMIN-PRBFST-T32FP70',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T32FP70',
      field: 'ANN-TMIN-PRBFST-T32FP70',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T32FP60',
    datasetId: 'normals-annualseasonal',
    name: '60% probability date of first 32F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T32FP60',
      field: 'ANN-TMIN-PRBFST-T32FP60',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T32FP60',
      field: 'ANN-TMIN-PRBFST-T32FP60',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T32FP50',
    datasetId: 'normals-annualseasonal',
    name: '50% probability date of first 32F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T32FP50',
      field: 'ANN-TMIN-PRBFST-T32FP50',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T32FP50',
      field: 'ANN-TMIN-PRBFST-T32FP50',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T32FP40',
    datasetId: 'normals-annualseasonal',
    name: '40% probability date of first 32F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T32FP40',
      field: 'ANN-TMIN-PRBFST-T32FP40',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T32FP40',
      field: 'ANN-TMIN-PRBFST-T32FP40',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T32FP30',
    datasetId: 'normals-annualseasonal',
    name: '30% probability date of first 32F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T32FP30',
      field: 'ANN-TMIN-PRBFST-T32FP30',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T32FP30',
      field: 'ANN-TMIN-PRBFST-T32FP30',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T32FP20',
    datasetId: 'normals-annualseasonal',
    name: '20% probability date of first 32F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T32FP20',
      field: 'ANN-TMIN-PRBFST-T32FP20',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T32FP20',
      field: 'ANN-TMIN-PRBFST-T32FP20',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T32FP10',
    datasetId: 'normals-annualseasonal',
    name: '10% probability date of first 32F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T32FP10',
      field: 'ANN-TMIN-PRBFST-T32FP10',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T32FP10',
      field: 'ANN-TMIN-PRBFST-T32FP10',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T28FP90',
    datasetId: 'normals-annualseasonal',
    name: '90% probability date of first 28F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T28FP90',
      field: 'ANN-TMIN-PRBFST-T28FP90',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T28FP90',
      field: 'ANN-TMIN-PRBFST-T28FP90',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T28FP80',
    datasetId: 'normals-annualseasonal',
    name: '80% probability date of first 28F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T28FP80',
      field: 'ANN-TMIN-PRBFST-T28FP80',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T28FP80',
      field: 'ANN-TMIN-PRBFST-T28FP80',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T28FP70',
    datasetId: 'normals-annualseasonal',
    name: '70% probability date of first 28F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T28FP70',
      field: 'ANN-TMIN-PRBFST-T28FP70',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T28FP70',
      field: 'ANN-TMIN-PRBFST-T28FP70',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T28FP60',
    datasetId: 'normals-annualseasonal',
    name: '60% probability date of first 28F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T28FP60',
      field: 'ANN-TMIN-PRBFST-T28FP60',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T28FP60',
      field: 'ANN-TMIN-PRBFST-T28FP60',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T28FP50',
    datasetId: 'normals-annualseasonal',
    name: '50% probability date of first 28F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T28FP50',
      field: 'ANN-TMIN-PRBFST-T28FP50',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T28FP50',
      field: 'ANN-TMIN-PRBFST-T28FP50',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T28FP40',
    datasetId: 'normals-annualseasonal',
    name: '40% probability date of first 28F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T28FP40',
      field: 'ANN-TMIN-PRBFST-T28FP40',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T28FP40',
      field: 'ANN-TMIN-PRBFST-T28FP40',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T28FP30',
    datasetId: 'normals-annualseasonal',
    name: '30% probability date of first 28F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T28FP30',
      field: 'ANN-TMIN-PRBFST-T28FP30',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T28FP30',
      field: 'ANN-TMIN-PRBFST-T28FP30',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T28FP20',
    datasetId: 'normals-annualseasonal',
    name: '20% probability date of first 28F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T28FP20',
      field: 'ANN-TMIN-PRBFST-T28FP20',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T28FP20',
      field: 'ANN-TMIN-PRBFST-T28FP20',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T28FP10',
    datasetId: 'normals-annualseasonal',
    name: '10% probability date of first 28F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T28FP10',
      field: 'ANN-TMIN-PRBFST-T28FP10',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T28FP10',
      field: 'ANN-TMIN-PRBFST-T28FP10',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T24FP90',
    datasetId: 'normals-annualseasonal',
    name: '90% probability date of first 24F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T24FP90',
      field: 'ANN-TMIN-PRBFST-T24FP90',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T24FP90',
      field: 'ANN-TMIN-PRBFST-T24FP90',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T24FP80',
    datasetId: 'normals-annualseasonal',
    name: '80% probability date of first 24F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T24FP80',
      field: 'ANN-TMIN-PRBFST-T24FP80',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T24FP80',
      field: 'ANN-TMIN-PRBFST-T24FP80',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T24FP70',
    datasetId: 'normals-annualseasonal',
    name: '70% probability date of first 24F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T24FP70',
      field: 'ANN-TMIN-PRBFST-T24FP70',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T24FP70',
      field: 'ANN-TMIN-PRBFST-T24FP70',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T24FP60',
    datasetId: 'normals-annualseasonal',
    name: '60% probability date of first 24F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T24FP60',
      field: 'ANN-TMIN-PRBFST-T24FP60',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T24FP60',
      field: 'ANN-TMIN-PRBFST-T24FP60',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T24FP50',
    datasetId: 'normals-annualseasonal',
    name: '50% probability date of first 24F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T24FP50',
      field: 'ANN-TMIN-PRBFST-T24FP50',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T24FP50',
      field: 'ANN-TMIN-PRBFST-T24FP50',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T24FP40',
    datasetId: 'normals-annualseasonal',
    name: '40% probability date of first 24F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T24FP40',
      field: 'ANN-TMIN-PRBFST-T24FP40',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T24FP40',
      field: 'ANN-TMIN-PRBFST-T24FP40',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T24FP30',
    datasetId: 'normals-annualseasonal',
    name: '30% probability date of first 24F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T24FP30',
      field: 'ANN-TMIN-PRBFST-T24FP30',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T24FP30',
      field: 'ANN-TMIN-PRBFST-T24FP30',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T24FP20',
    datasetId: 'normals-annualseasonal',
    name: '20% probability date of first 24F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T24FP20',
      field: 'ANN-TMIN-PRBFST-T24FP20',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T24FP20',
      field: 'ANN-TMIN-PRBFST-T24FP20',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T24FP10',
    datasetId: 'normals-annualseasonal',
    name: '10% probability date of first 24F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T24FP10',
      field: 'ANN-TMIN-PRBFST-T24FP10',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T24FP10',
      field: 'ANN-TMIN-PRBFST-T24FP10',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T20FP90',
    datasetId: 'normals-annualseasonal',
    name: '90% probability date of first 20F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T20FP90',
      field: 'ANN-TMIN-PRBFST-T20FP90',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T20FP90',
      field: 'ANN-TMIN-PRBFST-T20FP90',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T20FP80',
    datasetId: 'normals-annualseasonal',
    name: '80% probability date of first 20F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T20FP80',
      field: 'ANN-TMIN-PRBFST-T20FP80',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T20FP80',
      field: 'ANN-TMIN-PRBFST-T20FP80',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T20FP70',
    datasetId: 'normals-annualseasonal',
    name: '70% probability date of first 20F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T20FP70',
      field: 'ANN-TMIN-PRBFST-T20FP70',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T20FP70',
      field: 'ANN-TMIN-PRBFST-T20FP70',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T20FP60',
    datasetId: 'normals-annualseasonal',
    name: '60% probability date of first 20F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T20FP60',
      field: 'ANN-TMIN-PRBFST-T20FP60',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T20FP60',
      field: 'ANN-TMIN-PRBFST-T20FP60',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T20FP50',
    datasetId: 'normals-annualseasonal',
    name: '50% probability date of first 20F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T20FP50',
      field: 'ANN-TMIN-PRBFST-T20FP50',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T20FP50',
      field: 'ANN-TMIN-PRBFST-T20FP50',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T20FP40',
    datasetId: 'normals-annualseasonal',
    name: '40% probability date of first 20F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T20FP40',
      field: 'ANN-TMIN-PRBFST-T20FP40',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T20FP40',
      field: 'ANN-TMIN-PRBFST-T20FP40',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T20FP30',
    datasetId: 'normals-annualseasonal',
    name: '30% probability date of first 20F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T20FP30',
      field: 'ANN-TMIN-PRBFST-T20FP30',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T20FP30',
      field: 'ANN-TMIN-PRBFST-T20FP30',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T20FP20',
    datasetId: 'normals-annualseasonal',
    name: '20% probability date of first 20F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T20FP20',
      field: 'ANN-TMIN-PRBFST-T20FP20',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T20FP20',
      field: 'ANN-TMIN-PRBFST-T20FP20',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T20FP10',
    datasetId: 'normals-annualseasonal',
    name: '10% probability date of first 20F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T20FP10',
      field: 'ANN-TMIN-PRBFST-T20FP10',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T20FP10',
      field: 'ANN-TMIN-PRBFST-T20FP10',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T16FP90',
    datasetId: 'normals-annualseasonal',
    name: '90% probability date of first 16F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T16FP90',
      field: 'ANN-TMIN-PRBFST-T16FP90',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T16FP90',
      field: 'ANN-TMIN-PRBFST-T16FP90',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T16FP80',
    datasetId: 'normals-annualseasonal',
    name: '80% probability date of first 16F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T16FP80',
      field: 'ANN-TMIN-PRBFST-T16FP80',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T16FP80',
      field: 'ANN-TMIN-PRBFST-T16FP80',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T16FP70',
    datasetId: 'normals-annualseasonal',
    name: '70% probability date of first 16F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T16FP70',
      field: 'ANN-TMIN-PRBFST-T16FP70',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T16FP70',
      field: 'ANN-TMIN-PRBFST-T16FP70',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T16FP60',
    datasetId: 'normals-annualseasonal',
    name: '60% probability date of first 16F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T16FP60',
      field: 'ANN-TMIN-PRBFST-T16FP60',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T16FP60',
      field: 'ANN-TMIN-PRBFST-T16FP60',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T16FP50',
    datasetId: 'normals-annualseasonal',
    name: '50% probability date of first 16F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T16FP50',
      field: 'ANN-TMIN-PRBFST-T16FP50',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T16FP50',
      field: 'ANN-TMIN-PRBFST-T16FP50',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T16FP40',
    datasetId: 'normals-annualseasonal',
    name: '40% probability date of first 16F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T16FP40',
      field: 'ANN-TMIN-PRBFST-T16FP40',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T16FP40',
      field: 'ANN-TMIN-PRBFST-T16FP40',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T16FP30',
    datasetId: 'normals-annualseasonal',
    name: '30% probability date of first 16F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T16FP30',
      field: 'ANN-TMIN-PRBFST-T16FP30',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T16FP30',
      field: 'ANN-TMIN-PRBFST-T16FP30',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T16FP20',
    datasetId: 'normals-annualseasonal',
    name: '20% probability date of first 16F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T16FP20',
      field: 'ANN-TMIN-PRBFST-T16FP20',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T16FP20',
      field: 'ANN-TMIN-PRBFST-T16FP20',
    },
  },
  {
    id: 'ANN-TMIN-PRBFST-T16FP10',
    datasetId: 'normals-annualseasonal',
    name: '10% probability date of first 16F occurrence or earlier',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T16FP10',
      field: 'ANN-TMIN-PRBFST-T16FP10',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-PRBFST-T16FP10',
      field: 'ANN-TMIN-PRBFST-T16FP10',
    },
  },
  {
    id: 'ANN-TMIN-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual minimum temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'ANN-TMIN-NORMAL(&deg;c)',
      field: 'ANN-TMIN-NORMAL',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-NORMAL(&deg;f)',
      field: 'ANN-TMIN-NORMAL',
    },
  },
  {
    id: 'ANN-TMIN-AVGNDS-LSTH070',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per year where tmin is less than or equal to 7',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-AVGNDS-LSTH070',
      field: 'ANN-TMIN-AVGNDS-LSTH070',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-AVGNDS-LSTH070',
      field: 'ANN-TMIN-AVGNDS-LSTH070',
    },
  },
  {
    id: 'ANN-TMIN-AVGNDS-LSTH060',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per year where tmin is less than or equal to 6',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-AVGNDS-LSTH060',
      field: 'ANN-TMIN-AVGNDS-LSTH060',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-AVGNDS-LSTH060',
      field: 'ANN-TMIN-AVGNDS-LSTH060',
    },
  },
  {
    id: 'ANN-TMIN-AVGNDS-LSTH050',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per year where tmin is less than or equal to 5',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-AVGNDS-LSTH050',
      field: 'ANN-TMIN-AVGNDS-LSTH050',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-AVGNDS-LSTH050',
      field: 'ANN-TMIN-AVGNDS-LSTH050',
    },
  },
  {
    id: 'ANN-TMIN-AVGNDS-LSTH040',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per year where tmin is less than or equal to 4',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-AVGNDS-LSTH040',
      field: 'ANN-TMIN-AVGNDS-LSTH040',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-AVGNDS-LSTH040',
      field: 'ANN-TMIN-AVGNDS-LSTH040',
    },
  },
  {
    id: 'ANN-TMIN-AVGNDS-LSTH032',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per year where tmin is less than or equal to 3',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-AVGNDS-LSTH032',
      field: 'ANN-TMIN-AVGNDS-LSTH032',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-AVGNDS-LSTH032',
      field: 'ANN-TMIN-AVGNDS-LSTH032',
    },
  },
  {
    id: 'ANN-TMIN-AVGNDS-LSTH020',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per year where tmin is less than or equal to 2',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-AVGNDS-LSTH020',
      field: 'ANN-TMIN-AVGNDS-LSTH020',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-AVGNDS-LSTH020',
      field: 'ANN-TMIN-AVGNDS-LSTH020',
    },
  },
  {
    id: 'ANN-TMIN-AVGNDS-LSTH010',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per year where tmin is less than or equal to 1',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-AVGNDS-LSTH010',
      field: 'ANN-TMIN-AVGNDS-LSTH010',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-AVGNDS-LSTH010',
      field: 'ANN-TMIN-AVGNDS-LSTH010',
    },
  },
  {
    id: 'ANN-TMIN-AVGNDS-LSTH000',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per year where tmin is less than or equal to 0F',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMIN-AVGNDS-LSTH000',
      field: 'ANN-TMIN-AVGNDS-LSTH000',
    },
    standardColumnDef: {
      headerName: 'ANN-TMIN-AVGNDS-LSTH000',
      field: 'ANN-TMIN-AVGNDS-LSTH000',
    },
  },
  {
    id: 'ANN-TMAX-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual maximum temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'ANN-TMAX-NORMAL(&deg;c)',
      field: 'ANN-TMAX-NORMAL',
    },
    standardColumnDef: {
      headerName: 'ANN-TMAX-NORMAL(&deg;f)',
      field: 'ANN-TMAX-NORMAL',
    },
  },
  {
    id: 'ANN-TMAX-AVGNDS-LSTH032',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per year where tmax is less than or equal to 3',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMAX-AVGNDS-LSTH032',
      field: 'ANN-TMAX-AVGNDS-LSTH032',
    },
    standardColumnDef: {
      headerName: 'ANN-TMAX-AVGNDS-LSTH032',
      field: 'ANN-TMAX-AVGNDS-LSTH032',
    },
  },
  {
    id: 'ANN-TMAX-AVGNDS-GRTH100',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per year where tmax is greater than or equal t',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMAX-AVGNDS-GRTH100',
      field: 'ANN-TMAX-AVGNDS-GRTH100',
    },
    standardColumnDef: {
      headerName: 'ANN-TMAX-AVGNDS-GRTH100',
      field: 'ANN-TMAX-AVGNDS-GRTH100',
    },
  },
  {
    id: 'ANN-TMAX-AVGNDS-GRTH090',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per year where tmax is greater than or equal t',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMAX-AVGNDS-GRTH090',
      field: 'ANN-TMAX-AVGNDS-GRTH090',
    },
    standardColumnDef: {
      headerName: 'ANN-TMAX-AVGNDS-GRTH090',
      field: 'ANN-TMAX-AVGNDS-GRTH090',
    },
  },
  {
    id: 'ANN-TMAX-AVGNDS-GRTH080',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per year where tmax is greater than or equal t',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMAX-AVGNDS-GRTH080',
      field: 'ANN-TMAX-AVGNDS-GRTH080',
    },
    standardColumnDef: {
      headerName: 'ANN-TMAX-AVGNDS-GRTH080',
      field: 'ANN-TMAX-AVGNDS-GRTH080',
    },
  },
  {
    id: 'ANN-TMAX-AVGNDS-GRTH070',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per year where tmax is greater than or equal t',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMAX-AVGNDS-GRTH070',
      field: 'ANN-TMAX-AVGNDS-GRTH070',
    },
    standardColumnDef: {
      headerName: 'ANN-TMAX-AVGNDS-GRTH070',
      field: 'ANN-TMAX-AVGNDS-GRTH070',
    },
  },
  {
    id: 'ANN-TMAX-AVGNDS-GRTH060',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per year where tmax is greater than or equal t',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMAX-AVGNDS-GRTH060',
      field: 'ANN-TMAX-AVGNDS-GRTH060',
    },
    standardColumnDef: {
      headerName: 'ANN-TMAX-AVGNDS-GRTH060',
      field: 'ANN-TMAX-AVGNDS-GRTH060',
    },
  },
  {
    id: 'ANN-TMAX-AVGNDS-GRTH050',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per year where tmax is greater than or equal t',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMAX-AVGNDS-GRTH050',
      field: 'ANN-TMAX-AVGNDS-GRTH050',
    },
    standardColumnDef: {
      headerName: 'ANN-TMAX-AVGNDS-GRTH050',
      field: 'ANN-TMAX-AVGNDS-GRTH050',
    },
  },
  {
    id: 'ANN-TMAX-AVGNDS-GRTH040',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term average number of days per year where tmax is greater than or equal t',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-TMAX-AVGNDS-GRTH040',
      field: 'ANN-TMAX-AVGNDS-GRTH040',
    },
    standardColumnDef: {
      headerName: 'ANN-TMAX-AVGNDS-GRTH040',
      field: 'ANN-TMAX-AVGNDS-GRTH040',
    },
  },
  {
    id: 'ANN-TAVG-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual average temperature',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'ANN-TAVG-NORMAL(&deg;c)',
      field: 'ANN-TAVG-NORMAL',
    },
    standardColumnDef: {
      headerName: 'ANN-TAVG-NORMAL(&deg;f)',
      field: 'ANN-TAVG-NORMAL',
    },
  },
  {
    id: 'ANN-SNWD-AVGNDS-GE010WI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during the year with snow depth >=10 inches',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-SNWD-AVGNDS-GE010WI',
      field: 'ANN-SNWD-AVGNDS-GE010WI',
    },
    standardColumnDef: {
      headerName: 'ANN-SNWD-AVGNDS-GE010WI',
      field: 'ANN-SNWD-AVGNDS-GE010WI',
    },
  },
  {
    id: 'ANN-SNWD-AVGNDS-GE005WI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during the year with snow depth >=5 inches',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-SNWD-AVGNDS-GE005WI',
      field: 'ANN-SNWD-AVGNDS-GE005WI',
    },
    standardColumnDef: {
      headerName: 'ANN-SNWD-AVGNDS-GE005WI',
      field: 'ANN-SNWD-AVGNDS-GE005WI',
    },
  },
  {
    id: 'ANN-SNWD-AVGNDS-GE003WI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during the year with snow depth >= 3 inches',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-SNWD-AVGNDS-GE003WI',
      field: 'ANN-SNWD-AVGNDS-GE003WI',
    },
    standardColumnDef: {
      headerName: 'ANN-SNWD-AVGNDS-GE003WI',
      field: 'ANN-SNWD-AVGNDS-GE003WI',
    },
  },
  {
    id: 'ANN-SNWD-AVGNDS-GE001WI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during the year with snow depth >= 1 inch',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-SNWD-AVGNDS-GE001WI',
      field: 'ANN-SNWD-AVGNDS-GE001WI',
    },
    standardColumnDef: {
      headerName: 'ANN-SNWD-AVGNDS-GE001WI',
      field: 'ANN-SNWD-AVGNDS-GE001WI',
    },
  },
  {
    id: 'ANN-SNOW-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual snowfall totals',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-SNOW-NORMAL',
      field: 'ANN-SNOW-NORMAL',
    },
    standardColumnDef: {
      headerName: 'ANN-SNOW-NORMAL(in)',
      field: 'ANN-SNOW-NORMAL',
    },
  },
  {
    id: 'ANN-SNOW-AVGNDS-GE100TI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during the year with snowfall >= 10.0 inch',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-SNOW-AVGNDS-GE100TI',
      field: 'ANN-SNOW-AVGNDS-GE100TI',
    },
    standardColumnDef: {
      headerName: 'ANN-SNOW-AVGNDS-GE100TI',
      field: 'ANN-SNOW-AVGNDS-GE100TI',
    },
  },
  {
    id: 'ANN-SNOW-AVGNDS-GE050TI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during the year with snowfall >= 5.0 inches',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-SNOW-AVGNDS-GE050TI',
      field: 'ANN-SNOW-AVGNDS-GE050TI',
    },
    standardColumnDef: {
      headerName: 'ANN-SNOW-AVGNDS-GE050TI',
      field: 'ANN-SNOW-AVGNDS-GE050TI',
    },
  },
  {
    id: 'ANN-SNOW-AVGNDS-GE030TI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during the year with snowfall >= 3.0 inches',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-SNOW-AVGNDS-GE030TI',
      field: 'ANN-SNOW-AVGNDS-GE030TI',
    },
    standardColumnDef: {
      headerName: 'ANN-SNOW-AVGNDS-GE030TI',
      field: 'ANN-SNOW-AVGNDS-GE030TI',
    },
  },
  {
    id: 'ANN-SNOW-AVGNDS-GE010TI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during the year with snowfall >= 1.0 inches',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-SNOW-AVGNDS-GE010TI',
      field: 'ANN-SNOW-AVGNDS-GE010TI',
    },
    standardColumnDef: {
      headerName: 'ANN-SNOW-AVGNDS-GE010TI',
      field: 'ANN-SNOW-AVGNDS-GE010TI',
    },
  },
  {
    id: 'ANN-SNOW-AVGNDS-GE001TI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during the year with snowfall >= 0.1 inches',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-SNOW-AVGNDS-GE001TI',
      field: 'ANN-SNOW-AVGNDS-GE001TI',
    },
    standardColumnDef: {
      headerName: 'ANN-SNOW-AVGNDS-GE001TI',
      field: 'ANN-SNOW-AVGNDS-GE001TI',
    },
  },
  {
    id: 'ANN-PRCP-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual precipitation totals',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-PRCP-NORMAL',
      field: 'ANN-PRCP-NORMAL',
    },
    standardColumnDef: {
      headerName: 'ANN-PRCP-NORMAL(in)',
      field: 'ANN-PRCP-NORMAL',
    },
  },
  {
    id: 'ANN-PRCP-AVGNDS-GE100HI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during the year with precipitation >= 1.00',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-PRCP-AVGNDS-GE100HI',
      field: 'ANN-PRCP-AVGNDS-GE100HI',
    },
    standardColumnDef: {
      headerName: 'ANN-PRCP-AVGNDS-GE100HI',
      field: 'ANN-PRCP-AVGNDS-GE100HI',
    },
  },
  {
    id: 'ANN-PRCP-AVGNDS-GE050HI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during the year with precipitation >= 0.50',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-PRCP-AVGNDS-GE050HI',
      field: 'ANN-PRCP-AVGNDS-GE050HI',
    },
    standardColumnDef: {
      headerName: 'ANN-PRCP-AVGNDS-GE050HI',
      field: 'ANN-PRCP-AVGNDS-GE050HI',
    },
  },
  {
    id: 'ANN-PRCP-AVGNDS-GE010HI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during the year with precipitation >= 0.10',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-PRCP-AVGNDS-GE010HI',
      field: 'ANN-PRCP-AVGNDS-GE010HI',
    },
    standardColumnDef: {
      headerName: 'ANN-PRCP-AVGNDS-GE010HI',
      field: 'ANN-PRCP-AVGNDS-GE010HI',
    },
  },
  {
    id: 'ANN-PRCP-AVGNDS-GE001HI',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of number of days during the year with precipitation >= 0.01',
    selected: false,
    metricUnits: '',
    standardUnits: '',
    metricColumnDef: {
      headerName: 'ANN-PRCP-AVGNDS-GE001HI',
      field: 'ANN-PRCP-AVGNDS-GE001HI',
    },
    standardColumnDef: {
      headerName: 'ANN-PRCP-AVGNDS-GE001HI',
      field: 'ANN-PRCP-AVGNDS-GE001HI',
    },
  },
  {
    id: 'ANN-HTDD-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual heating degree days with base 65F',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'ANN-HTDD-NORMAL(&deg;c)',
      field: 'ANN-HTDD-NORMAL',
    },
    standardColumnDef: {
      headerName: 'ANN-HTDD-NORMAL(&deg;f)',
      field: 'ANN-HTDD-NORMAL',
    },
  },
  {
    id: 'ANN-HTDD-BASE60',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual heating degree days with base 60F',
    selected: false,
    metricUnits: '&deg;c@15.6',
    standardUnits: '&deg;c@15.6',
    metricColumnDef: {
      headerName: 'ANN-HTDD-BASE60(&deg;c@15.6)',
      field: 'ANN-HTDD-BASE60',
    },
    standardColumnDef: {
      headerName: 'ANN-HTDD-BASE60(&deg;f@60)',
      field: 'ANN-HTDD-BASE60',
    },
  },
  {
    id: 'ANN-HTDD-BASE57',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual heating degree days with base 57F',
    selected: false,
    metricUnits: '&deg;c@13.9',
    standardUnits: '&deg;c@13.9',
    metricColumnDef: {
      headerName: 'ANN-HTDD-BASE57(&deg;c@13.9)',
      field: 'ANN-HTDD-BASE57',
    },
    standardColumnDef: {
      headerName: 'ANN-HTDD-BASE57(&deg;f@57)',
      field: 'ANN-HTDD-BASE57',
    },
  },
  {
    id: 'ANN-HTDD-BASE55',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual heating degree days with base 55F',
    selected: false,
    metricUnits: '&deg;c@12.8',
    standardUnits: '&deg;c@12.8',
    metricColumnDef: {
      headerName: 'ANN-HTDD-BASE55(&deg;c@12.8)',
      field: 'ANN-HTDD-BASE55',
    },
    standardColumnDef: {
      headerName: 'ANN-HTDD-BASE55(&deg;f@55)',
      field: 'ANN-HTDD-BASE55',
    },
  },
  {
    id: 'ANN-HTDD-BASE50',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual heating degree days with base 50F',
    selected: false,
    metricUnits: '&deg;c@10.0',
    standardUnits: '&deg;c@10.0',
    metricColumnDef: {
      headerName: 'ANN-HTDD-BASE50(&deg;c@10.0)',
      field: 'ANN-HTDD-BASE50',
    },
    standardColumnDef: {
      headerName: 'ANN-HTDD-BASE50(&deg;f@50)',
      field: 'ANN-HTDD-BASE50',
    },
  },
  {
    id: 'ANN-HTDD-BASE45',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual heating degree days with base 45F',
    selected: false,
    metricUnits: '&deg;c@7.2',
    standardUnits: '&deg;c@7.2',
    metricColumnDef: {
      headerName: 'ANN-HTDD-BASE45(&deg;c@7.2)',
      field: 'ANN-HTDD-BASE45',
    },
    standardColumnDef: {
      headerName: 'ANN-HTDD-BASE45(&deg;f@45)',
      field: 'ANN-HTDD-BASE45',
    },
  },
  {
    id: 'ANN-HTDD-BASE40',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual heating degree days with base 40F',
    selected: false,
    metricUnits: '&deg;c@4.4',
    standardUnits: '&deg;c@4.4',
    metricColumnDef: {
      headerName: 'ANN-HTDD-BASE40(&deg;c@4.4)',
      field: 'ANN-HTDD-BASE40',
    },
    standardColumnDef: {
      headerName: 'ANN-HTDD-BASE40(&deg;f@40)',
      field: 'ANN-HTDD-BASE40',
    },
  },
  {
    id: 'ANN-GRDD-TB5086',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual growing degree days with truncated bases 50F and 8',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'ANN-GRDD-TB5086(&deg;c)',
      field: 'ANN-GRDD-TB5086',
    },
    standardColumnDef: {
      headerName: 'ANN-GRDD-TB5086(&deg;f)',
      field: 'ANN-GRDD-TB5086',
    },
  },
  {
    id: 'ANN-GRDD-TB4886',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual growing degree days with truncated bases 48F and 8',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'ANN-GRDD-TB4886(&deg;c)',
      field: 'ANN-GRDD-TB4886',
    },
    standardColumnDef: {
      headerName: 'ANN-GRDD-TB4886(&deg;f)',
      field: 'ANN-GRDD-TB4886',
    },
  },
  {
    id: 'ANN-GRDD-BASE72',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual growing degree days with base 72F',
    selected: false,
    metricUnits: '&deg;c@22.2',
    standardUnits: '&deg;c@22.2',
    metricColumnDef: {
      headerName: 'ANN-GRDD-BASE72(&deg;c@22.2)',
      field: 'ANN-GRDD-BASE72',
    },
    standardColumnDef: {
      headerName: 'ANN-GRDD-BASE72(&deg;f@72)',
      field: 'ANN-GRDD-BASE72',
    },
  },
  {
    id: 'ANN-GRDD-BASE70',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual growing degree days with base 70F',
    selected: false,
    metricUnits: '&deg;c@21.1',
    standardUnits: '&deg;c@21.1',
    metricColumnDef: {
      headerName: 'ANN-GRDD-BASE70(&deg;c@21.1)',
      field: 'ANN-GRDD-BASE70',
    },
    standardColumnDef: {
      headerName: 'ANN-GRDD-BASE70(&deg;f@70)',
      field: 'ANN-GRDD-BASE70',
    },
  },
  {
    id: 'ANN-GRDD-BASE65',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual growing degree days with base 65F',
    selected: false,
    metricUnits: '&deg;c@18.3',
    standardUnits: '&deg;c@18.3',
    metricColumnDef: {
      headerName: 'ANN-GRDD-BASE65(&deg;c@18.3)',
      field: 'ANN-GRDD-BASE65',
    },
    standardColumnDef: {
      headerName: 'ANN-GRDD-BASE65(&deg;f@65)',
      field: 'ANN-GRDD-BASE65',
    },
  },
  {
    id: 'ANN-GRDD-BASE60',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual growing degree days with base 60F',
    selected: false,
    metricUnits: '&deg;c@15.6',
    standardUnits: '&deg;c@15.6',
    metricColumnDef: {
      headerName: 'ANN-GRDD-BASE60(&deg;c@15.6)',
      field: 'ANN-GRDD-BASE60',
    },
    standardColumnDef: {
      headerName: 'ANN-GRDD-BASE60(&deg;f@60)',
      field: 'ANN-GRDD-BASE60',
    },
  },
  {
    id: 'ANN-GRDD-BASE57',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual growing degree days with base 57F',
    selected: false,
    metricUnits: '&deg;c@13.9',
    standardUnits: '&deg;c@13.9',
    metricColumnDef: {
      headerName: 'ANN-GRDD-BASE57(&deg;c@13.9)',
      field: 'ANN-GRDD-BASE57',
    },
    standardColumnDef: {
      headerName: 'ANN-GRDD-BASE57(&deg;f@57)',
      field: 'ANN-GRDD-BASE57',
    },
  },
  {
    id: 'ANN-GRDD-BASE55',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual growing degree days with base 55F',
    selected: false,
    metricUnits: '&deg;c@12.8',
    standardUnits: '&deg;c@12.8',
    metricColumnDef: {
      headerName: 'ANN-GRDD-BASE55(&deg;c@12.8)',
      field: 'ANN-GRDD-BASE55',
    },
    standardColumnDef: {
      headerName: 'ANN-GRDD-BASE55(&deg;f@55)',
      field: 'ANN-GRDD-BASE55',
    },
  },
  {
    id: 'ANN-GRDD-BASE50',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual growing degree days with base 50F',
    selected: false,
    metricUnits: '&deg;c@10.0',
    standardUnits: '&deg;c@10.0',
    metricColumnDef: {
      headerName: 'ANN-GRDD-BASE50(&deg;c@10.0)',
      field: 'ANN-GRDD-BASE50',
    },
    standardColumnDef: {
      headerName: 'ANN-GRDD-BASE50(&deg;f@50)',
      field: 'ANN-GRDD-BASE50',
    },
  },
  {
    id: 'ANN-GRDD-BASE45',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual growing degree days with base 45F',
    selected: false,
    metricUnits: '&deg;c@7.2',
    standardUnits: '&deg;c@7.2',
    metricColumnDef: {
      headerName: 'ANN-GRDD-BASE45(&deg;c@7.2)',
      field: 'ANN-GRDD-BASE45',
    },
    standardColumnDef: {
      headerName: 'ANN-GRDD-BASE45(&deg;f@45)',
      field: 'ANN-GRDD-BASE45',
    },
  },
  {
    id: 'ANN-GRDD-BASE40',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual growing degree days with base 40F',
    selected: false,
    metricUnits: '&deg;c@4.4',
    standardUnits: '&deg;c@4.4',
    metricColumnDef: {
      headerName: 'ANN-GRDD-BASE40(&deg;c@4.4)',
      field: 'ANN-GRDD-BASE40',
    },
    standardColumnDef: {
      headerName: 'ANN-GRDD-BASE40(&deg;f@40)',
      field: 'ANN-GRDD-BASE40',
    },
  },
  {
    id: 'ANN-DUTR-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual diurnal temperature range',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'ANN-DUTR-NORMAL(&deg;c)',
      field: 'ANN-DUTR-NORMAL',
    },
    standardColumnDef: {
      headerName: 'ANN-DUTR-NORMAL(&deg;f)',
      field: 'ANN-DUTR-NORMAL',
    },
  },
  {
    id: 'ANN-CLDD-NORMAL',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual cooling degree days with base 65F',
    selected: false,
    metricUnits: '&deg;c',
    standardUnits: '&deg;c',
    metricColumnDef: {
      headerName: 'ANN-CLDD-NORMAL(&deg;c)',
      field: 'ANN-CLDD-NORMAL',
    },
    standardColumnDef: {
      headerName: 'ANN-CLDD-NORMAL(&deg;f)',
      field: 'ANN-CLDD-NORMAL',
    },
  },
  {
    id: 'ANN-CLDD-BASE72',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual cooling degree days with base 72F',
    selected: false,
    metricUnits: '&deg;c@22.2',
    standardUnits: '&deg;c@22.2',
    metricColumnDef: {
      headerName: 'ANN-CLDD-BASE72(&deg;c@22.2)',
      field: 'ANN-CLDD-BASE72',
    },
    standardColumnDef: {
      headerName: 'ANN-CLDD-BASE72(&deg;f@72)',
      field: 'ANN-CLDD-BASE72',
    },
  },
  {
    id: 'ANN-CLDD-BASE70',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual cooling degree days with base 70F',
    selected: false,
    metricUnits: '&deg;c@21.1',
    standardUnits: '&deg;c@21.1',
    metricColumnDef: {
      headerName: 'ANN-CLDD-BASE70(&deg;c@21.1)',
      field: 'ANN-CLDD-BASE70',
    },
    standardColumnDef: {
      headerName: 'ANN-CLDD-BASE70(&deg;f@70)',
      field: 'ANN-CLDD-BASE70',
    },
  },
  {
    id: 'ANN-CLDD-BASE60',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual cooling degree days with base 60F',
    selected: false,
    metricUnits: '&deg;c@15.6',
    standardUnits: '&deg;c@15.6',
    metricColumnDef: {
      headerName: 'ANN-CLDD-BASE60(&deg;c@15.6)',
      field: 'ANN-CLDD-BASE60',
    },
    standardColumnDef: {
      headerName: 'ANN-CLDD-BASE60(&deg;f@60)',
      field: 'ANN-CLDD-BASE60',
    },
  },
  {
    id: 'ANN-CLDD-BASE57',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual cooling degree days with base 57F',
    selected: false,
    metricUnits: '&deg;c@13.9',
    standardUnits: '&deg;c@13.9',
    metricColumnDef: {
      headerName: 'ANN-CLDD-BASE57(&deg;c@13.9)',
      field: 'ANN-CLDD-BASE57',
    },
    standardColumnDef: {
      headerName: 'ANN-CLDD-BASE57(&deg;f@57)',
      field: 'ANN-CLDD-BASE57',
    },
  },
  {
    id: 'ANN-CLDD-BASE55',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual cooling degree days with base 55F',
    selected: false,
    metricUnits: '&deg;c@12.8',
    standardUnits: '&deg;c@12.8',
    metricColumnDef: {
      headerName: 'ANN-CLDD-BASE55(&deg;c@12.8)',
      field: 'ANN-CLDD-BASE55',
    },
    standardColumnDef: {
      headerName: 'ANN-CLDD-BASE55(&deg;f@55)',
      field: 'ANN-CLDD-BASE55',
    },
  },
  {
    id: 'ANN-CLDD-BASE50',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual cooling degree days with base 50F',
    selected: false,
    metricUnits: '&deg;c@10.0',
    standardUnits: '&deg;c@10.0',
    metricColumnDef: {
      headerName: 'ANN-CLDD-BASE50(&deg;c@10.0)',
      field: 'ANN-CLDD-BASE50',
    },
    standardColumnDef: {
      headerName: 'ANN-CLDD-BASE50(&deg;f@50)',
      field: 'ANN-CLDD-BASE50',
    },
  },
  {
    id: 'ANN-CLDD-BASE45',
    datasetId: 'normals-annualseasonal',
    name: 'Long-term averages of annual cooling degree days with base 45F',
    selected: false,
    metricUnits: '&deg;c@7.2',
    standardUnits: '&deg;c@7.2',
    metricColumnDef: {
      headerName: 'ANN-CLDD-BASE45(&deg;c@7.2)',
      field: 'ANN-CLDD-BASE45',
    },
    standardColumnDef: {
      headerName: 'ANN-CLDD-BASE45(&deg;f@45)',
      field: 'ANN-CLDD-BASE45',
    },
  },
];
