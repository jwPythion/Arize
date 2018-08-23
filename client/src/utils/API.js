import axios from 'axios';

export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (first, last, email, password, location) => {
    return axios.post('/api/signup', {first: first, last:last, email: email, password: password, location:location});
  },
  getEvent: (eventType) => {
    return axios.post("/api/proxy/events", {"event": eventType})
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete(`/api/user/${id}`);
  }
};
