import { Component, Input, OnInit } from '@angular/core';

import { PostsService } from 'src/app/services/posts/posts.service';
import { Post } from 'src/app/services/posts/post';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit{

  constructor(private postService: PostsService){}

  ngOnInit(): void {
    this.getUserPosts()
    console.log(this.userId)
  }

  @Input() userId!: number
  
  userPosts$!: Observable<Post[]>

  emptyMessage = ''

  getUserPosts() {
    this.userPosts$ = this.postService.getUserPosts(this.userId).pipe(
      tap(data => {
        if (data.length === 0){
          this.emptyMessage = 'Not posts yet'
        }
      })
    )
  }
}
