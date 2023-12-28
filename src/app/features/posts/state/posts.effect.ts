import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { JsonPlaceholderService } from 'src/app/services/json-placeholder.service';
import * as PostsActions from './posts.actions';
import { parsePostsResponse } from './util';

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.loadPosts),
      switchMap(() =>
        this.jsonPlaceholderService.getPosts().pipe(
          map((postsResponse) =>
            PostsActions.loadPostsSuccess({
              posts: parsePostsResponse(postsResponse),
            })
          ),
          catchError((error) => of(PostsActions.loadPostsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private jsonPlaceholderService: JsonPlaceholderService
  ) {}
}
