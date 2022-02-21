import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'edit.component',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditColumnDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditColumnDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder) {
  }

  //editform: FormGroup;
  //frameworks: Framework[] = ['Angular', 'Reactjs', 'Vue'];

  frameworks:string[]= ['Angular', 'Reactjs', 'Vue'];


  editform= this.formBuilder.group({
    headername: [null, Validators.required],
    dataType:[null],
    colwidth:[null]
  });


  onConfirmClick(): void {
    console.log(this.editform.value)
    //this.dialogRef.close();
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
}