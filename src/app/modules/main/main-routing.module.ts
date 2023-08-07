import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsListComponent } from '../../components/posts-list/posts-list.component';
import { PostComponent } from '../../components/post/post.component';
import { UsersListComponent } from '../../components/users-list/users-list.component';

import { UserComponent } from '../../components/user/user.component';

const routes: Routes = [
  {path: 'posts', component: PostsListComponent},
  {path: 'post/:id', component: PostComponent},
  {path: 'users', component: UsersListComponent},
  {path: 'users/user/:id', component: UserComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
