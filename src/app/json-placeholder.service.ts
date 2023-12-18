import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    const jsonPlaceholderPostsUrl =
      'https://jsonplaceholder.typicode.com/posts';

    return this.http.get<Post[]>(jsonPlaceholderPostsUrl);
  }
}
