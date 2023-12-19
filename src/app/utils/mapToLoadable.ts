import { Observable, catchError, map, of, startWith } from 'rxjs';

export function mapToLoadable<T>(source: Observable<T>) {
  return source.pipe(
    map((v) => ({ isLoading: false, value: v })),
    startWith({ isLoading: true, value: undefined }),
    catchError(() => of({ isLoading: false, value: undefined }))
  );
}
