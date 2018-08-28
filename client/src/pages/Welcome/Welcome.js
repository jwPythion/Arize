import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import AuthService from '../../components/AuthService';
import './Welcome.css';

let lastScrollY = 0;

class Welcome extends Component {

    constructor() {
        super();
        this.Auth = new AuthService
    }

    state = {
        classes: "is-preload",
        headclass: "alt"
    }

    componentDidMount() {
        if (this.Auth.loggedIn()) {
            this.props.history.replace('/');
            return;
        }

        setTimeout(function () {
            this.setState({ classes: "" });
        }
            .bind(this), 100);
        Events.scrollEvent.register('begin', function (to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function (to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
        window.removeEventListener('scroll', this.handleScroll);
    }

    scrollTo = () => {
        scroll.scrollTo(100);
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    }

    handleScroll = () => {
        lastScrollY = window.scrollY;
        if (lastScrollY > 500) {
            this.setState({ headclass: "title" });
        } else {
            this.setState({ headclass: "alt" });
        }
    }

    menuOpen = evt => {
        evt.preventDefault();
        this.setState({ classes: "is-menu-visible" });
    }

    menuClose = evt => {
        evt.preventDefault();
        this.setState({ classes: "" });
    }

    render() {
        return (
            <div className={`landing ${this.state.classes}`}>

                {/* <!-- Page Wrapper --> */}
                <div id="page-wrapper">

                    {/* <!-- Header --> */}
                    <header id="header" className={this.state.headclass}>
                        <h1><a onClick={this.scrollToTop}><img src="/assets/img/logo-white.png" className="h-100"/></a></h1>
                        <nav id="nav">
                            <ul>
                                <li className="special">
                                    <a className="menuToggle" onClick={this.menuOpen}><span>Menu</span></a>
                                    <div id="menu">
                                        <a className="close" onClick={this.menuClose}></a>
                                        <ul>
                                            <li><a href="/">Home</a></li>
                                            <li><a href="/signup">Sign Up</a></li>
                                            <li><a href="/login">Log In</a></li>
                                        </ul>

                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </header>

                    {/* <!-- Banner --> */}
                    <section id="banner">
                        <div className="inner">
                            <h2><img src="/assets/img/logo-white.png"/></h2>
                            <p>Connect to your community<br />
                                step into your world<br />
                                enjoy your life</p>
                            <ul className="actions special">
                                <li><a href="/signup" className="button primary">Sign Up</a></li>
                                <li><a href="/login" className="button fit">Log In</a></li>
                            </ul>
                        </div>
                        <Link to="one" spy={true} smooth={"easeInOutCubic"} duration={1500}>
                            <a className="more">Learn More</a>
                        </Link>

                    </section>

                    {/* <!-- One --> */}
                    <section id="one" className="wrapper style1 special">
                        <div className="inner">
                            <header className="major">
                                <h2>In our modern world it is sometimes <br />
                                difficult to connect</h2>
                                <p>What if there were an app that helped you to manage your life<br />
                                    and also helped to connect you to your community?  </p>
                            </header>
                            <ul className="icons major">
                                <li><span className="icon fa-sun major style1"><span className="label">Lorem</span></span></li>
                                <li><span className="icon fa-heart-o major style2"><span className="label">Ipsum</span></span></li>
                                <li><span className="icon fa-users major style3"><span className="label">Dolor</span></span></li>
                            </ul>
                        </div>
                    </section>

                    {/* <!-- Two --> */}
                    <section id="two" className="wrapper alt style2">
                        <section className="spotlight">
                            <div className="image"><img src="/assets/img/quote-page.jpg" alt="" /></div><div className="content">
                                <h2>Inspirational Quotes<br />
                                    & Stunning Backgrounds</h2>
                                <p>Arize app opens with a brand new inspirational quote and beautiful scenic backdrop every time you visit.  Creating a new experience every time.</p>
                            </div>
                        </section>
                        <section className="spotlight">
                            <div className="image"><img src="/assets/img/main-page.jpg" alt="" /></div><div className="content">
                                <h2>Intuitive UI<br />
                                    Exquisite UX</h2>
                                <p>Why should you need a tutorial just to use your app?  Arize is easy to navigate with large friendly buttons and an interface so simple anyone can use it.</p>
                            </div>
                        </section>
                        <section className="spotlight">
                            <div className="image"><img src="/assets/img/weather-page.jpg" alt="" /></div><div className="content">
                                <h2>Tools you can use<br />
                                    Activities you'll enjoy</h2>
                                <p>Tools like weather, to do list, and a Calendar.  Connection with groups and search for events in your area.  With Arize, you only get stuff you need.</p>
                            </div>
                        </section>
                    </section>

                    {/* <!-- Three --> */}
                    <section id="three" className="wrapper style3 special">
                        <div className="inner">
                            <header className="major">
                                <h2>Only the best tools with Arize</h2>
                                <p>Our developers put only the best tools into Arize to gain better<br />
                                    utility and user enjoyment.</p>
                            </header>
                            <ul className="features">
                                <li className="icon fa-sun">
                                    <h3>Weather</h3>
                                    <p>How can you get out in the world without knowing how to prepare?  Find out what's happening outside so you can put on your best and get out there!</p>
                                </li>
                                <li className="icon fa-calendar-alt">
                                    <h3>Calendar</h3>
                                    <p>Not sure what your day is like?  Who are you meeting?  What do you have planned?  Arize syncs to your calendar to keep you in the know about what's happening.</p>
                                </li>
                                <li className="icon fa-ticket-alt">
                                    <h3>Events</h3>
                                    <p>Want to get out but don't know what's going on?  Find out!  Search for Events happening near you!  Choose anything you like: movies, music, fairs, anything!</p>
                                </li>
                                <li className="icon fa-list-alt">
                                    <h3>To Do List</h3>
                                    <p>Have things to do?  Make a list!  Set up your to do list inside the app and get never lose track of things!</p>
                                </li>
                                <li className="icon fa-users">
                                    <h3>Groups</h3>
                                    <p>Want to meet people in your community?  Create a group based on your interest and meet others.  Or see what other groups near you have going on!</p>
                                </li>
                                <li className="icon fa-heart">
                                    <h3>Reminders <br/>*Coming Soon</h3>
                                    <p>Get reminded of events, or group activities near you with Reminders!</p>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* <!-- CTA --> */}
                    <section id="cta" className="wrapper style4">
                        <div className="inner">
                            <header>
                                <h2>Connect to your World</h2>
                                <p>Don't spend your life disconnected.  Sign up today to find out everything Arize has to offer.</p>
                            </header>
                            <ul className="actions stacked">
                                <li><a href="/signup" className="button fit primary">Sign Up</a></li>
                                <li><a href="#" className="button fit">Learn More</a></li>
                            </ul>
                        </div>
                    </section>


                    <footer id="footer">
                        <ul className="icons">
                            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                            <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
                            <li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                        </ul>
                        <ul className="copyright">
                            <li>&copy; Arize</li><li>Authors: Kimberly Cooper, Connor Hysham, Jaymes Johnson, Andia Katz</li>
                        </ul>
                    </footer>

                </div>
            </div>
        );
    }

}

export default Welcome;
