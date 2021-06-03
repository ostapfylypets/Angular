import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Posts} from "../interface/posts";


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {
  }
  getPosts(): Observable<Posts[]> {
    return this.httpClient.get<Posts[]>(this.url);
  }




}
