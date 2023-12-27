import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as PostsActions from '../state/posts.actions';
import { Post } from './post';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post!: Post;

  public displayedContent!: string | number;

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.displayedContent = this.getValueByIndex(
      this.post.displayIndex,
      this.post
    );
  }

  public nextContent(): void {
    this.store.dispatch(PostsActions.showNextContent({ id: this.post.id }));
  }

  private getValueByIndex(index: number, post: Post): string | number {
    switch (index) {
      case 0:
        return post.title;
      case 1:
        return post.id;
      case 2:
        return post.userId;
      case 3:
        return post.body;
      default:
        return `Index ${index} is not supported.`;
    }
  }
}
