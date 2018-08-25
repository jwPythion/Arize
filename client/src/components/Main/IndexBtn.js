import React from 'react';
import './IndexBtn.css';

export const IndexBtn = props => (
    // <button className={`btn btn-${props.color} hvr-ripple-out mx-2`}>
    //     <img className="img-fluid" src={`/assets/img/${props.img}`} alt={`${props.alt} button`} />
    // </button>
    <div className="indexBtn">
        <div className={`pic-container btn btn-${props.color} hvr-ripple-out mx-2`}>
            <img className={`img-fluid ${(props.circle) ? 'rounded-circle' : ''}`} src={`/assets/img/${props.img}`} alt={`${props.alt} button`} />
            <div className={`overlay overlay-${props.color} ${(props.circle) ? 'circle' : ''}`}>
                <div className="text">
                    {props.children}
                </div>
            </div>
        </div>
    </div>
);