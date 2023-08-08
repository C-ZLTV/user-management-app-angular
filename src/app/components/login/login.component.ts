import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth:  AuthService){}

  onSubmit(form: NgForm){
    const token = form.value.token
    this.auth.autheticateWithToken(token)
    console.log(this.auth.getToken())
  }

}
