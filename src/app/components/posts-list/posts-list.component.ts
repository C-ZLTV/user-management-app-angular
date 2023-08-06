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
        tap(data => {this.posts = data})
      )
  }

  addPost(title: string, body: string){
    const post = {
     id: 12345,
     user_id: 12345,
     title,
     body,
    }

    if(title && body){
      this.posts.push(post as Post)
      this.postsService.addPost(post as Post)
    }
  }
}
