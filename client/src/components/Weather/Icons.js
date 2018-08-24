import React from 'react';
import Images from '../../weather-icons.json';

var findImage = val => {
    const img = Images.filter(element => element.name === val.toLowerCase());
    return img[0].icon;
}

export const Icon = props => (

    <img src={findImage(props.cast)} className="img-fluid" alt="weather icon" />
);

