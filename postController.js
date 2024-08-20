const posts = [
  { id: 1, title: 'Post One' },
  { id: 2, title: 'Post Two' },
];

// WAYS TO  EXPORT:
// export const getPosts = () => posts;

// EXPORT AS AN OBJECT
// const getPosts = () => posts;
// export { getPosts };

// DEFAULT VS REGULAR
// exports as default
const getPosts = () => posts;
// export as regular
export const getPostsLength = () => posts.length;
export default getPosts;
