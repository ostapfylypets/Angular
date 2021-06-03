import { Component, OnInit } from '@angular/core';
import {User} from "../../interface/user";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
user:User;

  constructor(private router:Router,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(params=> {
      this.user = this.router.getCurrentNavigation()?.extras.state as User ;
      console.log(this.user);
    })
  }

  ngOnInit(): void {
  }

}
