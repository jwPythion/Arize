import axios from 'axios';

export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (first, last, email, password, location, img) => {
    return axios.post('/api/signup', {first: first, last:last, email: email, password: password, location:location, img:img});
  },
  getEvent: (eventType, location) => {
    return axios.post("/api/proxy/events", {"event": eventType, "location": location})
  // Deletes the user with the given id
  },
  deleteUser: (id) => {
    return axios.delete(`/api/user/${id}`);
  },
  getWeatherFromYahoo: (query) => {
    return axios.post("/api/proxy/weather", {"query": query});
  }
};
