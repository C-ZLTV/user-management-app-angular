import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { User } from 'src/app/user';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';


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

    ngOnInit(): void {
      this.getUsers()
    }

    getUsers(){
      return this.users$ = this.usersService
      .getUsersObs()
      .pipe(tap((data) => {this.users = data}))
    }
}

