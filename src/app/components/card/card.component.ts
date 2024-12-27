import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
@Input() card:any


ngOnInit(): void {
  console.log(this.card,'cardd');
  
}
}
