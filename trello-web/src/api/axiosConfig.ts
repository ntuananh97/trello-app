import axios, { AxiosInstance } from 'axios';

// Create an Axios instance
const client: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1', // Set your API base URL here
  timeout: 10000, // Request timeout
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default client;
