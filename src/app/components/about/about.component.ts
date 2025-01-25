import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private router:Router){}
usersArray:any[] = [
  {name: 'John Doe', age: 30, email: 'john@example.com'},
  {name: 'Jane Smith', age: 25, email: 'jane@example.com'},
  {name: 'Mike Johnson', age: 28, email: 'mike@example.com'},
  {name: 'Sarah Davis', age: 32, email: 'sarah@example.com'},
  {name: 'David Wilson', age: 35, email: 'david@example.com'},
  {name: 'Emily Thompson', age: 37, email: 'emily@example.com'},
  {name: 'Michael Lee', age: 33, email: 'michael@example.com'},
]

onUSerCardBtnClick(user:any){
  user.name = user.name.replaceAll(' ', '')
  this.router.navigate(['/details',user.name],{queryParams:{age:user.age,email:user.email}})
}
}
