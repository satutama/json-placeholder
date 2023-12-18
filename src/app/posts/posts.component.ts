import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../json-placeholder.service';
import { Post } from '../post';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(private jsonPlaceholderService: JsonPlaceholderService) {}

  public posts!: Post[];

  ngOnInit(): void {
    this.getPosts();
  }

  private getPosts() {
    this.jsonPlaceholderService
      .getPosts()
      .subscribe((posts) => (this.posts = posts));
  }
}
