import React, { Component } from "react";
import "./Weather.css";
import API from "../../utils/API";

class Weather extends Component {

    state = {
        city: "",
        title: "",
        forecast: []
    }

    componentDidMount() {
        API.getWeatherFromYahoo("San Diego")
            .then(res => {
                // console.log(res.data.query.results.channel.item);
                let title = res.data.query.results.channel.item.title;
                let forecast = res.data.query.results.channel.item.forecast;

                // console.log(res.data.query.results.channel.item.description)
                this.setState({
                    title: title,
                    forecast: forecast
                });
                console.log(this.state);
                // console.log(this.state.forecastDescription);
            })
    }

    handleFormInput = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    getWeather = (event) => {
        event.preventDefault();
        console.log(this.state.city);
    }

    render() {
        return (
            <div>
                <h1>Retirement Environment Weather Environment</h1>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        </div>
                        <div
                        >
                            <form
                                className="navbar-form navbar-right"
                                role="search"
                                onSubmit={this.getWeather}
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
                        </div>
                    </div>
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
        )
    }
}




export default Weather; 