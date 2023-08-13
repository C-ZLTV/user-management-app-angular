import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostsService } from './posts.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Post } from './post';

describe('PostsService', () => {
  let postsService: PostsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService, PostsService],
    });

    postsService = TestBed.inject(PostsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(postsService).toBeTruthy();
  });

  it('should get posts', () => {
    const mockPosts: Post[] = [
      { id: 1, user_id: 1, title: 'title', body: 'body' },
      { id: 2, user_id: 2, title: 'title2', body: 'body2' }
    ];

    postsService.getPostsObs().subscribe((posts: Post[]) => {
      expect(posts).toEqual(mockPosts);
    });

    const req = httpTestingController.expectOne('https://gorest.co.in/public/v2/posts');
    expect(req.request.method).toEqual('GET');
    req.flush(mockPosts);
  });

  it('should get post by ID', () => {
    const postId = 1;
    const mockPosts: Post[] = [
      { id: 1, user_id: 1, title: 'Title 1', body: 'Body 1' },
      { id: 2, user_id: 2, title: 'Title 2', body: 'Body 2' }
    ];

    postsService.getPost(postId).subscribe((post: Post) => {
      expect(post).toEqual(mockPosts[0]);
    });

    const req = httpTestingController.expectOne(`https://gorest.co.in/public/v2/posts`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockPosts);
  });

  it('should get user posts', () => {
    const userId = 1;
    const mockPosts: Post[] = [
      { id: 1, user_id: userId, title: 'Title 1', body: 'Body 1' },
      { id: 2, user_id: userId, title: 'Title 2', body: 'Body 2' }
    ];

    postsService.getUserPosts(userId).subscribe((posts: Post[]) => {
      expect(posts).toEqual(mockPosts);
    });

    const req = httpTestingController.expectOne('https://gorest.co.in/public/v2/posts');
    expect(req.request.method).toEqual('GET');
    req.flush(mockPosts);
  });

  it('should add a post', () => {
    const newPost: Post = { id: 1, user_id: 1, title: 'New Title', body: 'New Body' };
  
    postsService.addPost(newPost).subscribe(response => {
      expect(response).toEqual(newPost);
    });
  
    const req = httpTestingController.expectOne('https://gorest.co.in/public/v2/posts');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(newPost);
  
    req.flush(newPost);
  });


  afterEach(() => {
    httpTestingController.verify();
  });


});
