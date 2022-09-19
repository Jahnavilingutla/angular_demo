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
      
      "image":"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/c99a6c86-2231-4fbd-a430-70bf5811987d.jpg",
      
    },
    {
     
      "image":"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/63d009e0-dd30-4b66-825b-a92c10701fe9.jpg",
    }, 
    {
      
      "image":"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/c7a230e9-4e73-43f2-8062-756d6788f25a.jpg",
      
    },
    {
      
      "image":"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/4350d4c0-959e-46ed-ba81-d699ac650830.jpg",
      
    },
    {
      
      "image":"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/e9a7ce9d-51ed-4079-a318-8a8dd6997d69.jpg",
     
    },
    {
      
      "image":"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/7be08cf5-9273-47d2-b7d1-9eeecf0a2c2d.jpg",
     
    },
    {
      
      "image":"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/a9f806d0-a24d-4370-9eec-0b81c9c4a712.jpg",
      
    },
    {
      
      "image":"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/54f0eac9-e9d6-4f44-ba9f-c615fa3717b3.jpg",
      
    },
    {
   
      "image":"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/4217f799-4bf0-4cf7-adb3-77ec0df94c39.jpg",
      
    }


  ]

  ngOnInit(): void {
  }

}
