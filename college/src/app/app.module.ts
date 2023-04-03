import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CalcComponent } from './calc/calc.component';
import { EvenoddComponent } from './evenodd/evenodd.component';
import { CartComponent } from './cart/cart.component';
import { Cart2Component } from './cart2/cart2.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    CalcComponent,
    EvenoddComponent,
    CartComponent,
    Cart2Component,
    UserhomeComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
