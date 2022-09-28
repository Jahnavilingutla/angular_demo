import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }
  
  ProductDetails = [
    {
      
      "image":"https://images-static.nykaa.com/uploads/3d68ad04-3910-4544-8710-fe99321c32c2.jpg?tr=w-480,cm-pad_resize",
      
    },
    {
     
      "image":"https://images-static.nykaa.com/uploads/e2d165b0-f615-4bcc-b88f-4202e424474a.jpg?tr=w-480,cm-pad_resize",
    }, 
    {
      
      "image":"https://images-static.nykaa.com/uploads/db22e1b4-6a14-48a5-8cf0-a636dacc587e.jpg?tr=w-480,cm-pad_resize",
      
    },
    {
      
      "image":"https://images-static.nykaa.com/uploads/4d3db3f9-78c4-485c-a32b-759800175406.jpg?tr=w-480,cm-pad_resize",
      
    },
    {
      
      "image":"https://images-static.nykaa.com/uploads/0c2fb895-6e36-4132-8e9e-5c1a4160fe11.jpg?tr=w-480,cm-pad_resize",
     
    },
    {
      
      "image":"https://images-static.nykaa.com/uploads/3b81fe16-d007-495a-aac6-1d5b1ad52db1.jpg?tr=w-480,cm-pad_resize",
     
    },
    {
      
      "image":"https://images-static.nykaa.com/uploads/ed53aefe-bbcd-46fc-af62-82edabf4372f.jpg?tr=w-480,cm-pad_resize",
      
    },
    {
      
      "image":"https://images-static.nykaa.com/uploads/28bd6640-1802-4582-9247-29cd15ee2bbb.png?tr=w-480,cm-pad_resize",
      
    },
    {
   
      "image":"https://images-static.nykaa.com/uploads/96ae9f4f-d5e0-48d4-a108-7b70b67a74bb.jpg?tr=w-480,cm-pad_resize",
      
    }


  ]

  ngOnInit(): void {
  }

}
