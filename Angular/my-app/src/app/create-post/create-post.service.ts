import { Injectable } from '@angular/core';
import { CreatePost } from './create-post.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {

  constructor(private httpClient: HttpClient) { }

  createPost(data: CreatePost) {
    return this.httpClient.post('https://jsonplaceholder.org/posts', data);
  }
}
