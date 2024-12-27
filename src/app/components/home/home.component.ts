import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
array:any[] = []

constructor(private matDialog:MatDialog) {
  
}

formValueEmitterSub(fomrValue:any){
  let jobs = fomrValue.jobs
  this.array = jobs
}


onClick(){
let myDialog = this.matDialog.open(TestComponent,{
  width:'400px',
  height:'500px',
  data:{
    name:'asfasasf',
  },
  hasBackdrop:true,
  backdropClass:'custom-dialog-backdrop-class',
})
// myDialog.componentInstance.data = {
  
// }
}
}
