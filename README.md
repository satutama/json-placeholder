# JsonPlaceholder

## Overview

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.10.

This application uses [jsonplaceholder](https://jsonplaceholder.typicode.com/) API to fetch [100 posts](https://jsonplaceholder.typicode.com/posts).

### The challenge

- All posts are rendered in a separate component and showed as squares, 10 rows x 10 columns.
- By default, the post title is shown.
- When clicking on a square, the title will be replaced with the userId.
- When clicking again, the Id will be shown and so on...

![](./screenshots.png)

## My process and what I learned

1. Created the app with CLI command `ng new json-placeholder`
2. Created the json-placeholde.service.ts with Post model
3. Added the Posts and Post component with basic function
4. Retest(s) and refactor(s)

To handle loading state and error state, I created `Loadable` type.
I find this to improve readability and maintainability.
And later on the code can be reused accrros different components, reducing code repetition.

I also added `mapToLoadable` operator. This operator transforms an observable to a `Loadable` value.
This can be used to manage the data loading process more effectively and provide a consistent user experience.

I made the Posts component template so that when we load the page, the loading state will be displayed before the request is completed. And when the request failed, the error state will be displayed.

```html
<ng-container *ngIf="loadablePosts$ | async as loadablePosts">
  <p *ngIf="loadablePosts.isLoading; else loaded" class="loading">Loading...</p>

  <ng-template #loaded>
    <div *ngIf="loadablePosts.value as posts" class="posts-container">
      <app-post *ngFor="let post of posts" [post]="post"> </app-post>
    </div>

    <div *ngIf="!loadablePosts.value" class="error-container">
      <h3>Oops! Something went wrong. Please try again.</h3>
      <button (click)="reloadPage()">Reload page</button>
    </div>
  </ng-template>
</ng-container>
```

### Continued development

- Extend `Loadable` and `mapToLoadable` to return error iso undefined (maybe we want to display the error message for example)
- Unit tests
- improve on design and user experience (_Art is never finished, only abandoned_ - Leonardo da Vinci)

## Development server

Run `npm i` and then `npm start`. Navigate to `http://localhost:4200/`.

The application will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
