import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/shared/homepage/homepage.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CategoryComponent } from './components/shopping-cart/filters/category/category.component';
import { PriceComponent } from './components/shopping-cart/filters/price/price.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { from } from 'rxjs';
import { ArrivalComponent } from './components/shared/arrival/arrival.component';
import { AboutusComponent } from './components/shared/aboutus/aboutus.component';
import { BuyPageComponent } from './components/shopping-cart/buy-page/buy-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CategoryComponent,
    PriceComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent,
    ArrivalComponent,
    AboutusComponent,
    BuyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
