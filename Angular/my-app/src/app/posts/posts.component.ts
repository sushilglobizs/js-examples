import { Posts } from './post.model';
import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts!: Posts[];

  showCreatePostForm = false;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts().subscribe(res => {
      this.posts = res;
    });
  }

  showForm() {
    this.showCreatePostForm = true;
  }

  hideForm(e: any) {
    this.showCreatePostForm = e;
  }

}
