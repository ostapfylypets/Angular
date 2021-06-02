import { Component, OnInit } from '@angular/core';
import {Post} from "../../interfaces/post";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(private PostsService:PostsService) { }

  ngOnInit(): void {
    this.PostsService.getPosts().subscribe(value => {
    this.posts = value
    console.log(this.posts);
  });
  }

}
