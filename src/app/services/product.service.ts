import { Injectable } from '@angular/core';
import {Product} from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  products: Product[] = [
    new Product(1, 'Baby Milk Shampoo', 289, 'babycare', '../assets/images/Babycare/baby milk.jpg'),
    new Product(2, 'Milky Soft Face cream', 389, 'babycare', '../assets/images/Babycare/milky soft.jpg'),
    new Product(3, 'Hair Oil with Almond', 299, 'babycare', '../assets/images/Babycare/avacado.jpg'),
    new Product(4, 'Dusting Powder for Babies', 399, 'babycare', '../assets/images/Babycare/dusting powder.jpg'),
    new Product(14, 'Essentail Anti-Hair Fall Kit', 899, 'haircare', '../assets/images/Haircare/img 2.jpg'),
    new Product(6, 'Donkey Milk Charcoal Soap', 229, 'bodycare', '../assets/images/Bodycare/donkey.jpg'),
    new Product(7, 'Geranium tan removal lotion', 399, 'bodycare', '../assets/images/Bodycare/thyme.jpg'),
    new Product(8, 'Skin Polishing Soap', 119, 'bodycare', '../assets/images/Bodycare/polishing.jpg'),
    new Product(9, 'Under Eye Roll-on', 399, 'facecare', '../assets/images/facecare/img 101.jpg'),
    new Product(10, 'Dark Circle Removal Serum', 580, 'facecare', '../assets/images/facecare/img 102.jpg'),
    new Product(11, 'Wine Face Wash', 289, 'facecare', '../assets/images/facecare/img 103.jpg'),
    new Product(16, 'Onion Shampoo and Oil Combo', 1299, 'haircare', '../assets/images/Haircare/img 4.jpg'),
    new Product(12, 'Face Wash - Cider Vinegar & AloeVera', 399, 'facecare', '../assets/images/facecare/img 104.jpg'),
    new Product(5, 'CoCo Body Butter for Dry Skin', 599, 'bodycare', '../assets/images/Bodycare/coco butter.jpg'),
    new Product(15, 'Hair Fall Reduction Combo', 599, 'haircare', '../assets/images/Haircare/img 3.jpg'),
    new Product(13, 'Rice Hair Oil', 1119, 'haircare', '../assets/images/Haircare/img 1.jpg'),
  ] 
  constructor() { }

  getProducts(): Product[] {
    return this.products
  }
}
