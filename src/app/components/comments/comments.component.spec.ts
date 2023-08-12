import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsService } from 'src/app/services/comments/comments.service';

import { HttpClientModule } from '@angular/common/http';
import { CommentsComponent } from './comments.component';

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CommentsComponent],
      providers: [CommentsService]
    });
    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
