import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs';
import { User } from 'src/app/services/users/user';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent  implements OnInit{

  constructor(private usersService: UsersService){}

  users$!: Observable<User[]>
  private searchInput = new Subject<string>()

  ngOnInit(): void {
    this.getSearchedUsers()
  }

  search(input: string){
    this.searchInput.next(input)
  }

  getSearchedUsers(){
    this.users$ = this.searchInput.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((input: string) => this.usersService.searchUser(input))
    );
  }

}

//Subject is a class provided by RxJS, used for implementing observable patterns, in particular it can be used to emit values and can be subscribed to by other parts of the application to react to those emitted values.

//next() emitts a new value to all the subscribers of the subject