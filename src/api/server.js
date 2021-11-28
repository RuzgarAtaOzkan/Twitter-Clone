// MODULES
import axios from 'axios';

const baseURL = 'http://localhost:8081';

const instance = axios.create({
  baseURL,
  'Content-Type': 'application/json',
  Accept: 'application/json',
  withCredentials: true,
});

export default instance;
