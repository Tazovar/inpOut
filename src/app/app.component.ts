import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
usersArray:Array<any> = [];
isBtnClicked:boolean = false
text:string = '';

  ngOnInit(): void {}

  buttonClickEmitterSubscriber(event:any){
    this.text = event;
    this.isBtnClicked = true
  }
}