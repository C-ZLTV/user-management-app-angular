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
  
  @Input() postId!: number

  ngOnInit(): void {
    this.getComments()
  }
 
  getComments(): void{
    this.comments$ = this.commentService.getPostComments(57456)
  }

}
