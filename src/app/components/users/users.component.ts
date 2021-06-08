import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../interfaces/user.interface";
import {DataTransfetService} from "../../services/data-transfet.service";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  user:User;
  constructor(private UserService:UserService,private data:DataTransfetService) { }

  ngOnInit(): void {
    this.UserService.getUsers().subscribe(value => {
      this.users = value

    });
  }
catchUser(value:User):void{
    this.user=value

    }
    Login(){
      this.data.store.next(this.user.name)
    }
}
