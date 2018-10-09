import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyDataTableComponent } from './daily-data-table/daily-data-table.component';
import { MaterialModule } from './material.module';
import { DatepickerComponent } from './parameter-toolbar/datepicker/datepicker.component';
import { ParameterToolbarComponent } from './parameter-toolbar/parameter-toolbar.component';
import { StationDataTableComponent } from './station-data-table/station-data-table.component';
import { AllDatatypesDialogComponent } from './station-data-table/all-datatypes-dialog/all-datatypes-dialog.component';

@NgModule({
  declarations: [
    AllDatatypesDialogComponent,
    AppComponent,
    DailyDataTableComponent,
    DatepickerComponent,
    ParameterToolbarComponent,
    StationDataTableComponent,
  ],
  imports: [
    AgGridModule.withComponents([]),
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [AllDatatypesDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
