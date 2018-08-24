import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { BackBtn } from "../UI/BackBtn";
import API from "../../utils/API";
import withAuth from "../withAuth";
import "./Events.css";

class Events extends Component {

    state = {
        result: [],
        search: "",
        location: "",
        loading: false
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
        this.setState({
            loading: true
        })
        setTimeout( () => {
            this.setState({
                loading: false
            })
        }, 3000)
    };

    render() {
        return (
            <div className="events">
            <Container fluid>
            <BackBtn/>
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
                                <div className="loadingIcon">
                                   {this.state.loading ? <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loadingimg" className="loading"/> : <p></p>}
                                </div> 
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
            </div>
        )
    }
};

export default withAuth(Events);