import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  constructor() { }
  subject = new Subject()
  subject1 = new Subject()
  sendMsg(product) {
   this.subject.next(product) // Triggering an event
  }

  getMsg() {
  return this.subject.asObservable()
  }

  removeCartSendMsg(product) {
    this.subject1.next(product)
  }

  removeCartGetMsg() {
    return this.subject1.asObservable()
  }
}
