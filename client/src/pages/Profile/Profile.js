import React from 'react';
import { Container, Row, Col } from '../../components/Grid';
import { BackBtn } from '../../components/UI';
import { BgImage } from '../../components/Main';
import './Profile.css';

const Profile = () => (
    <div>
        <Container fluid>
            <BackBtn />
            <div className="card p-4">
                <h1 className="card-title pl-4"><strong>First Last</strong></h1>
                <div className="card-body">
                    <button className="btn btn-outline-warning btn-lg mr-sm-2">EDIT</button>
                    <button className="btn btn-outline-danger btn-lg mr-sm-2">DELETE</button>
                    <button className="btn btn-outline-info btn-lg mr-sm-2">EDIT LOGIN</button>
                </div>
            </div>
            <Row classes="justify-content-center bg-light profile-row">
                <Col size="lg-5 xl-3" spacing="text-center pt-4">
                    <img className="img-fluid rounded-circle mb-5" src="/assets/img/test-profile.jpg" alt="profile pic" />
                </Col>
                <Col size="lg-7 xl-6" spacing="text-center p-4">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th scope="row">First Name:</th>
                                <td>First</td>
                            </tr>
                            <tr>
                                <th scope="row">Last Name:</th>
                                <td>Last</td>
                            </tr>
                            <tr>
                                <th scope="row">Email:</th>
                                <td>test@test.com</td>
                            </tr>
                            <tr>
                                <th scope="row">Location:</th>
                                <td>test@test.com</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
        <BgImage />
    </div>
);

export default Profile;