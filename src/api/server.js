// MODULES
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8081',
  'Content-Type': 'application/json',
  Accept: 'application/json',
  withCredentials: true,
});

export default instance;
