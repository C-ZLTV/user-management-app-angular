import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentRoutingModule } from './componets-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostComponent } from './post/post.component';
import { CommentsComponent } from './comments/comments.component';
import { UsersListComponent } from '../components/users-list/users-list.component';
import { UserComponent } from '../components/user/user.component';
import { UserPostsComponent } from '../components/user-posts/user-posts.component';


@NgModule({
  declarations: [
    PostComponent,
    PostsListComponent,
    CommentsComponent,
    UsersListComponent,
    UserComponent,
    UserPostsComponent,
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
  ]
})
export class ComponentModule { }
