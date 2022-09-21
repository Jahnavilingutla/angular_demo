import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lipsticks',
  templateUrl: './lipsticks.component.html',
  styleUrls: ['./lipsticks.component.css']
})
export class LipsticksComponent implements OnInit {

  constructor() { }

  
  myrating= 5;
  ngOnInit(): void {
    
  }
  lp=[{
    
    "image":"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/9/d9a921a24921_h-8901030811340.jpg",
    "pname":"Elle 18 Color Pop Matte Lip Color - R31 Crazy Red",
    "Status":"In Stock",
    "price": 300
    },
    {
    
      "image":"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/3/e35c3ef8904245710996_1.jpg",
      "pname":"Nykaa So Creme! Creamy Matte Lipstick",
      "Status":"In Stock",
      "price": 400
      },
      {
    
        "image":"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/5/45504c76902395803775_1.jpg",
        "pname":"Maybelline New York Color Sensational Ultimattes",
        "Status":"In Stock",
        "price": 299
      },
       {
    
        "image":"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/5/75e7ce6PLUMX00000244_1.jpg",
        "pname":"Plum Matte In Heaven Liquid Lipstick - Lychee-licious - 121",
        "Status":"Out of Stock",
        "price": 399
        },
        {
    
          "image":"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/e/0e340c5LE71.jpg",
          "pname":"Love Earth Multipot-Be The Change Lip Tint ",
          "Status":"In Stock",
          "price": 400
        }, 
        {
    
          "image":"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/d/bd180d124704_s1-8901030776533.jpg",
          "pname":"Lakme Cushion Matte Lipstick - Red Ruby",
          "Status":"In Stock",
          "price": 199
        },
        {
    
            "image":"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/3/c3007f68901030713941_1.jpg",
            "pname":"Lakme Lip Love Chapstick SPF 15 - Cherry",
            "Status":"In Stock",
            "price": 300
        },
        {
    
              "image":"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/f/4fcd0098904325001600_1.jpg",
              "pname":"Swiss Beauty All About Lips Palette - 01",
              "Status":"Out of Stock",
              "price": 199
        },
        {
    
                "image":"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/5/4/5442c92NYKAC00000731_1.jpg",
                "pname":"Nykaa Cosmetics Power Pouts With Nykaa So Matte Minis",
                "Status":"In Stock",
                "price": 299
                
        },
    ]
}
