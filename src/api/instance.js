// MODULES
import axios from 'axios';

//const local = 'http://localhost:8081';
const dev = 'https://v2.jokeapi.dev/joke/Any';

const instance = axios.create({
  baseURL: dev,
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
});

export default instance;
