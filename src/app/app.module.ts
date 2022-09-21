import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DetailsComponent } from './details/details.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Details1Component } from './details1/details1.component';
import { PcComponent } from './pc/pc.component';
import { CardsComponent } from './cards/cards.component';
import { Cards1Component } from './cards1/cards1.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { LipsticksComponent } from './lipsticks/lipsticks.component';
import { AdsComponent } from './ads/ads.component';
import { HaircComponent } from './hairc/hairc.component';
import { Hairc1Component } from './hairc/hairc1/hairc1.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DetailsComponent,
    CarouselComponent,
    Details1Component,
    PcComponent,
    CardsComponent,
    Cards1Component,
    CounterComponent,
    CounterchildComponent,
    LipsticksComponent,
    AdsComponent,
    HaircComponent,
    Hairc1Component,
    ContactComponent,
 
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
