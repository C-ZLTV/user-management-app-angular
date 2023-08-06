import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/comments';
import { CommentsService } from 'src/app/comments.service';
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

  @Input() postId!: number

  ngOnInit(): void {
    this.getComments()
  }
 
  getComments(): void{
    this.comments$ = this.commentService.getPostComments(this.postId).pipe(
      tap(data => {
        this.comments = data
        console.log(data)})
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

    if(comment.body){
      this.comments.push(comment as Comment)
    }
  
    this.commentService.addComment(comment).
    subscribe()
  }
}
