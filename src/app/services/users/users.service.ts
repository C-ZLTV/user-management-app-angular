import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from './user';
import { Observable, catchError, throwError } from 'rxjs';
import { map, of,from, tap,} from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
    ) { }

  url: string = 'https://gorest.co.in/public/v2/users'

  getUsersObs(): Observable<User[]>{
    const headers: HttpHeaders = this.auth.getHeaders()
    return this.http.get<User[]>(this.url, {headers}).pipe(
      catchError(() => {
        return throwError(() => new Error('Coudnt load users'))
      })
    )
  }

  getUser(id: number): Observable<User> {
    return this.getUsersObs().pipe(
      map((users: User[]) => users.find(user => user.id === id)!)
    )
  }

  searchUser(input: string): Observable<User[]>{
    if (!input.trim()) {
      return of([]);
    }
    const headers: HttpHeaders = this.auth.getHeaders()
    return this.http.get<User[]>(`${this.url}/?name=${input}`, {headers}) as Observable<User[]>
  }

  addUser(user: User): Observable<User>{
    const headers: HttpHeaders = this.auth.getHeaders()
    return this.http.post<User>(this.url, user, {headers})
  }

  deleteUser(id: number): Observable<User> {
    const headers: HttpHeaders = this.auth.getHeaders()
    return this.http.delete<User>(`${this.url}/${id}`, {headers})
  }
}




//map() in TS will loop over items in the array and change the values based on the function

//map in RxJS won't loop over the item for an http request but will do so for other observables

//of() gives stream of data
