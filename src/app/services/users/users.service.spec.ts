import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

import { AuthService } from 'src/app/auth/auth.service';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

import { User } from './user';

describe('UsersService', () => {
  let usersService: UsersService;
  let authService: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UsersService, AuthService
      ]
    });

    usersService = TestBed.inject(UsersService);
    authService = TestBed.inject(AuthService)
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(usersService).toBeTruthy()
  })

  
  it('should get users', () => {
    const mockUsers: User[] = [
      {id: 1, email: 'email1', gender: 'gender1', name: 'nam1', status: 'status1' },
      {id: 2, email: 'email2', gender: 'gender2', name: 'name2', status: 'status2' },
    ];

    usersService.getUsersObs().subscribe((users: User[]) => {
      expect(users).toEqual(mockUsers);
    });

    const req = httpTestingController.expectOne('https://gorest.co.in/public/v2/users');
    expect(req.request.method).toEqual('GET');
    req.flush(mockUsers);
  });

  it('should get user by ID', () => {
    const userId = 1;
    const mockUsers: User[] = [
      {id: 1, email: 'email1', gender: 'gender1', name: 'nam1', status: 'status1' },
      {id: 2, email: 'email2', gender: 'gender2', name: 'name2', status: 'status2' },
    ];

    usersService.getUser(userId).subscribe((user: User) => {
      expect(user).toEqual(mockUsers[0]);
    });

    const req = httpTestingController.expectOne('https://gorest.co.in/public/v2/users');
    expect(req.request.method).toEqual('GET');
    req.flush(mockUsers);
  });

  it('should search for users', () => {
    const searchTerm = 'User';
    const mockUsers: User[] = [
      {id: 1, email: 'email1', gender: 'gender1', name: 'nam1', status: 'status1' },
      {id: 2, email: 'email2', gender: 'gender2', name: 'name2', status: 'status2' },
    ];

    usersService.searchUser(searchTerm).subscribe((users: User[]) => {
      expect(users).toEqual(mockUsers);
    });

    const req = httpTestingController.expectOne(`https://gorest.co.in/public/v2/users/?name=${searchTerm}`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockUsers);
  });

  it('should add a user', () => {
    const newUser: User = {id: 1, email: 'email1', gender: 'gender1', name: 'nam1', status: 'status1' };

    usersService.addUser(newUser).subscribe((user: User) => {
      expect(user).toEqual(newUser);
    });

    const req = httpTestingController.expectOne('https://gorest.co.in/public/v2/users');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(newUser);
    req.flush(newUser);
  });

  it('should delete a user', () => {
    const userId = 1;
    const mockUser: User = {id: 1, email: 'email1', gender: 'gender1', name: 'nam1', status: 'status1' };

    usersService.deleteUser(userId).subscribe((user: User) => {
      expect(user).toEqual(mockUser);
    });

    const req = httpTestingController.expectOne(`https://gorest.co.in/public/v2/users/${userId}`);
    expect(req.request.method).toEqual('DELETE');
    req.flush(mockUser);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

});
