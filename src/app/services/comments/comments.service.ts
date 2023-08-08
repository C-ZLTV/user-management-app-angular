import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Comment} from './comments'
import { map, Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private http: HttpClient,
    private auth: AuthService) {}

  url = 'https://gorest.co.in/public/v2/comments'
  
  getCommentsObs(){
    const headers: HttpHeaders = this.auth.getHeaders()
    return this.http.get<Comment[]>(this.url, {headers})
  }

  getPostComments(id: number): Observable<Comment[]>{
    return this.getCommentsObs().pipe(
      map((comments: Comment[]) => comments.filter((comment: Comment) => comment.post_id === id))
    )
  }

  addComment(comment: Comment){
    const headers: HttpHeaders = this.auth.getHeaders()
    return this.http.post(this.url, comment, {headers})
  }
}
