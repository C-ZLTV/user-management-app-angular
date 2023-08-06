import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { CommentsComponent } from '../comments/comments.component';
import { PostComponent } from '../post/post.component';
import { PostsListComponent } from '../posts-list/posts-list.component';
import { UserComponent } from '../user/user.component';
import { UserPostsComponent } from '../user-posts/user-posts.component';
import { UsersListComponent } from '../users-list/users-list.component';
import { SearchUserComponent } from '../search-user/search-user.component';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CommentsComponent,
    PostComponent,
    PostsListComponent,
    UserComponent,
    UserPostsComponent,
    UsersListComponent,
    SearchUserComponent,
    ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MainModule { }
