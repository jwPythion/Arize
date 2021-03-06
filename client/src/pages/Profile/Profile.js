import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../components/AuthService';
import withAuth from '../../components/withAuth';
import API from '../../utils/API';
import { Container, Row, Col } from '../../components/Grid';
import { BackBtn, Modal } from '../../components/UI';
import { BgImage } from '../../components/Main';
import './Profile.css';

class Profile extends Component {
    constructor() {
        super();
        this.Auth = new AuthService();
    }

    state = {
        id: "",
        email: "",
        first: "",
        last: "",
        location: "",
        img: ""
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
    }

    logoutBtnHandler = evt => {
        evt.preventDefault();
        this.Auth.logout();
        window.location.reload('/');
    }

    deleteUser = id => {
        this.Auth.logout();
        API.deleteUser(id)
            .then(res => window.location.reload('/'))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="profile">
                <Modal
                    id="deleteModal"
                    title="Confirm Account Delete"
                    btn="btn-danger"
                    btnText="DELETE"
                    btnHandler={() => this.deleteUser(this.state.id)}>
                    <p>Are you sure you want to delete your profile?</p>
                </Modal>
                <Container fluid>
                    <BackBtn />
                    <div className="card title-card p-4">
                        <h1 className="card-title pl-4"><strong>{`${this.state.first} ${this.state.last}`}</strong></h1>
                        <div className="card-body">
                            <Link to='/profile/edit'>
                                <button className="btn btn-outline-warning btn-lg mr-sm-2">EDIT</button>
                            </Link>
                            <button className="btn btn-outline-danger btn-lg mr-sm-2" data-toggle="modal" data-target="#deleteModal">DELETE</button>
                            <button className="btn btn-outline-info btn-lg mr-sm-2" onClick={this.logoutBtnHandler}>LOGOUT</button>
                        </div>
                    </div>
                    <Row classes="justify-content-center bg-light profile-row">
                        <Col size="lg-5 xl-3" spacing="text-center pt-4">
                            <img className="img-fluid rounded-circle mb-5" src={this.state.img} alt="profile pic" />
                        </Col>
                        <Col size="lg-7 xl-6" spacing="text-center p-4">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th scope="row">First Name:</th>
                                        <td>{this.state.first}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Last Name:</th>
                                        <td>{this.state.last}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Location:</th>
                                        <td>{this.state.location}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Email:</th>
                                        <td>{this.state.email}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Container>
                <BgImage />
            </div>
        )
    }
}

export default withAuth(Profile);