import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutService } from '../../../../../services/about.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent implements OnInit{
cardInfo:any
  constructor(private activatedRoute:ActivatedRoute,private aboutService:AboutService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param:any) => {
       let id = param.id;
       this.cardInfo = this.getCardByIdId(id)
    })
  }


  getCardByIdId(id:any){
    let findCard = this.aboutService.cardsArray.find((card) => {
      return card.id == id
    })
    return findCard ? findCard : {};
  }
}
