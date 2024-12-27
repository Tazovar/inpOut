import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
constructor(private fb:FormBuilder,public formService:FormService){}
jobs!:FormGroup
@Output() formValueEmitter:EventEmitter<any> = new EventEmitter()

ngOnInit(): void {
  this.jobs = this.fb.group({
    jobs:this.fb.array([])
  })

  this.initiateForm()
}

private initiateForm(){
  this.formService.getJobs(this.jobs).push(this.formService.createJob())
  this.formService.getPositions(this.jobs,0).push(this.formService.createPosition())
}


onCreateJobBtnClick(){
  this.formService.getJobs(this.jobs).push(this.formService.createJob());
}

onDeleteJobBtnClick(jobIndex:number){

  let jobsArrayLength = this.formService.getJobs(this.jobs).length

  if(jobsArrayLength > 1){
    this.formService.deleteJob(jobIndex,this.jobs)
  }else{
    alert('სამსახურის წაშლა შესაძლებელია მხოლოდ მაშინ როდესაც მისი რაოდენობა აღემატება ერთს')
  }
}

onAddPositionBtnClick(jobIndex:number){
this.formService.getPositions(this.jobs,jobIndex).push(this.formService.createPosition())
}

onDeletePositionBtnClick(jobIndex:number,positionIndex:number){
  let positionsArrayLength = this.formService.getPositions(this.jobs,jobIndex).length

  if(positionsArrayLength > 1){
    this.formService.deletePosition(positionIndex,this.jobs,jobIndex)
  }else{
    alert('სამსახურის პოზიციის წაშლა შესაძლებელია მხოლოდ მაშინ როდესაც მისი რაოდენობა აღემატება ერთს')

  }
}


onFormSubmit(){
  this.formValueEmitter.emit(this.jobs.value);
}

onClick(job:any){
  console.log(job);
  
}

}

