import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

import { AuthService } from 'src/app/auth/auth.service';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

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

  // it('should get users', () => {

  // })
});
