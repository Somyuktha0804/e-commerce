import { Component, OnInit } from '@angular/core';
import  {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.css']
})
export class BuyPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

totalPrice:number
  ngOnInit() {
    let cost = parseInt(this.route.snapshot.paramMap.get('cost'))
    this.totalPrice=cost
  }

}
