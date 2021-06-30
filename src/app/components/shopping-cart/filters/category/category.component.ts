import { Component, OnInit} from '@angular/core';
import {MesscategoryService} from 'src/app/services/messcategory.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categ : MesscategoryService) { }

category:string=''
  ngOnInit() {
  }

  set() {
    this.categ.sendCategory(this.category)
  }

}
