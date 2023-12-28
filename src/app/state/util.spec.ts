import {
  INITIAL_DISPLAY_INDEX,
  parsePostsResponse,
  updatePostDisplayIndex,
} from './util';

describe('util', () => {
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

      expect(parsedPosts).toHaveSize(2);

      for (let i = 0; i < postsResponse.length; i++) {
        expect(parsedPosts[i].id).toBe(postsResponse[i].id);
        expect(parsedPosts[i].title).toBe(postsResponse[i].title);
        expect(parsedPosts[i].userId).toBe(postsResponse[i].userId);
        expect(parsedPosts[i].body).toBe(postsResponse[i].body);
        expect(parsedPosts[i].displayIndex).toBe(INITIAL_DISPLAY_INDEX);
      }
    });
  });

  describe('updatePostDisplayIndex', () => {
    it('should update the display index of a post', () => {
      const post = {
        id: 1,
        title: 'Post Title',
        userId: 1,
        body: 'Post Content',
        displayIndex: 0,
      };

      const updatedPost = updatePostDisplayIndex(post, 1);

      expect(updatedPost.id).toBe(1);
      expect(updatedPost.title).toBe('Post Title');
      expect(updatedPost.userId).toBe(1);
      expect(updatedPost.body).toBe('Post Content');
      expect(updatedPost.displayIndex).toBe(1);
    });

    it('should wrap the display index when it reaches the end', () => {
      const post = {
        id: 1,
        title: 'Post Title',
        userId: 1,
        body: 'Post Content',
        displayIndex: 3,
      };

      const updatedPost = updatePostDisplayIndex(post, 1);

      expect(updatedPost.id).toBe(1);
      expect(updatedPost.title).toBe('Post Title');
      expect(updatedPost.userId).toBe(1);
      expect(updatedPost.body).toBe('Post Content');
      expect(updatedPost.displayIndex).toBe(0);
    });
  });
});
