import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import "./Events.css";

class Events extends Component {

    state = {
        result: [],
        search: "",
        location: ""
    };

    searchEvents = (eventType, location) => {
        API.getEvent(eventType, location)
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
        this.searchEvents(this.state.search, this.state.location);
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
                                <label htmlFor="search" className="label">Search for an event:</label>
                                <input
                                    onChange={this.handleInputChange}
                                    value={this.state.search}
                                    name="search"
                                    type="text"
                                    className="form-control"
                                    placeholder="Search for an event"
                                    id="search"
                                />
                                <br />
                                <label htmlFor="location" className="label">Where are you?</label>
                                <input
                                    onChange={this.handleInputChange}
                                    value={this.state.location}
                                    name="location"
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter location here"
                                    id="search"
                                />
                                <br />
                                <button
                                    onClick={this.handleFormSubmit}
                                    className="btn btn-light"
                                >Search</button>
                            </div>
                        </form>

                    </Col>
                </Row>
                <Row>
                    {this.state.result.map(event => {
                        return (<div className="card text-center">
                            <div className="card-header">
                                <h2 key={event.id}>{event.title}</h2>
                            </div>
                            <div className="card-body">
                                <Col size="md-4">
                                <div className="right">
                                    {event.image ? <img src={event.image.medium.url} alt="img"></img> : <p></p>}
                                    </div>
                                </Col>
                                <Col size="md-8">
                                <div className="left">
                                    {event.description ? <p> Description: {event.description}</p> : <p>No description found.</p>}
                                    {event.url ? <a href={event.url} target="_blank"> Link to page</a> : <p>No link found.</p>}
                                    </div>
                                </Col>
                            </div>
                        </div>)
                    })}
                </Row>
            </Container>
        )
    }
};

export default Events;