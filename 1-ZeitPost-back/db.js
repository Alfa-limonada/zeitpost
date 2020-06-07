const dbpost = [
  {
    name: "titulo post",
    content: "contenido del post",
  },
  {
    name: "titulo post 2",
    content: "contenido del post 2",
  },
];
const post = {};
const getPost = () => {
  return dbpost;
};

const addPost = (post) => {
  dbpost.push(post);
  return getPost();
};

module.exports = {
  getPost,
  addPost,
};
