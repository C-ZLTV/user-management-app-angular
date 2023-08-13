import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommentsService } from './comments.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Comment } from './comments';

describe('CommentsService', () => {
  let commentsService: CommentsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService, CommentsService],
    });

    commentsService = TestBed.inject(CommentsService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(commentsService).toBeTruthy();
  });

  it('should get post comments', () => {
    const postId = 1;
    const mockComments: Comment[] = [
      {id: 1, post_id: 1, name: 'name1', email: 'email1', body: 'string1',},
      {id: 2, post_id: 1, name: 'name2', email: 'email2', body: 'string2',},
    ];

    commentsService.getPostComments(postId)
    .subscribe((comments: Comment[]) => {
      expect(comments).toEqual(mockComments)
    })

    const req = httpTestingController.expectOne('https://gorest.co.in/public/v2/comments');
    expect(req.request.method).toEqual('GET')
    req.flush(mockComments);
  })

  it('should add a comment', () => {
    const newComment: Comment = 
    {id: 1, post_id: 1, name: 'name1', email: 'email1', body: 'string1'}

    commentsService.addComment(newComment)
    .subscribe(response => {
      expect(response).toEqual(newComment);
    })

    const req = httpTestingController.expectOne('https://gorest.co.in/public/v2/comments')
    expect(req.request.method).toEqual('POST')
    req.flush(newComment)
  })

});
