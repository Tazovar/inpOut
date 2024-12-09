import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
cardsArray:Array<any> = [
  {
    id: 1,
    name: "The Shawshank Redemption",
    imageUrl: "https://images.unsplash.com/photo-1576158113928-4c240eaaf360?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    id: 2,
    name: "The Godfather",
    imageUrl: "https://images.unsplash.com/photo-1576158113928-4c240eaaf360?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    id: 3,
    name: "The Dark Knight",
    imageUrl: "https://images.unsplash.com/photo-1576158113928-4c240eaaf360?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    id: 4,
    name: "Pulp Fiction",
    imageUrl: "https://images.unsplash.com/photo-1576158113928-4c240eaaf360?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    id: 5,
    name: "Forrest Gump",
    imageUrl: "https://images.unsplash.com/photo-1576158113928-4c240eaaf360?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    id: 6,
    name: "Inception",
    imageUrl: "https://images.unsplash.com/photo-1576158113928-4c240eaaf360?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    id: 7,
    name: "The Matrix",
    imageUrl: "https://images.unsplash.com/photo-1576158113928-4c240eaaf360?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    id: 8,
    name: "The Avengers",
    imageUrl: "https://images.unsplash.com/photo-1576158113928-4c240eaaf360?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    id: 9,
    name: "Interstellar",
    imageUrl: "https://images.unsplash.com/photo-1576158113928-4c240eaaf360?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    id: 10,
    name: "Gladiator",
    imageUrl: "https://images.unsplash.com/photo-1576158113928-4c240eaaf360?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}
]


getArray():Array<any>{
  return this.cardsArray
}
  constructor() { }
}
