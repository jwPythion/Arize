import React from "react";
import './BgImage.css';

var divStyle = {
    backgroundImage: `url('/assets/img/bg${Math.floor(Math.random() * 29) + 1}.jpg')`,
    backgroundPosition: "top center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundOrigin: "padding-box",
    backgroundClip: "content-box",
    backgroundColor:"#000"
};

export const BgImage = ({ani}) => (

    <div className={`bg-image ${ani}`}>
        <div style={divStyle}></div>
    </div>
);