import { Component, Input, OnInit } from '@angular/core';

import { PostsService } from 'src/app/posts.service';
import { Post } from 'src/app/post';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit{

  constructor(private postService: PostsService){}

  ngOnInit(): void {
    this.getUserPosts()
  }

  @Input() userId!: number
  
  userPosts$!: Observable<Post[]>

  getUserPosts() {
    this.userPosts$ = this.postService.getUserPosts(this.userId).pipe(
      tap(data => console.log(data))
    )
  }
}
