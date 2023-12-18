import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/features/posts/post';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input({ required: true }) post!: Post;

  public displayedContent!: string | number;
  private content!: (string | number)[];
  private currentDataIndex = 0;

  public ngOnInit(): void {
    this.content = Object.values(this.post);
    this.displayedContent = this.content[this.currentDataIndex];
  }

  public nextContent(): void {
    this.currentDataIndex++;
    if (this.currentDataIndex >= this.content.length) {
      this.currentDataIndex = 0;
    }

    this.displayedContent = this.content[this.currentDataIndex];
  }
}
