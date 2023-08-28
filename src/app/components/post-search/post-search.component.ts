import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts/posts.service';
import { Post } from 'src/app/services/posts/post';
import { Subject, Observable, debounceTime,distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.css']
})
export class PostSearchComponent {
  constructor(private postService: PostsService){}

  posts$!: Observable<Post[]>
  private searchInput = new Subject<string>()

  ngOnInit(): void {
    this.getSearchedPosts()
  }

  search(input: string){
    this.searchInput.next(input)
  }

  getSearchedPosts(){
    this.posts$ = this.searchInput.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((input: string) => this.postService.searchPost(input))
    );
  }
}
