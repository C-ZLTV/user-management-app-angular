import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsService } from 'src/app/services/posts/posts.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { RouterTestingModule} from '@angular/router/testing';

import { UserPostsComponent } from './user-posts.component';

describe('UserPostsComponent', () => {
  let component: UserPostsComponent;
  let fixture: ComponentFixture<UserPostsComponent>;

  let mockPostsService: jasmine.SpyObj<PostsService>;

  const mockPost = { id: 1, user_id: 1, title: 'title', body: 'body',};

  beforeEach(() => {

    mockPostsService = jasmine.createSpyObj('PostsService', ['getUserPosts']);

    TestBed.configureTestingModule({
      declarations: [UserPostsComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: PostsService, useValue: mockPostsService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserPostsComponent);
    component = fixture.componentInstance;

    mockPostsService.getUserPosts.and.returnValue(of([mockPost]));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
