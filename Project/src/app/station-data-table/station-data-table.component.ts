import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataType, StationObservationDataTypes, ColumnDef } from '../classes';

@Component({
  selector: 'app-station-data-table',
  templateUrl: './station-data-table.component.html',
  styleUrls: ['./station-data-table.component.sass']
})
export class StationDataTableComponent implements OnInit {
  defaultStationDataTypes: DataType[] = StationObservationDataTypes;
  selectedColumns: string[] = StationObservationDataTypes.map(dt => dt.id);
  _columns: ColumnDef[];
  agApi: any;
  _units: string;

  public ghcndCoreDataTypes: DataType[] = [
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
        filter: 'agNumberColumnFilter'
      },
      standardColumnDef: {
        headerName: 'PRCP(in)',
        field: 'PRCP',
        filter: 'agNumberColumnFilter'
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


  @Input()
  availableColumns: any;

  @Input()
  data: any;

  @Input()
  set units(units: string) {
    this._units = units;
    this.selectColumns();
  }

  @Output()
  unitsChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onGridReady(event: any): void {
    event.api.sizeColumnsToFit();
    this.agApi = event.api;
  }

  isColumnSelected(id) {
    return this.selectedColumns.includes(id);
  }

  toggleSelectedStationColumn(dataType: DataType) {
    const selected = { ...dataType, selected: !dataType.selected };
    this.defaultStationDataTypes = this.defaultStationDataTypes.map(dt => dt.id === selected.id ? selected : dt);
    this.selectColumns();
  }

  toggleSelectedDatasetColumn(dataType: DataType) {
    const selected = { ...dataType, selected: !dataType.selected };
    this.ghcndCoreDataTypes = this.ghcndCoreDataTypes.map(dt => dt.id === selected.id ? selected : dt);
    this.selectColumns();
  }

  displaySelectedColumns(): string {
    return [...this.defaultStationDataTypes, ...this.ghcndCoreDataTypes].filter(dt => dt.selected).map(dt => dt.id).join(', ');
  }

  private selectColumns(): void {
    this._columns = [...this.defaultStationDataTypes, ...this.ghcndCoreDataTypes]
      .filter(dt => dt.selected)
      .map(dt => dt[`${this._units}ColumnDef`]);
    console.log(this._columns);
  }

}

