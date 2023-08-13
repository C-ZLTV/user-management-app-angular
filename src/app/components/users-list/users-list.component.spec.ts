import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from 'src/app/services/users/users.service';
import { User } from 'src/app/services/users/user';
import { SearchUserComponent } from '../search-user/search-user.component';

import { of } from 'rxjs';

import { UsersListComponent } from './users-list.component';


describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  let mockUsersService: jasmine.SpyObj<UsersService>

  const mockUser: User = {
    id: 1,
    email: 'test@example.com',
    gender: 'Female',
    name: 'Marry Doe',
    status: 'active',
  };

  beforeEach(async () => {
    mockUsersService = jasmine.createSpyObj('UsersService', ['getUsersObs', 'deleteUser', 'addUser']);

     TestBed.configureTestingModule({
      declarations: [UsersListComponent, SearchUserComponent],
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule],
      providers: [
        { provide: UsersService, useValue: mockUsersService },
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({ users: [mockUser] }),
          },
        },
      ]
    })
      .compileComponents()

    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    mockUsersService.getUsersObs.and.returnValue(of([mockUser])); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
