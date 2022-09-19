
import { Component, OnInit ,Input} from '@angular/core';


@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  _productname:any | undefined;

  @Input('product') //Laptop
  //write
  set pname(pname:any) //Laptop
  {
    this._productname=pname || 'search something';
    console.log(pname)
  }
  //read
  get pname():string
  {
    return this._productname;
  }
}
