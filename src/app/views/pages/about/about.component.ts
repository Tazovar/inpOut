import { Component } from '@angular/core';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
constructor(private aboutService:AboutService){}



getArray():Array<any>{
  return this.aboutService.getArray();
}
}
