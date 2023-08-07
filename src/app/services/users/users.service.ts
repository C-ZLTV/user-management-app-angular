import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from './user';
import { Observable, catchError } from 'rxjs';
import { map, of,from, tap,} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  url: string = 'https://gorest.co.in/public/v2/users'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getUsersObs(): Observable<User[]>{
    return this.http.get<User[]>(this.url)
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

    return this.http.get<User[]>(`${this.url}/?name=${input}`) as Observable<User[]>
  }

  addUser(user: User){
    return this.http.post<User>(this.url, user, this.httpOptions)
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.url}/${id}`, this.httpOptions)
  }
}




//map() in TS will loop over items in the array and change the values based on the function

//map in RxJS won't loop over the item for an http request but will do so for other observables

//of() gives stream of data
