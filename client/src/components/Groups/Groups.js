import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, FormBtn } from '../Form';
import { Container, Row, Col } from '../Grid';
import { BgImage } from '../Main';
import { BackBtn } from '../UI';
import API from '../../utils/API';
import withAuth from "../withAuth";

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
            <Row>
            <Col size="lg-7 xl-6" spacing="text-center p-4"><strong>Groups you are a part of:</strong><br/><br/>
                            {this.state.groups.map(group => {
                                return( <table className="table">
                                <tbody>
                                    <tr>
                                        <th scope="row">Group name:</th>
                                        <td>{group.name}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Group description:</th>
                                        <td>{group.description}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Users in this group:</th>
                                        <td>{group.users.name}</td>
                                    </tr>
                                </tbody>
                            </table>)
                            })}
                        </Col>
<form className="profile-row bg-light p-5"> Create a new group!<br/><br/>
            <Input
              value={this.state.name}
              onChange={this.handleInputChange}
              name="name"
              label="Group Name:"
              type="text"
              placeholder="Group"
            />
            <Input
              value={this.state.description}
              onChange={this.handleInputChange}
              name="description"
              label="Description of the group:"
              type="text"
              placeholder="Group Description"
            />
             <FormBtn
              onClick={this.handleFormSubmit}
            >
              Submit
              </FormBtn>
              </form>
              </Row>
              </ Container>
            </div>
        )
    }
}

export default withAuth(Groups);