import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './component/users/users.component';
import { UserComponent } from './component/user/user.component';
import { UsersDetailsComponent } from './component/users-details/users-details.component';
import {UserService} from "./service/users.service";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UsersDetailsComponent
  ],
  exports: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,

  ],
  providers: [UserService]
})
export class UsersModule { }
