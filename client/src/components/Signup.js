import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './AuthService';
import { Input, FormBtn } from '../components/Form';
import { Container } from '../components/Grid';
import { BgImage } from '../components/Main';
import { BackBtn } from '../components/UI';
import API from '../utils/API';

class Signup extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  state = {
    first: "",
    last: "",
    email: "",
    password: "",
    location: "",
    img:null
  }

  componentWillMount() {
    if (this.Auth.loggedIn()) {
      this.props.history.replace('/');
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const img = this.state.img || "/assets/img/test-profile3.jpg"
    API.signUpUser(this.state.first, this.state.last, this.state.email, this.state.password, this.state.location, img)
      .then(res => {
        console.log(res.data);
        // once the user has signed up
        // send them to the login page
        this.props.history.replace('/login');
      })
      .catch(err => alert(err));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <Container fluid>
          <BackBtn />
          <div className="card title-card text-center p-4">
            <h1 className="card-title pl-4 mb-0"><strong>INTAKE FORM</strong></h1>
            <div className="card-body">
              <Link to="/login">
                <button className="btn btn-outline-info mr-sm-2">GO TO LOGIN</button>
              </Link>
            </div>
          </div>

          <form className="profile-row bg-light p-5">
            <Input
              value={this.state.first}
              onChange={this.handleChange}
              name="first"
              label="First Name:"
              type="text"
              placeholder="John"
            />
            <Input
              value={this.state.last}
              onChange={this.handleChange}
              name="last"
              label="Last Name:"
              type="text"
              placeholder="Doe"
            />
            <Input
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
              label="Email Address:"
              type="text"
              placeholder="example@mail.com"
            />
            <Input
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
              label="Password:"
              type="password"
            />
            <Input
              value={this.state.img}
              onChange={this.handleChange}
              name="img"
              label="Image URL:"
              type="text"
              placeholder="http://"
            />
            <Input
              value={this.state.location}
              onChange={this.handleChange}
              name="location"
              label="Location:"
              type="text"
            />
            <FormBtn
              disabled={!(this.state.first && this.state.last && this.state.email && this.state.password)}
              onClick={this.handleFormSubmit}
            >
              Submit
              </FormBtn>
          </form>
        </Container>
        <BgImage />
      </div>
    );
  }
}

export default Signup;