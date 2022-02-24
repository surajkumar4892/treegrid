import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameColumnDialogComponent {

  constructor(public dialogRef: MatDialogRef<NameColumnDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder){ 
  }

  frameworks:string[]= ['Text', 'Number', 'Date','Boolean','DropdownList'];
  ddlfonts:string[]= ['7','8','9','10','12','14','16','20','24'];
  ddlfontcolors:string[]= ['Red','Whilte','Green','Yellow','Blue','Black'];
  ddlcolbgs:string[]= ['Red','Whilte','Green','Yellow','Blue','Black'];

  nameform= this.formBuilder.group({
    headername: [null, Validators.required],
    dataType:[null],
    colwidth:[null],
    fontsize:[null],
    fontcolor:[null],
    colbg:[null],
    txtwrap:[false],
  });


  onConfirmClick(): void {
    console.log(this.nameform.value)
    //this.dialogRef.close();
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
}
