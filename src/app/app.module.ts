import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user/user.component';
import { PostComponent } from './components/post/post/post.component';
import { PostsComponent } from './components/posts/posts/posts.component';
import {RouterLink, RouterModule, Routes} from "@angular/router";
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';


let routes : Routes=[
  {path:'users',component:UsersComponent,children:[
      {path:':id',component:UserDetailsComponent}
    ]},
  {path:'posts',component:PostsComponent,children:[
      {path:':id',component:PostDetailsComponent}

]}]


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostComponent,
    PostsComponent,
    UserDetailsComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
