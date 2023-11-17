import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreatePost } from './create-post.model';
import { CreatePostService } from './create-post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  @Input() formTitle!: string;
  @Output() formSubmitEvent = new EventEmitter<any>();

  createPost: CreatePost = {
    category: '',
    content: '',
    status: '',
    title: ''
  };

  statuses = [{text: 'Published', value: 'published'}, {text: 'Unpublished', value: 'unpublished'}];
  categories = [{text: 'Food blog', value: 'food_blog'}, {text: 'Health', value: 'health'}, {text: 'Technology', value: 'technology'}, {text: 'Self help', value: 'self_help'}];

  postSubmitted = false;
  btnDisabled = false;

  constructor(private createPostService: CreatePostService) {}

  ngOnInit() {
  }

  formSubmit(form: NgForm) {
    this.postSubmitted = false;   // to hide the successfully submitted message
    this.btnDisabled = true;      // to disable the submit button

    this.createPostService.createPost(form.value).subscribe(res => {
      this.postSubmitted = true;  // to show the successfully submitted message
      this.btnDisabled = false;   // to enable the submit button

      form.reset();

      // send data to parent
      this.formSubmitEvent.emit(false);
    });
  }

}
