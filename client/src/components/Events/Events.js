import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../Form";
import Jumbotron from "../../components/Jumbotron";
import { BackBtn } from "../UI/BackBtn";
import { BgImage } from "../Main";
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
        this.setState({ loading: true })
        API.getEvent(eventType, location)
            .then(res => {
                this.setState({
                    result: res.data.events.event,
                    loading: false
                })
            })
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
            <div className="events">
                <Container fluid>
                    <BackBtn />

                    <div className="card weather-title text-center p-4">
                        <h1 className="card-title pl-4"><strong>Search for events near you!</strong></h1>
                        <div className="card-body">
                            <form className="w-100">
                                <Input
                                    value={this.state.search}
                                    onChange={this.handleInputChange}
                                    name="search"
                                    type="text"
                                    placeholder="Search for an event"
                                    fullwidth="input-full"
                                />
                                <Input
                                    value={this.state.location}
                                    onChange={this.handleInputChange}
                                    name="location"
                                    type="text"
                                    placeholder="Enter City"
                                    fullwidth="input-full"
                                />
                                <FormBtn
                                    onClick={this.handleFormSubmit}
                                >Search</FormBtn>
                            </form>

                        </div>
                    </div>
                    <Row classes="justify-content-center profile-row">
                        <Col size="sm-12" spacing="text-center bg-light">
                            {this.state.loading ? <img src="/assets/img/loading-icon.gif" alt="loadingimg" className="loading" /> : ''}
                        </Col>
                        {this.state.result.reverse().map(event => (
                            <Col size="sm-12 md-10 lg-9" spacing="text-center pt-4">
                                <div className="card text-center " key={event.id}>
                                    <div className="card-header">{event.title}</div>

                                    <div className="card-body d-flex justify-content-center px-5">
                                        {event.image ? <img src={event.image.medium.url} className="img-fluid mr-2" alt="img"></img> : ''}
                                        <p className="card-text">{event.description ? <div dangerouslySetInnerHTML={{ __html: event.description }} /> : `No description found.`}</p>
                                    </div>
                                    <div className="card-footer p-0">
                                        {event.url ? <a href={event.url} className="btn btn-info btn-block" target="_blank">Link to page</a> : <p>No link found.</p>}
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <BgImage />
            </div>
        )
    }
};

export default withAuth(Events);