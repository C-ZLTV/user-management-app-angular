import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { User } from 'src/app/services/users/user';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserComponent } from './user.component';
import { UserPostsComponent } from '../user-posts/user-posts.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let mockUsersService: jasmine.SpyObj<UsersService>;
  let mockActivatedRoute: any;

  const mockUser: User = {
    id: 1,
    email: 'test@example.com',
    gender: 'Female',
    name: 'Marry Doe',
    status: 'active',
  };

  beforeEach( async () => {

    mockUsersService = jasmine.createSpyObj('UsersService', ['getUser']);
    mockActivatedRoute = {
      paramMap: of({ get: (key: string) => '1' }),
    };

    TestBed.configureTestingModule({
      declarations: [UserComponent, UserPostsComponent],
      providers: [
        { provide: UsersService, useValue: mockUsersService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
      imports: [HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    mockUsersService.getUser.and.returnValue(of(mockUser));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
