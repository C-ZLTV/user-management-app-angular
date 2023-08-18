import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private auth:  AuthService,
    private route: Router){}

  onSubmit(form: NgForm){
    const token = form.value.token
    this.auth.autheticateWithToken(token)
    this.auth.setLoggedIn(this.auth.isLoggedIn());
    this.route.navigate(['/users'])
  }
}
