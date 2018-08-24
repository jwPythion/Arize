import React, {Component} from "react";
import './Quote.css';
import quotes from '../../quotes.json';

const quote = quotes[Math.floor(Math.random() * quotes.length - 1) + 1];

class Quote extends Component {

    state = {
        classes: ""
    }
 
    componentDidMount() {
        setTimeout(
            function() {
                this.setState({classes: "d-none"});
            }
            .bind(this),
            15000
        );
    }

    render() {
        return (
            <div id="quote-overlay" className={this.state.classes}>

                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-md-9">

                        <div id="quote-container">
                            <div className="row justify-content-center">
                                <div className="col-9">
                                    <img src="/assets/img/border-top.png" alt="border-top" className="img-fluid" />
                                </div>
                                <div className="col-10 p-5">
                                    <p>{quote.quote}</p>
                                    <p className="text-right">– {quote.author}</p>
                                </div>
                                <div className="col-9">
                                    <img src="/assets/img/border-bot.png" alt="border-bottom" className="img-fluid" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>);
    }
}

export default Quote;