import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 081f287df9c9e8fbf5d517cdd992fdf577fbf9c2c5235da38d7ab76220e93e5c'
  }
});