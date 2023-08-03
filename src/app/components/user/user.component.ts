import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { UsersService } from 'src/app/users.service';
import { User } from 'src/app/user';

import { Observable, switchMap, tap } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router){}

    user$!: Observable<User>
    id!: number 

    
    ngOnInit(): void {
      this.getUser()
    }

    getUser(){
      this.user$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => this.usersService.getUser(Number(params.get('id')!))),
        tap(data => {
          this.id = Number(data.id)
          console.log(this.id)}));
    }

    gotoHeroes() {
      this.router.navigate(['users']);
    }

}
