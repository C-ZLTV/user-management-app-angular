import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 

  constructor(private service: UsersService){}

  user: any
  ngOnInit(): void {
    // this.user = this.service.getUser(4040697)
    // .subscribe((data) => console.log(data))
  }
}
