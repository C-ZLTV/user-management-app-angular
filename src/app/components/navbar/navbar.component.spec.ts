import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  const mockAuthService = {
    isLoggedIn$: new BehaviorSubject<boolean>(false),
    isLoggedIn: jasmine.createSpy('isLoggedIn'),
    logout: jasmine.createSpy('logout'),
    setLoggedIn: jasmine.createSpy('setLoggedIn')
  };

  const mockRouter = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter }
      ]
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
