import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsService } from 'src/app/services/comments/comments.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommentsComponent } from './comments.component';
import { of } from 'rxjs';

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;
  let mockCommentsService: jasmine.SpyObj<CommentsService>;

  beforeEach( async () => {

    const mockCommentsService = jasmine.createSpyObj('CommentsService', ['getPostComments', 'addComment']);
    mockCommentsService.getPostComments.and.returnValue(of([]));

    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [CommentsComponent],
      providers: [{ provide: CommentsService, useValue: mockCommentsService }]
    }).compileComponents();

    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
