import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { CommentsComponent } from '../../components/comments/comments.component';
import { PostComponent } from '../../components/post/post.component';
import { PostsListComponent } from '../../components/posts-list/posts-list.component';
import { UserComponent } from '../../components/user/user.component';
import { UserPostsComponent } from '../../components/user-posts/user-posts.component';
import { UsersListComponent } from '../../components/users-list/users-list.component';
import { SearchUserComponent } from '../../components/search-user/search-user.component';


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
