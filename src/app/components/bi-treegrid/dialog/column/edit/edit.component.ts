import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'edit.component',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditColumnDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditColumnDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {}

  frameworks: string[] = [
    'string',
    'dumber',
    'date',
    'boolean',
    'dropdownList',
  ];
  ddlfonts: string[] = ['7', '8', '9', '10', '12', '14', '16', '20', '24'];
  ddlfontcolors: string[] = [
    'Red',
    'Whilte',
    'Green',
    'Yellow',
    'Blue',
    'Black',
  ];
  ddlcolbgs: string[] = ['Red', 'Whilte', 'Green', 'Yellow', 'Blue', 'Black'];

  editform = this.formBuilder.group({
    headername: [null, Validators.required],
    dataType: [null, Validators.required],
    colwidth: [null],
    fontsize: [null],
    fontcolor: [null],
    colbg: [null],
    txtwrap: [false],
  });

  onConfirmClick(): void {
    console.log(this.editform.value);
    //this.dialogRef.close();
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
}
