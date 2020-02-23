// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.
import axios from 'axios';
const post = async param => {
  try {
    const req = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${param}`
    );
    return req.data;
  } catch (error) {
    return new Error(error);
  }
  // return axios
  //   .get(`https://jsonplaceholder.typicode.com/posts/${param}`)
  //   .then(res => {
  //     return res.data;
  //   })
  //   .catch(err => {
  //     return new Error(err);
  //   });
};
export default post;
