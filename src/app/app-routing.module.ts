import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from 'src/app/components/shared/homepage/homepage.component'
import {ShoppingCartComponent} from 'src/app/components/shopping-cart/shopping-cart.component'
import {LoginComponent} from 'src/app/components/login/login.component'
import {RegisterComponent} from 'src/app/components/register/register.component'
import {CartComponent} from 'src/app/components/shopping-cart/cart/cart.component'
import {ArrivalComponent} from 'src/app/components/shared/arrival/arrival.component'
import {AboutusComponent} from 'src/app/components/shared/aboutus/aboutus.component'
import {BuyPageComponent} from 'src/app/components/shopping-cart/buy-page/buy-page.component'

const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'arrival', component:ArrivalComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'shopping-cart', component:ShoppingCartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'cart', component: CartComponent},
  {path: 'buyPage/:cost', component: BuyPageComponent},
  {path: '', redirectTo: '/homepage', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
