import { Component } from '@angular/core';
import { FormBuilder,FormArray,Validator, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-navbar2-login',
  templateUrl: './navbar2-login.component.html',
  styleUrls: ['./navbar2-login.component.css']
})
export class Navbar2LoginComponent {
         loginForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    console.log('Login Successful:', this.loginForm.value);
    // TODO: Add your login logic here (e.g., API call)
  }
}
