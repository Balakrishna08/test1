import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
items:string[]=['milk','butter','bread','cova'];
getItems():string[]{
  return this.items;
}
addItem(form){
  this.items.push(form);
}
  constructor() {
   }
}
