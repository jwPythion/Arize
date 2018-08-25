import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../components/AuthService';
import withAuth from '../../components/withAuth';
import API from '../../utils/API';
import { Container, Row, Col } from '../../components/Grid';
import { Input, FormBtn } from '../../components/Form';
import { BackBtn } from '../../components/UI';
import { BgImage } from '../../components/Main';
import './Profile.css';

class Edit extends Component {
    constructor() {
        super();
        this.Auth = new AuthService();
    }

    state = {
        id: "",
        email: "",
        first: "",
        last: "",
        password: "",
        confirm: "",
        location: "",
        img: "",
        collapse: ""
    };

    componentDidMount() {
        API.getUser(this.props.user.id).then(res => {
            this.setState({
                id: res.data._id,
                email: res.data.email,
                first: res.data.first,
                last: res.data.last,
                location: res.data.location,
                img: res.data.img
            })
        });
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.first && this.state.last) {
            API.saveUser(this.state.id, {
                first: this.state.first,
                last: this.state.last,
                email: this.state.email,
                location: this.state.location,
                img: this.state.img
            })
                .then(res => this.history.replace('/profile'))
                .catch(err => console.log(err));
        }
    };

    openPassword = evt => {
        evt.preventDefault();
        const val = (this.state.collapse.length < 1) ? "show" : "";
        this.setState({ 
            collapse: val,
            password:"",
            confirm:""
         })
    }

    render() {
        return (
            <div className="profile">
                <Container fluid>
                    <BackBtn href='/profile'/>
                    <div className="card text-center title-card p-4">
                        <h1 className="card-title"><strong>Edit User</strong></h1>
                        <h2 className="card-title"><strong>{`${this.state.first} ${this.state.last}`}</strong></h2>
                    </div>
                    <Row classes="justify-content-center bg-light profile-row">
                        <Col size="lg-5 xl-3" spacing="text-center pt-4 mb-5">
                            <div className="pic-container">
                                <img className="img-fluid rounded-circle" src={this.state.img} alt="profile pic" />
                                <div className="overlay">
                                    <div className="text">
                                        <button className="btn btn-outline-warning">Change Image</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col size="lg-7 xl-6" spacing="text-center p-4">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th scope="row">First Name:</th>
                                        <td className="p-0">
                                            <Input
                                                value={this.state.first}
                                                onChange={this.handleChange}
                                                name="first"
                                                type="text"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Last Name:</th>
                                        <td className="p-0">
                                            <Input
                                                value={this.state.last}
                                                onChange={this.handleChange}
                                                name="last"
                                                type="text"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Location:</th>
                                        <td className="p-0">
                                            <Input
                                                value={this.state.location}
                                                onChange={this.handleChange}
                                                name="location"
                                                type="text"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Email:</th>
                                        <td className="p-0">
                                            <Input
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                                name="email"
                                                type="email"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button className="btn btn-outline-danger" onClick={this.openPassword}>
                                                CHANGE PASSWORD
                                                </button>
                                        </td>
                                        <td className="p-0">
                                            <div className={`collapse ${this.state.collapse}`}>
                                                <div className="card card-body">
                                                    <Input
                                                        label="Enter new password"
                                                        value={this.state.password}
                                                        onChange={this.handleChange}
                                                        name="password"
                                                        type="password"
                                                    />
                                                    <Input
                                                        label="Confirm new password"
                                                        value={this.state.confirm}
                                                        onChange={this.handleChange}
                                                        name="confirm"
                                                        type="password"
                                                    />
                                                    <FormBtn
                                                        disabled={!(this.state.password && this.state.password === this.state.confirm)}
                                                        onClick={this.openPassword}
                                                    >SAVE PASSWORD</FormBtn>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <FormBtn
                                disabled={!(this.state.first && this.state.last && this.state.email && this.state.location)}
                                onClick={this.handleFormSubmit}
                            >SAVE
                            </FormBtn>

                        </Col>
                    </Row>
                </Container>
                <BgImage />
            </div>
        )
    }
}

export default withAuth(Edit);