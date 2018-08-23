import React from 'react';

export const IndexBtn = props => (
    <button className={`btn btn-${props.color} hvr-ripple-out mx-2`}>
        <img className="img-fluid" src={`/assets/img/${props.img}`} alt={`${props.alt} button`} />
    </button>
);