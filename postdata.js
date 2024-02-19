let posts = [];

export const getPosts = () => posts;
export const addPosts = (post) => {
  posts.push(post);
};
export const deletePosts = () => {
  posts = posts.filter((id) => posts.id != id);
};

export const updatePosts = () => {
  posts = posts.filter((id) => posts.id != id);
};
