import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  con: Contact[]=[];
  constructor(private contactservice:ContactService) { }

  ngOnInit(): void {
    const conObservable= this.contactservice.getContactDetails();
    conObservable.subscribe((conData: Contact[])=>{
      this.con=conData;
    });
  }

}
