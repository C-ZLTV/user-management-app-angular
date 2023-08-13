import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SearchUserComponent } from './search-user.component';

describe('SearchUserComponent', () => {
  let component: SearchUserComponent;
  let fixture: ComponentFixture<SearchUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchUserComponent],
      imports: [ HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(SearchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
