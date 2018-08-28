import React, { Component } from "react";
import "./Footer.css";


class Footer extends Component {

  state = {
    classes: "d-none"
  }

  componentDidMount() {

    setTimeout(function () {
      if (window.location.href.indexOf('welcome') === -1) {
        if (sessionStorage.getItem('playIntro'))
          this.setState({ classes: "" });
        else
          this.setState({ classes: "footer-fade" });
      }
    }
      .bind(this), 100);
  }

  render() {
    return (
      <div className={`arize-footer ${this.state.classes}`}>
        <p className="footer"><i className="fas fa-copyright"></i> 2018 Arize</p>
        <footer className="bg-dark text-light"></footer>
      </div>
    );
  }
}

export default Footer;

