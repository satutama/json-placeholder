import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
export class PostsComponent implements OnInit, OnDestroy {
  private readonly subscriptions = new Subscription();

  constructor(private jsonPlaceholderService: JsonPlaceholderService) {}

  public posts!: Post[];

  ngOnInit(): void {
    this.subscriptions.add(this.getPosts());
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private getPosts() {
    this.jsonPlaceholderService
      .getPosts()
      .subscribe((posts) => (this.posts = posts));
  }
}
