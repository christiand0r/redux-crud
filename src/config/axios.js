import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3004/',
});

export default axiosClient;
