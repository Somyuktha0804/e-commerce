import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MesscategoryService {

  constructor() { }
subject = new Subject()
  sendCategory(category) {  
    console.log(category)
    this.subject.next(category) //trigerring msg
  }

  getCategory() {
    return this.subject.asObservable()
    }
}
