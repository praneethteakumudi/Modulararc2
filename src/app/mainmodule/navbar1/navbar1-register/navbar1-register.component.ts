import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar1-register',
  templateUrl: './navbar1-register.component.html',
  styleUrls: ['./navbar1-register.component.css']
})
export class Navbar1RegisterComponent {
  message='';
  regform=this.fb.group({
  name:['',[Validators.required]],
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required]]
 })
  constructor(public fb:FormBuilder){}

  onSubmit() {
    if (this.regform.valid) {
      this.message="registration successfull"
    }
    else
     this.message="registration failed..."


  }
}