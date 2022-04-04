import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {image, name, review, rating} = props.cosmetic;
    return (
        <div className='c-osmetic'>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p>Rating: {rating}</p>
            <p>Review: {review}</p>
        </div>
    );
};

export default Cosmetic;