import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  autheticateWithToken(token: string): void{
    localStorage.setItem('token', token)
  }

  logout(): void{
    localStorage.removeItem('token')
  }

  isLoggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }

  getHeaders(): HttpHeaders {
    const token = this.getToken();

    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }
}
