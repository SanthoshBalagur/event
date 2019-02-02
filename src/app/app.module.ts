import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutServiceService } from './service/checkout-service.service';
import { PrepareComponent } from './Checkout/prepare.component';

@NgModule({
  declarations: [
    AppComponent,
    PrepareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CheckoutServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
