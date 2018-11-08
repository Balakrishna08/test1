import { Component,OnInit } from '@angular/core';
import {DataService} from '../data.service';
declare const $: any;
@Component({
  selector: 'list-items',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[DataService]
})
export class ListComponent implements OnInit {
  itemsReceived:string[]=[];
  updateName() {
    
  }
  getItemsReceivedFromServiceClass(){
      this.itemsReceived=this.dataService.getItems();
  }
  addItems(form:any){
      this.dataService.addItem(form.value.item);
  }
  constructor(private dataService:DataService){

  }
 
  ngOnInit(){

  }
}
