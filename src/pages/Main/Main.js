import React from "react";
import { BgImage, Container } from '../../components/Main';
import Quote from '../../components/Main/Quote';
import './Main.css';

const Main = () => (
  <div>
    <Quote />
    <Container>
      <h1 className="text-center py-5 mt-4">Main Index</h1>
      <a className="btn btn-danger hvr-ripple-out mx-2">Ripple Out</a>
      <a className="btn btn-warning hvr-ripple-out mx-2">Ripple Out</a>
      <a className="btn btn-primary hvr-ripple-out mx-2">Ripple Out</a>
      <a className="btn btn-success hvr-ripple-out mx-2">Ripple Out</a>

    </Container>
    <BgImage />
  </div>
);

export default Main;
