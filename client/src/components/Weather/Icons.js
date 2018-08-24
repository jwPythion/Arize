import React from 'react';
import Images from '../../weather-icons.json';

var findImage = val => {
    let img = Images.filter(element => element.name === val.toLowerCase());
    if (!img) img = Images.filter(element => element.name === "not found");
    return img[0].icon;
}

export const Icon = props => (
    <img src={findImage(props.cast)} className="img-fluid" alt="weather icon" />
);

