import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  showMessage: boolean=false
  formData:any={}
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
  }

  registrationform =  this.fb.group({
    username : ['', [Validators.required, Validators.minLength(5)]],
    email : ['', [Validators.required]],
    password : ['', [Validators.required]],
    confirmpassword : ['', [Validators.required]]
  }, {validator : PasswordValidator})

  get userName() {
    return this.registrationform.get('username')
  }

  get email() {
    return this.registrationform.get('email')
  }

  get password() {
    return this.registrationform.get('password')
  }

  get confirmpassword() {
    return this.registrationform.get('confirmpassword')
  }

  registerUser(){
    this.formData=this.registrationform.value;
    alert(`Thank you ${this.formData.username} for registering`)
    this.showMessage=true;
  }
}

function PasswordValidator(control: AbstractControl) : { [key: string]: boolean} | null {
  const password = control.get('password');
  const confirmpassword = control.get('confirmpassword');
  if(password.pristine || confirmpassword.pristine) {
    return null
  }
  return password && confirmpassword && password.value !=  confirmpassword.value ?
  {'misMatch' : true} : null
}
