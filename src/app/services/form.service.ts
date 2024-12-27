import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor(private fb:FormBuilder) { }

  getJobs(JobForm:FormGroup){
    return JobForm.get('jobs') as FormArray
  }

  getPositions(jobForm:FormGroup,jobIndex:number){
    return this.getJobs(jobForm).at(jobIndex).get('positions') as FormArray
  }

  createJob():FormGroup{
return this.fb.group({
  title:['',[Validators.required,Validators.minLength(3)]],
  description:[''],
  startDate:[''],
  endDate:[''],
  positions:this.fb.array([])
})
  }


  deleteJob(jobIndex:number,jobForm:FormGroup){
    this.getJobs(jobForm).removeAt(jobIndex)
  }

  createPosition():FormGroup{
    return this.fb.group({
      positionName:[''],
      positionDescription:[''],
      positionStartDate:[''],
      positionEndDate:[''],
    })
  }

  deletePosition(positionIndex:number,jobForm:FormGroup,jobIndex:number){
    this.getPositions(jobForm,jobIndex).removeAt(positionIndex)
  }
}
