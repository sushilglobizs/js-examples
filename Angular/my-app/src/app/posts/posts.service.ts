import { Posts } from './post.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get<Posts[]>('https://jsonplaceholder.org/posts');
  }
}
