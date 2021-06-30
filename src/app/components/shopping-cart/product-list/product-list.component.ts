import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/services/product.service'
import {Product} from 'src/app/models/product'
import {MesscategoryService} from 'src/app/services/messcategory.service'


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
   product: Product[] 
   catProduct: Product[]
  constructor(private productService : ProductService, private categ: MesscategoryService) {
   }

  ngOnInit() {
     this.product = this.productService.getProducts()  
     this.catProduct=this.product
     this.categ.getCategory().subscribe((categmsg : string) => {
       this.displayCategory(categmsg)
     })
  }

  displayCategory(categmsg) {
    
    if(categmsg=='All' || undefined) {
     this.catProduct=this.product
    }else {
      this.catProduct=[]
      for(let i=0; i<this.product.length; i++) {
        if(categmsg.toLowerCase()==this.product[i].category) {
          this.catProduct.push(this.product[i])
        }
      }
    }
    
  }

}
