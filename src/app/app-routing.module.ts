import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { PostComponent } from './components/post/post.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { UserComponent } from './components/user/user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { Four0fourComponent } from './components/four0four/four0four.component';
import { LearnMoreComponent } from './components/learn-more/learn-more.component';


const routes: Routes = [
  {path: 'posts',
  component: PostsListComponent,
  canActivate: [authGuard]},
  {path: 'post/:id',
  component: PostComponent,
  canActivate: [authGuard]},
  {path: 'users',
  component: UsersListComponent,
  canActivate: [authGuard]},
  {path: 'users/user/:id',
  component: UserComponent,
  canActivate: [authGuard]},
  {path: 'homepage',
  component: HomepageComponent},
  {path: '',
  redirectTo: 'homepage',
  pathMatch: 'full'},
  {path: 'login',
  component: LoginComponent,},
  {path: 'learn-more',
  component: LearnMoreComponent},
  {path: '404',
  component: Four0fourComponent },
  {path: '**',
  redirectTo: '404',
  pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
