import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/services/comments/comments';
import { CommentsService } from 'src/app/services/comments/comments.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit{

  constructor(private commentService: CommentsService){}

  comments$!: Observable<Comment[]>
  comments!: Comment[]
  error: Error | null  = null

  @Input() postId!: number

  ngOnInit(): void {
    this.getComments()
  }
 
  getComments(): void{
    this.comments$ = this.commentService.getPostComments(this.postId).pipe(
      tap(data => this.comments = data),
      tap({error: (error: Error) => this.error = error}),
    )
  }

  addComment(body: string){
    const comment = {
      id: 12345,
      post_id: this.postId,
      name: 'name',
      email: 'example.com',
      body,
    }
    
    this.comments.push(comment as Comment)
    this.commentService.addComment(comment).
    subscribe()
  }
}
