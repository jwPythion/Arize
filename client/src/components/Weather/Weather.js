import React, { Component } from "react";
import "./Weather.css";

class Weather extends Component {

    state = {
        city: ""
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
                    <div className="jumbotron" />
                    <div id="forecast" className="row" />
                </div>
            </div>
        )
    }
}




export default Weather; 