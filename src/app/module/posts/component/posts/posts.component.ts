import { Component, OnInit } from '@angular/core';
import {Posts} from "../../interface/posts";
import {PostsService} from "../../service/posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts:Posts[]=[];
  constructor(private PostService:PostsService) { }

  ngOnInit(): void {
    this.PostService.getPosts().subscribe(value => {
      this.posts=value
    })
  }

}
