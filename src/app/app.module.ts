import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './services/users/users.service';


import { CommentsComponent } from './components/comments/comments.component';
import { PostComponent } from './components/post/post.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { Four0fourComponent } from './components/four0four/four0four.component';
import { LearnMoreComponent } from './components/learn-more/learn-more.component';
import { PostSearchComponent } from './components/post-search/post-search.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    PostComponent,
    PostsListComponent,
    UserComponent,
    UserPostsComponent,
    UsersListComponent,
    SearchUserComponent,
    LoginComponent,
    NavbarComponent,
    HomepageComponent,
    Four0fourComponent,
    LearnMoreComponent,
    PostSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
