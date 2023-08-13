import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommentsService } from './comments.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Comment } from './comments';

describe('CommentsService', () => {
  let service: CommentsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService, CommentsService],
    });

    service = TestBed.inject(CommentsService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
