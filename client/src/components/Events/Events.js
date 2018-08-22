import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Events extends Component {

    state = {
        result: [],
        search: ""
    };

    searchEvents = (eventType) => {
        API.getEvent(eventType)
        
            .then(res => this.setState({ result: res.data.events.event }))
            .catch(err => console.log(err));
            
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEvents(this.state.search);
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Search for events near you!</h1>
                        </Jumbotron>

                        <form>
                            <div className="form-group">
                                <label htmlFor="search">Search:</label>
                                <input
                                    onChange={this.handleInputChange}
                                    value={this.state.search}
                                    name="search"
                                    type="text"
                                    className="form-control"
                                    placeholder="Search For an Event"
                                    id="search"
                                />
                                <br />
                                <button
                                    onClick={this.handleFormSubmit}
                                    className="btn btn-primary"
                                >Search</button>
                            </div>
                        </form>

                    </Col>
                </Row>
                <Row>
                        {this.state.result.map(event => {
                           return( <div className="card text-center">
                            <div className="card-header">
                           <h2 key={event.id}>{event.title}</h2>
                            <div className="card-body">{event.description}</div> 
                          </div>
                        </div> )})}
                </Row>
            </Container>
        )
    }
};

export default Events;