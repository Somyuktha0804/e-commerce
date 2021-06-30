import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrival',
  templateUrl: './arrival.component.html',
  styleUrls: ['./arrival.component.css']
})
export class ArrivalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newArrivals =[
    {id: 1, name:'Wine face kit', price: 299 ,description: " This combo includes wine gel, wine soap, wine cream and wine toner.", arrImg:'../assets/images/New Arrivals/new arr1.jpg' },
    {id: 2, name:'Face pimple kit', price:399 ,description: "This products contains Neem oil which is loaded with properties that contains high levels of the essential fatty acids clears out your pimple.", arrImg:'../assets/images/New Arrivals/new arr2.jpg' },
    {id: 3, name:'Under arm pack', price:599 ,description: "This product helps in reducing the hyper pigmentation and dark patches results in smooth skin.", arrImg:'../assets/images/New Arrivals/new arr3.jpg' },
    {id: 4, name:'Tea tree hair mask', price:399 ,description: "This product helps you soothe the irritating oily and flaky scalp by controlling dandruff.", arrImg:'../assets/images/New Arrivals/new arr4.jpg' },
    
  ]
}
