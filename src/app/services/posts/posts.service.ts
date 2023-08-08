import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Post} from './post'
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient,
    private auth: AuthService) {}

  url: string = 'https://gorest.co.in/public/v2/posts'
  httpOption = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getPostsObs(): Observable<Post[]>{
    const headers: HttpHeaders = this.auth.getHeaders()
    return this.http.get<Post[]>(this.url, {headers})
  }

  getPost(id: number | string): Observable<Post>{
    return this.getPostsObs().pipe(
      map((posts: Post[]) => posts.find((user) => user.id === +id)!)
    )
  }

  getUserPosts(id: number): Observable<Post[]>{
    return this.getPostsObs().pipe(
      map((posts: Post[]) => posts.filter((post: Post) => post.user_id === id)!)
    )
  }

  addPost(post: Post){
    const headers: HttpHeaders = this.auth.getHeaders()
    this.http.post<Post>(this.url, post, {headers})
  }
}
