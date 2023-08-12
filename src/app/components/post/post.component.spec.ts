import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { PostsService } from 'src/app/services/posts/posts.service';
import { Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PostComponent } from './post.component';
import { CommentsComponent } from '../comments/comments.component';

import { of } from 'rxjs';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  let postsServiceSpy: jasmine.SpyObj<PostsService>
  let locationSpy: jasmine.SpyObj<Location>
  let activatedRouteStub: Partial<ActivatedRoute>

  beforeEach(() => {

    const postsServiceMock = jasmine.createSpyObj('PostsService', ['getPost'])

    const locactionMock = jasmine.createSpyObj('Location', ['back'])

    activatedRouteStub = {
      paramMap: of(convertToParamMap({ id: '1' }))
    };

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PostComponent, CommentsComponent],
      providers: [ 
        {provide: PostsService, useValue: postsServiceMock},
        {provide: Location, useValue: locactionMock},
        {provide: ActivatedRoute, useValue: activatedRouteStub}]
    });

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();


    postsServiceSpy = TestBed.inject(PostsService) as jasmine.SpyObj<PostsService>;

    locationSpy = TestBed.inject(Location) as jasmine.SpyObj<Location>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
