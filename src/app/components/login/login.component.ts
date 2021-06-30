import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router : Router) { }

  ngOnInit() {
  }
showmessage: boolean=false
  loginform =  this.fb.group({
    username : ['', [Validators.required, Validators.minLength(5)]],
    password : ['', [Validators.required]]
  })

  get userName() {
    return this.loginform.get('username')
  }

  get password() {
    return this.loginform.get('password')
  }

  login() {
   this.showmessage=true
   this.router.navigate(['/homepage'])
  }
}
