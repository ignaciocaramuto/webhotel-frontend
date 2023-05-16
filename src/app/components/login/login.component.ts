import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthenticationService) { }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.authService.logIn(this.loginForm.value);
    } else {
      // Handle form validation errors
      console.log('Invalid form');
    }
  }
}
