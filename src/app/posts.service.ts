import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Post} from './post'
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {}
  url: string = 'https://gorest.co.in/public/v2/posts'

  getPostsObs(): Observable<Post[]>{
    return this.http.get<Post[]>(this.url)
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
}
