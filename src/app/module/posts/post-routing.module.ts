import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {PostsComponent} from "./component/posts/posts.component";
import {PostDetailsComponent} from "./component/post-details/post-details.component";

const routes: Routes = [
  {path:'',component:PostsComponent,children:[
      {path:":id",component:PostDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule],
  exports: [RouterModule,HttpClientModule]
})
export class PostRoutingModule { }
