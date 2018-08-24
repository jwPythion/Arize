import React, { Component } from "react";
import API from "../../utils/API";
import withAuth from '../withAuth';
import {Container} from '../';
import "./Weather.css";

class Weather extends Component {

    state = {
        city: "San Diego",
        title: "",
        forecast: []
    }

    componentDidMount() {
        API.getUser(this.props.user.id).then(res => {
            this.setState({
                city: res.data.location,
            })
            this.getWeather();
        });
    }

    getWeather = () => {
        API.getWeatherFromYahoo(this.state.city)
            .then(res => {
                let title = res.data.query.results.channel.item.title;
                let forecast = res.data.query.results.channel.item.forecast;
                this.setState({
                    title: title,
                    forecast: forecast
                });
            }).catch(err => console.log(err));
    }

    handleFormInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.getWeather();
    }

    render() {
        return (
            <div className="weatherMod">
                <div>
                    <h1>Weather Module</h1>
                    <nav className="navbar navbar-default d-flex justify-content-end w-100 mt-5 mr-5" id="modForm">
                        <form className="form-inline"
                            role="search"
                            onSubmit={this.handleFormSubmit}
                        >
                            <div className="form-group">
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter City"
                                    value={this.state.city}
                                    onChange={this.handleFormInput}
                                />
                            </div>
                            <button type="submit" className="btn btn-default">
                                Get Forecast
                                </button>
                        </form>

                    </nav>
                    <div className="container">
                        <div className="jumbotron">
                            <h2>{this.state.title}</h2>
                            <div className="row">
                                {this.state.forecast.map(item => (
                                    <div className="col-md-4 forecast-card">
                                        <p>{item.day}, {item.date}</p>
                                        <p>{item.text}</p>
                                        <p>High: {item.high}</p>
                                        <p>Low: {item.low}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>)
    }
}




export default withAuth(Weather); 