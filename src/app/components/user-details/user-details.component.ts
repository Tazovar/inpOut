import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
constructor(private activatedRoute:ActivatedRoute){}


ngOnInit(): void {
  this.activatedRoute.params.subscribe((param:any) => {
    let userName = param.userName
    console.log(userName);
  })

  this.activatedRoute.queryParams.subscribe((param:any) => {
    console.log(param.age);
    console.log(param.email);
    

  })
}


}
