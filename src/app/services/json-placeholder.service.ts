import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../features/posts/post/post';
import { Loadable } from '../utils/loadable';
import { mapToLoadable } from '../utils/mapToLoadable';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderService {
  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Loadable<Post[]>> {
    return this.http.get<Post[]>(`${this.url}/posts`).pipe(mapToLoadable);
  }
}
