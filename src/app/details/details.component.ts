import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import {
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  myForm: FormGroup | any;
  UserName: FormControl | any;
  Password: FormControl | any;
  ngOnInit(): void {
    this.UserName = new FormControl('', [Validators.required,Validators.pattern('[A-Za-z]*'), Validators.minLength(6), Validators.maxLength(10)]);
    this.Password = new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9]*'), Validators.minLength(6), Validators.maxLength(10)]);
    this.myForm = new FormGroup({
      'UserName': this.UserName,
      'Password': this.Password,
    })
  }
   //Event for the button
   onSubmit()
   {
     console.log(this.myForm);
   }

}
