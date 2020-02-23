import axios from 'axios';

const posts = async () => {
  try {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${param}`
    );
    return JSON.stringify(result.data);
  } catch (error) {
    return new Error(error);
  }
};

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  const data = posts();
  res.end(data);
}
