import { Component, OnInit } from '@angular/core';
import { Observable, catchError, tap, of } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from 'src/app/services/posts/post';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  constructor(private postsService: PostsService){}

  ngOnInit(): void {
    this.getPosts()
  }

  postForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
  })

  posts$!: Observable<Post[]>
  posts!: Post[]
  error: Error | null = null

  getPosts(){
    return this.posts$ = this.postsService
      .getPostsObs()
      .pipe(
        tap(data => {this.posts = data}),
        tap({error: (error) => this.error = error}),
        catchError(error => of([])), )
  }

  addPost(title: string, body: string){
    const post = {
     id: 12345,
     user_id: 12345,
     title,
     body,
    }

    this.posts.push(post as Post)
    this.postsService.addPost(post as Post)
  }
}
