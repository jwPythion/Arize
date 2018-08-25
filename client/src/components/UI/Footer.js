import React from "react";
import "./Footer.css";

var classes;
if (sessionStorage.getItem('bgImg')) {
  classes = "";
} else {
  classes = "footer-fade"
}

export const Footer = () => (
  <div>
    <p className={`footer ${classes}`}><i className="fas fa-copyright"></i> 2018 Arize</p>
    <footer className={`bg-dark text-light ${classes}`}></footer>
  </div>
);
