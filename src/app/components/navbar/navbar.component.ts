import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit{

  constructor(
    private auth: AuthService,
    private ruote: Router){}

  ngOnInit(): void {
    this.auth.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  isLoggedIn: boolean = this.auth.isLoggedIn()

  logout(){
    this.auth.logout()
    this.auth.setLoggedIn(this.auth.isLoggedIn());
    this.ruote.navigate(['/login'])
  }
}
