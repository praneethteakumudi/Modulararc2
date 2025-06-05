import { Component } from '@angular/core';
import { FormBuilder,FormArray,Validator, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-navbar2-register',
  templateUrl: './navbar2-register.component.html',
  styleUrls: ['./navbar2-register.component.css']
})
export class Navbar2RegisterComponent {
                    registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      gender: ['', Validators.required],
      dob: [''],
      address: ['']
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirm = form.get('confirmPassword')?.value;
    return password === confirm ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Submitted:', this.registerForm.value);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
