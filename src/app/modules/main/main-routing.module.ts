import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'src/app/auth/auth.guard';

import { PostsListComponent } from '../../components/posts-list/posts-list.component';
import { PostComponent } from '../../components/post/post.component';
import { UsersListComponent } from '../../components/users-list/users-list.component';
import { UserComponent } from '../../components/user/user.component';
import { LoginComponent } from 'src/app/components/login/login.component';

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
  {path: 'login',
  component: LoginComponent,},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
