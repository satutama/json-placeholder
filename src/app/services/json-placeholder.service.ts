import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Post } from '../features/posts/post';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderService {
  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[] | undefined> {
    return this.http
      .get<Post[]>(`${this.url}/posts`)
      .pipe(catchError(() => of(undefined)));
  }
}
