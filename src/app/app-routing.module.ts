import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent} from './cards/cards.component';
import { Cards1Component } from './cards1/cards1.component';
import { LipsticksComponent } from './lipsticks/lipsticks.component';
import {HaircComponent} from './hairc/hairc.component';
import {ProductdetailsComponent} from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AmzondealsComponent } from './deals/amzondeals/amzondeals.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { AdminComponent } from './admin/admin.component';



const routes: Routes = [
  {path:'',component:CarouselComponent},
  {path:'cards',component:CardsComponent},
  {path:'cards1',component:Cards1Component},
  {path:'lipsticks',component:LipsticksComponent},
  {path:'hairc',component:HaircComponent},
  {path:'productdetails',component:ProductdetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'cartitem',component:CartItemsComponent},
  {path:'deals',component:AmzondealsComponent},
  {path:'cartitem',component:CartItemsComponent},
  {path:'admin',component:AdminComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
