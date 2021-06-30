import { Component, OnInit, Input } from '@angular/core';
import {MessengerService} from 'src/app/services/messenger.service'

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any=[]
  constructor(private msg: MessengerService) { }

  ngOnInit() {
  }

  removeProd(removeitem) {
    console.log(removeitem)
    this.msg.removeCartSendMsg(removeitem)
  }

}
