import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../../components/AuthService';
import withAuth from '../../components/withAuth';
import API from '../../utils/API';
import './Nav.css';

class Nav extends Component {
    constructor() {
        super();
        this.Auth = new AuthService();
    }

    state = {
        id: null,
        first: "",
        last: "",
        img: "",
        ani: "nav-fade"
    };

    componentDidMount() {
        API.getUser(this.props.user.id)
            .then(res => {
                this.setState({
                    id: res.data._id,
                    first: res.data.first,
                    last: res.data.last,
                    img: res.data.img
                })
            });
        if (sessionStorage.getItem('playIntro')) {
            this.setState({ ani: "" });
        }
    }

    logoutBtnHandler = evt => {
        evt.preventDefault();
        this.Auth.logout();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="mainNav">
                <nav className={`navbar navbar-light w-100 px-5 ${this.state.ani}`}>
                    <Link to={"/"}>
                        <a className="navbar-brand">
                            <i className="far fa-image"></i>
                        </a>
                    </Link>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown text-right">
                            <a className="nav-link navbar-brand dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {(this.state.img) ? <img src={this.state.img} className="profile-img img-thumbnail rounded-circle" alt="profile pic"/> :<i className="fas fa-cog"></i>}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item">Welcome {`${this.state.first} ${this.state.last}`}</a>
                                <div className="dropdown-divider"></div>
                                <Link to={"/profile"}>
                                    <button className="btn btn-info btn-block mb-2">Visit Profile Page</button>
                                </Link>
                                <button className="btn btn-warning btn-block" onClick={this.logoutBtnHandler}>LOG OUT</button>
                            </div>
                        </li>
                    </ul>
                </nav >
            </div>
        )
    }
}


export default withAuth(Nav);