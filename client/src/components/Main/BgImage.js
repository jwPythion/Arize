import React from "react";
import './BgImage.css';

var rnd;
if (sessionStorage.getItem('bgImg')) {
    rnd = sessionStorage.getItem('bgImg');
} else {
    rnd = Math.floor(Math.random() * 29) + 1;
    sessionStorage.setItem('bgImg', rnd);
}

var divStyle = {
    backgroundImage: `url('/assets/img/bg${rnd}.jpg')`,
    backgroundPosition: "top center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundOrigin: "padding-box",
    backgroundClip: "content-box",
    backgroundColor: "#000"
};

export const BgImage = ({ ani }) => (

    <div className={`bg-image ${ani}`}>
        <div style={divStyle}></div>
    </div>
);