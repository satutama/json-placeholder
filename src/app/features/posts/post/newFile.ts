import { parsePostsResponse } from '../state/util';

describe('parsePostsResponse', () => {
  it('should map PostResponse objects to Post objects with initial display index', () => {
    const postsResponse = [
      {
        id: 1,
        title: 'Title 1',
        userId: 1,
        body: 'Body 1',
      },
      {
        id: 2,
        title: 'Title 2',
        userId: 2,
        body: 'Body 2',
      },
    ];

    const parsedPosts = parsePostsResponse(postsResponse);

    expect(parsedPosts).toHaveLength(2);
    expect(parsedPosts[0].id).toBe(1);
    expect(parsedPosts[0].title).toBe('Title 1');
    expect(parsedPosts[0].userId).toBe(1);
    expect(parsedPosts[0].body).toBe('Body 1');
    expect(parsedPosts[0].displayIndex).toBe(INITIAL_DISPLAY_INDEX);

    expect(parsedPosts[1].id).toBe(2);
    expect(parsedPosts[1].title).toBe('Title 2');
    expect(parsedPosts[1].userId).toBe(2);
    expect(parsedPosts[1].body).toBe('Body 2');
    expect(parsedPosts[1].displayIndex).toBe(INITIAL_DISPLAY_INDEX);
  });
});
