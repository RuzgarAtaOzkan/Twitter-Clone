// MODULES
import axios from 'axios';

//const baseURL = 'http://localhost:8081';
const devURL = 'https://v2.jokeapi.dev/joke/Any';

const instance = axios.create({
  baseURL: devURL,
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
});

export default instance;
