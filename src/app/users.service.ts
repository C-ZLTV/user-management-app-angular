import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { map, of,from, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  persone = from([
    {nome: 'luca1', cognome: 'rossi1', id: 0},
    {nome: 'luca2', cognome: 'rossi2', id: 1},
    {nome: 'luca3', cognome: 'rossi3', id: 2},
    {nome: 'luca4', cognome: 'rossi4', id: 3},
    {nome: 'luca5', cognome: 'rossi5', id: 4},
  ])

  constructor(private http: HttpClient) { }

  url: string = 'https://gorest.co.in/public/v2/users'

  getUsersObs(): Observable<User[]>{
    return this.http.get<User[]>(this.url)
  }

  getUser(id: number): Observable<User> {
    return this.getUsersObs().pipe(
      map((users: User[]) => users.find(user => user.id === id)!)
    )
  }

  getPersona(){
    return this.persone.pipe(
      map((persona) => persona.id)
    ).subscribe(console.log)
  }
}

//find() returns the first element in the array that satifies the provited testing function

//map() in TS will loop over items in the array and change the values based on the function

//map in RxJS won't loop over the item for anf http request but will do so for other observables

//of() gives stream of data
