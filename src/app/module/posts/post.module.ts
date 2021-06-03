import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import {PostsService} from "./service/posts.service";
import { PostsComponent } from './component/posts/posts.component';
import { PostComponent } from './component/post/post.component';
import { PostDetailsComponent } from './component/post-details/post-details.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  exports:[
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
  ,
  providers: [PostsService]
})
export class PostModule { }
