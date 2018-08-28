import React, { Component } from 'react';
import { Input, FormBtn } from '../Form';
import { Container, Row, Col } from '../Grid';
import { BgImage } from '../Main';
import { BackBtn } from '../UI';
import API from '../../utils/API';
import withAuth from "../withAuth";
import './Groups.css';

class Groups extends Component {

    state = {
        name: "",
        description: "",
        groups: []
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.createGroup(this.state.name, this.state.description, this.props.user.id)
            .then(res => {
                console.log(res.data);
                window.location.reload('/groups');
            })
            .catch(err => alert(err));
    };

    componentDidMount() {
        console.log(this.props);
        API.getGroup(this.props.user.id).then(res => {

            console.log(res);
            this.setState({
                /*name: res.data.groups[0].name,
                description: res.data.groups[0].description,*/
                groups: res.data.groups
            })
        });
    }

    render() {
        return (
            <div className="groups">
                <Container fluid>
                    <BackBtn />

                    <div className="card weather-title text-center p-4">
                        <h1 className="card-title pl-4"><strong>Create a new group!</strong></h1>
                        <div className="card-body">
                            <form className="w-100">
                                <Input
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    name="name"
                                    type="text"
                                    placeholder="Group Name:"
                                    fullwidth="input-full"
                                />
                                <Input
                                    value={this.state.description}
                                    onChange={this.handleInputChange}
                                    name="description"
                                    type="text"
                                    placeholder="Group Description"
                                    fullwidth="input-full"
                                />
                                <FormBtn
                                    onClick={this.handleFormSubmit}
                                >Search</FormBtn>
                            </form>

                        </div>
                    </div>
                    <Row classes="justify-content-center profile-row">
                        <Col size="lg-7" spacing="text-center bg-light">
                            <strong>Groups you are a part of:</strong>
                        </Col>
                        <Col size="lg-7" spacing="text-center bg-light">
                            {this.state.groups.map(group => {
                                return (<table className="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Group name:</th>
                                            <td>{group.name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Group description:</th>
                                            <td>{group.description}</td>
                                        </tr>
                                    </tbody>
                                </table>)
                            })}
                        </Col>
                    </Row>



                </ Container>
                <BgImage />
            </div>
        )
    }
}

export default withAuth(Groups);