import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Post } from 'src/app/post';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  constructor(private postsService: PostsService){}

  posts$!: Observable<Post[]>
  posts!: Post[]

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts(){
    return this.posts$ = this.postsService
      .getPostsObs()
      .pipe(
        tap(data => 
          {this.posts = data})
      )
  }
}