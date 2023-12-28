import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
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
      imports: [PostComponent],
      providers: [provideMockStore({ initialState })],
    });
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;

    mockStore = TestBed.inject(MockStore);
    component.post = initialState.posts.value[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct content based on displayIndex', () => {
    const index = [0, 1, 2, 3, 4];
    let expectation = [
      component.post.title,
      component.post.id,
      component.post.userId,
      component.post.body,
      `Index 4 is not supported.`,
    ];

    for (let i = 0; i < index.length; i++) {
      component.post.displayIndex = i;

      expect(component.displayedContent).toBe(expectation[i]);
    }
  });
});
