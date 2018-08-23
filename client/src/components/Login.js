import React, { Component } from 'react';
import AuthService from './AuthService';
import { Link } from 'react-router-dom';
import { Container } from '../components/Grid';
import { Input, FormBtn } from '../components/Form';
import { BackBtn } from '../components/UI';
import { BgImage } from '../components/Main';

class Login extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  state = {
    email: "",
    password: ""
  }

  componentWillMount() {
    if (this.Auth.loggedIn()) {
        this.props.history.replace('/');
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();

    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        // once user is logged in
        // take them to their profile page
        this.props.history.replace(`/profile/${res.data.user._id}`);
      })
      .catch(err => {
        console.log(err.response);
        alert(err.response.data.message)
      });
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
          <div className="card text-center p-4">
            <h1 className="card-title mb-0"><strong>LOGIN</strong></h1>
            <div className="card-body">
              <Link to="/signup">
                <button className="btn btn-outline-info">GO TO SIGNUP</button>
              </Link>
            </div>
          </div>

          <form className="profile-row bg-light p-5">
            <Input
              value={this.state.first}
              onChange={this.handleChange}
              name="email"
              label="Email Address:"
              type="email"
            />
            <Input
              value={this.state.first}
              onChange={this.handleChange}
              name="password"
              label="Password:"
              type="password"
            />
            <FormBtn
              disabled={!(this.state.email && this.state.password)}
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

export default Login;