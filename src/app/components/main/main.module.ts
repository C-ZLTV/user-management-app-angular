import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { CommentsComponent } from '../comments/comments.component';
import { PostComponent } from '../post/post.component';
import { PostsListComponent } from '../posts-list/posts-list.component';
import { UserComponent } from '../user/user.component';
import { UserPostsComponent } from '../user-posts/user-posts.component';
import { UsersListComponent } from '../users-list/users-list.component';


@NgModule({
  declarations: [
    CommentsComponent,
    PostComponent,
    PostsListComponent,
    UserComponent,
    UserPostsComponent,
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
