import { Component, OnInit } from '@angular/core';
import {MessengerService} from 'src/app/services/messenger.service';
import {Product} from 'src/app/models/product'
import {Router} from '@angular/router'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems=[]
  cartTotal=0
  constructor(private msg: MessengerService, private route: Router) {}

  ngOnInit() {
    this.msg.getMsg().subscribe((product : Product) => {
     this.addProductCart(product)
    })

    this.msg.removeCartGetMsg().subscribe((removProd : Product) => {
      this.removeProduct(removProd)
    })
  }

  addProductCart(product: Product) {
   var flag = false

    if(this.cartItems.length==0) {
      flag=false
    }else {
      for(let i in this.cartItems) {
        if(this.cartItems[i].id== product.id) {
          this.cartItems[i].qty++
          flag=true
          break
        }else {
          flag=false
        }
      }
    }
    if(flag==false) {
    this.cartItems.push({
      id: product.id,
      name: product.name,
      qty : 1,
      price : product.price 
    })
  } 

  this.cartTotal=0
  this.cartItems.forEach(item => {
  this.cartTotal += (item.qty*item.price)
})  
}
 

  buy() {
   this.route.navigate(['/buyPage', this.cartTotal])
  }

  removeProduct(removProd: Product){
    for(let i=0; i<this.cartItems.length; i++) {
      if(removProd.id==this.cartItems[i].id) {
        if(this.cartItems[i].qty>1) {
          this.cartItems[i].qty--
          break;
        }else {
          this.cartItems.splice(i, 1)
        }
      }
    }
    this.cartTotal=0
    this.cartItems.forEach(item => {
    this.cartTotal +=  (item.qty*item.price)
    })  
  }
    
}
