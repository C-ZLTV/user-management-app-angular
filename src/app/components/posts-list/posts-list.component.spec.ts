import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsService } from 'src/app/services/posts/posts.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing'; 

import { PostsListComponent } from './posts-list.component';

import { of } from 'rxjs';

describe('PostsListComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;

  let postsServiceSpy: jasmine.SpyObj<PostsService>;

  beforeEach(() => {

    const postsServiceMock = jasmine.createSpyObj('PostsService', ['getPostsObs', 'addPost']);

    postsServiceMock.getPostsObs.and.returnValue(of([
      { id: 1, user_id: 12345, title: 'Mock Title 1', body: 'Mock Body 1' },
      { id: 1, user_id: 12345, title: 'Mock Title 2', body: 'Mock Body 2' },
    ]));

    TestBed.configureTestingModule({
      declarations: [PostsListComponent],
      providers: [
        { provide: PostsService, useValue: postsServiceMock }
      ],
      imports: [ReactiveFormsModule, RouterTestingModule]
    });

    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    postsServiceSpy = TestBed.inject(PostsService) as jasmine.SpyObj<PostsService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
