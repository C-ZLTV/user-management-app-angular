import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from 'src/app/services/posts/post';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
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

    this.posts.push(post as Post)
    this.postsService.addPost(post as Post)
  }
}
