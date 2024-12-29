import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
test:boolean = false;

  constructor(private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {}

  onBtnClick(){
    this.test = !this.test
  }
}