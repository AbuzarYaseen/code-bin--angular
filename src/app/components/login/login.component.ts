import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);
  loginFormGroup = new FormGroup({
    email: this.email,
    pass: this.password,
  });

  login() {
    console.log(this.loginFormGroup.value);
  }
  reset() {
    this.loginFormGroup.reset();
  }
}
