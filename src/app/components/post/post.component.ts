import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as PostsActions from '../../state/posts.actions';
import { Post } from './post';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  @Input() post!: Post;

  constructor(private store: Store) {}

  public nextContent(): void {
    this.store.dispatch(PostsActions.showNextContent({ id: this.post.id }));
  }

  public get displayedContent(): string | number {
    switch (this.post.displayIndex) {
      case 0:
        return this.post.title;
      case 1:
        return this.post.id;
      case 2:
        return this.post.userId;
      case 3:
        return this.post.body;
      default:
        return `Index ${this.post.displayIndex} is not supported.`;
    }
  }
}
