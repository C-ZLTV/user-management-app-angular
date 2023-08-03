import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { Post } from 'src/app/post';
import { PostsService } from 'src/app/posts.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private location: Location){}

  post$!: Observable<Post>
  id!:number

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts(){
    this.post$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.postsService.getPost(params.get('id')!)),
      tap((data) => {
        this.id = Number(data.id)
        console.log(this.id)})
    )
  }

  goBack(): void{
    this.location.back();
  }

}
