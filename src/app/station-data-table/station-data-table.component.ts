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

  @Input()
  coreDataTypes: DataType[];
  
  @Input()
  allDataTypes: DataType[];

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
    this.coreDataTypes = this.coreDataTypes.map(dt => dt.id === selected.id ? selected : dt);
    this.selectColumns();
  }

  displaySelectedColumns(): string {
    return [...this.defaultStationDataTypes, ...this.coreDataTypes].filter(dt => dt.selected).map(dt => dt.id).join(', ');
  }

  private selectColumns(): void {
    this._columns = [...this.defaultStationDataTypes, ...this.coreDataTypes]
      .filter(dt => dt.selected)
      .map(dt => dt[`${this._units}ColumnDef`]);
    console.log(this._columns);
  }

}

