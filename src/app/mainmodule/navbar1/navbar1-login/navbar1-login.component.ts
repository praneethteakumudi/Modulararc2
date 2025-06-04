import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-navbar1-login',
  templateUrl: './navbar1-login.component.html',
  styleUrls: ['./navbar1-login.component.css']
})
export class Navbar1LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      emailid: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
       alert("login successfull")
    } else {
      alert('Please fill out the form correctly');
    }
  }
}