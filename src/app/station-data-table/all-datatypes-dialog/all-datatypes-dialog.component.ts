import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-all-datatypes-dialog',
  templateUrl: './all-datatypes-dialog.component.html',
  styleUrls: ['./all-datatypes-dialog.component.sass']
})
export class AllDatatypesDialogComponent {

  constructor(public dialogRef: MatDialogRef<AllDatatypesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
