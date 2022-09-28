import { Component, OnInit } from '@angular/core';
import * as alldeals from "../deals.json";

@Component({
  selector: 'app-amzondeals',
  templateUrl: './amzondeals.component.html',
  styleUrls: ['./amzondeals.component.css']
})
export class AmzondealsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;

}
