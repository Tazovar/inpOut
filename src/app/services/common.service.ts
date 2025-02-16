import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
@Output() updateDataEmitter:EventEmitter<any> = new EventEmitter()
  constructor() { }
}
