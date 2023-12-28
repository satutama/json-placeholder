import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let mockStore: MockStore;

  const initialState = {
    posts: {
      isLoading: false,
      value: [
        { id: 1, title: 'Title 1', userId: 1, body: 'Body 1', displayIndex: 0 },
        { id: 2, title: 'Title 2', userId: 2, body: 'Body 2', displayIndex: 1 },
      ],
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PostsComponent],
      providers: [provideMockStore({ initialState })],
    });
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
