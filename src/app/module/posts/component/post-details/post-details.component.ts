import { Component, OnInit } from '@angular/core';
import {Posts} from "../../interface/posts";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
post:Posts;

  constructor(private route:Router,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(params =>
    this.post=this.route.getCurrentNavigation()?.extras.state as Posts)
    console.log(this.post);
  }

  ngOnInit(): void {
  }

}
