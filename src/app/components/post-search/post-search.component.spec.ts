import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostSearchComponent } from './post-search.component';

describe('PostSearchComponent', () => {
  let component: PostSearchComponent;
  let fixture: ComponentFixture<PostSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostSearchComponent],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(PostSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
