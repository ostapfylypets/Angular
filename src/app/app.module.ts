import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {UsersDetailsComponent} from "./module/users/component/users-details/users-details.component";


let routes : Routes=[
  { path: 'users', loadChildren:
() => import('./module/users/users.module').then(m => m.UsersModule)
    }
    ,
  {path:'posts',loadChildren:
      () => import('./module/posts/post.module').then(m => m.PostModule)
  }

]


@NgModule({
  declarations: [
    AppComponent,

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
