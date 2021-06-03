import { Component, OnInit } from '@angular/core';
import {User} from "../../interface/user";
import {UserService} from "../../service/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users:User[]=[];
  constructor(private UserService:UserService) { }

  ngOnInit(): void {
    this.UserService.getUsers().subscribe(value=>{
      this.users=value})
    };


}
