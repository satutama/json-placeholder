import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';

export interface PostResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderService {
  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  public getPosts(): Observable<PostResponse[]> {
    return this.http.get<PostResponse[]>(`${this.url}/posts`).pipe(
      retry(3),
      catchError(() =>
        throwError(
          () => new Error('Something bad happened; please try again later.')
        )
      )
    );
  }
}
