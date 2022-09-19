import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import {
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-details1',
  templateUrl: './details1.component.html',
  styleUrls: ['./details1.component.css']
})
export class Details1Component implements OnInit {

  constructor() { }
  //Properties for the form and form elements/controls
  //Properties for the form and form elements/controls
  myForm: FormGroup | any;
  username: FormControl | any;
  useremail: FormControl | any;
  password: FormControl | any;
  mobile: FormControl | any;

  ngOnInit(): void {
    this.username = new FormControl('', [Validators.required,Validators.pattern('[A-Za-z]*'), Validators.minLength(6), Validators.maxLength(16)]);
    this.useremail = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9]*'), Validators.minLength(6), Validators.maxLength(14)]);
    this.mobile = new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]);
    this.myForm = new FormGroup({
      'username': this.username,
      'useremail': this.useremail,
      'password': this.password,
      'mobile': this.mobile
    })

  }

  //Event for the button
  onSubmit()
  {
    console.log(this.myForm);
  }


}
