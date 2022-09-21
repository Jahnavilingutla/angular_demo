import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  con: Contact[] = [
    {
      Name:'Jahnavi',
      Phoneno:6304055206,
      Email:'jahnavi19@gmail.com',
    },
   
  ];

  public getContactDetails(): any {
    const conObservable = new Observable(observe => {
      setTimeout(() => {
        observe.next(this.con);
      }, 100);
    });
    return conObservable;
  }
}
