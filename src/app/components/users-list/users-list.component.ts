import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { User } from 'src/app/services/users/user';
import { ActivatedRoute } from '@angular/router';
import { Observable, catchError, tap, of } from 'rxjs';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,){}

    users$!: Observable<User[]>
    users!: User[]

    error: Error | null = null

    ngOnInit(): void {
      this.getUsers()
    }

    getUsers(){
      return this.users$ = this.usersService
      .getUsersObs().pipe(
        tap(data => this.users = data),
        tap({error: (error: Error) => this.error = error}),
        catchError(error => of([]))
        )
    }

    deleteUser(user: User): void{
      this.users = this.users.filter(usr => usr !== user)
      this.usersService.deleteUser(user.id).subscribe()
    }

    addUser(email: string, gender: string, name: string): void{
      const user = {
        id: 12345,
        email,
        gender,
        name,
        status: 'active'
      }

      this.users.push(user as User);

      this.usersService.addUser(user as User).subscribe()
    }
}


