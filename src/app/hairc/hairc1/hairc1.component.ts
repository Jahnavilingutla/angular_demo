import { Component, OnInit } from '@angular/core';
import * as wm from "../hairc.json";

@Component({
  selector: 'app-hairc1',
  templateUrl: './hairc1.component.html',
  styleUrls: ['./hairc1.component.css']
})
export class Hairc1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  washingmach:any=(wm as any).default;

  //Toggle effect to show and hide the pdescription and price
  //Property for toggle effect
  productDetail=false;
  //Event to perform the toggle effect
  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }
  //function to toggle between the span content from + to - and vice versa
  //and bind the function to [ngClass]
  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fa-solid fa-arrow-up';
    }
    else{
      content='fa-solid fa-arrow-down';
    }
    return content;
  }

}
