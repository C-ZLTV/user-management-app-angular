import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

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

  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isLoggedIn());
  
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  setLoggedIn(value: boolean) {
    this.isLoggedInSubject.next(value);
  }
}
