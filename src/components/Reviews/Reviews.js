import React from 'react';
import useCosmetics from '../../hooks/useCosmetics';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Reviews.css';

const Reviews = () => {
    const [cosmetics, setCosmetics] = useCosmetics();
    return (
        <div className='review-container'>
            <div className='cosmetic-review'>
                {
                    cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                    ></Cosmetic>)
                }
            </div>
        </div>
    );
};

export default Reviews;