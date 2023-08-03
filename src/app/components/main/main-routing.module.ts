import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsListComponent } from '../posts-list/posts-list.component';
import { PostComponent } from '../post/post.component';
import { UsersListComponent } from '../users-list/users-list.component';

import { UserComponent } from '../user/user.component';

const routes: Routes = [
  {path: 'posts', component: PostsListComponent},
  {path: 'posts/post/:id', component: PostComponent},
  {path: 'users', component: UsersListComponent},
  {path: 'users/user/:id', component: UserComponent},
  {path: 'posts/post/:id', component: PostComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
