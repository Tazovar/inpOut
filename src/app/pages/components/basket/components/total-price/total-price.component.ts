import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-price',
  templateUrl: './total-price.component.html',
  styleUrl: './total-price.component.css'
})
export class TotalPriceComponent {
  @Input() totalPrice!:number
}
