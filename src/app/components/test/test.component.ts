import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  data:any

 public name:string = 'hello'
constructor(@Inject(MAT_DIALOG_DATA) public matDialogData:any,private matDialogRef:MatDialogRef<any>){}


onDialogCloseBtnClick(){
this.matDialogRef.close();
}
}
