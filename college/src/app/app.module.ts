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
import { ItemListComponent } from './item-list/item-list.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { D1Directive } from './d1.directive';
import { Test1Component } from './test1/test1.component';
import { RupeesPipe } from './rupees.pipe';
import { TodoComponent } from './todo/todo.component';

import { HttpClientModule } from '@angular/common/http';
import { TaskstatusPipe } from './taskstatus.pipe';
import { AlbumComponent } from './album/album.component';

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
    UserdetailsComponent,
    ItemListComponent,
    ItemCardComponent,
    D1Directive,
    Test1Component,
    RupeesPipe,
    TodoComponent,
    TaskstatusPipe,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
