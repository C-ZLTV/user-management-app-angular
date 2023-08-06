import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Comment} from './comments'
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {}

  url = 'https://gorest.co.in/public/v2/comments'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  getCommentsObs(){
    return this.http.get<Comment[]>(this.url)
  }

  getPostComments(id: number): Observable<Comment[]>{
    return this.getCommentsObs().pipe(
      map((comments: Comment[]) => comments.filter((comment: Comment) => comment.post_id === id))
    )
  }

  addComment(comment: Comment){
    return this.http.post(this.url, comment, this.httpOptions)
  }
}
