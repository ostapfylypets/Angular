import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./component/users/users.component";
import {HttpClientModule} from "@angular/common/http";
import {UsersDetailsComponent} from "./component/users-details/users-details.component";

const routes: Routes = [
  {path:'',component:UsersComponent,children:[
  {path:":id",component:UsersDetailsComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule],
  exports: [RouterModule,HttpClientModule]
})
export class UsersRoutingModule { }
