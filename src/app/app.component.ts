import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 

  constructor(
    private auth: AuthService,
    private route: Router){}

  logout(){
    this.auth.logout()
    this.route.navigate(['/login'])
  }
}
