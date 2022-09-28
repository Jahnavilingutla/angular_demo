import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
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
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { DealsComponent } from './deals/deals.component';
import { AmzondealsComponent } from './deals/amzondeals/amzondeals.component';
import { AdminComponent } from './admin/admin.component';







@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarouselComponent,
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
    ProductdetailsComponent,
    LoginComponent,
    RegisterComponent,
    CartItemsComponent,
    DealsComponent,
    AmzondealsComponent,
    AdminComponent,
  
 
    
 
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
