import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const mockAuthService = jasmine.createSpyObj('AuthService', ['autheticateWithToken', 'setLoggedIn', 'isLoggedIn']);
  const mockRouter = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach( () => {
     TestBed.configureTestingModule({
      imports: [ FormsModule],
      declarations: [LoginComponent],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter }]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
