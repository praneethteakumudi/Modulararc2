import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar3-register',
  templateUrl: './navbar3-register.component.html',
  styleUrls: ['./navbar3-register.component.css']
})
export class Navbar3RegisterComponent {
  registerForm:FormGroup;
  constructor(private fb:FormBuilder){
    this.registerForm=this.fb.group({
      name:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      location: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }
  onSubmit(){
    if(this.registerForm.valid)
    {
      console.log('Registration Data:',this.registerForm.value);
    }
    else {
      console.log('Form Invalid');
    }
  }
}
