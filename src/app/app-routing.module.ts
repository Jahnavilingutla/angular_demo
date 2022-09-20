import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './details/details.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Details1Component } from './details1/details1.component';
import { CardsComponent} from './cards/cards.component';
import { Cards1Component } from './cards1/cards1.component';
import { LipsticksComponent } from './lipsticks/lipsticks.component';
import {HaircComponent} from './hairc/hairc.component';




const routes: Routes = [
  {path:'',component:CarouselComponent},
  {path:'details',component:DetailsComponent},
  {path:'details1',component:Details1Component},
  {path:'cards',component:CardsComponent},
  {path:'cards1',component:Cards1Component},
  {path:'lipsticks',component:LipsticksComponent},
  {path:'hairc',component:HaircComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
