import React from 'react';
import useCosmetics from '../../hooks/useCosmetics';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Home.css';

const Home = () => {
    const [cosmetics, setCosmetics] = useCosmetics();
    return (
        <div>
            <div className='home-container'>
            <div className="text-home">
                <h1>SITEWIDE* FRIENDS & FAMILY</h1>
                <p>SHOP THE BEST OF IT BY CATEGORY! <br /> BUILD YOUR ROUTINE + SAVE!</p>
            <div className='live-button'><button className='live-demo'>Live demo</button></div>
            </div>
            <div className="image-home">
                <img src="https://www.beautycrew.com.au/media/37306/dior1-l.jpg" alt="" />
            </div>
        </div>
        <div>
            <h2>Customer Reviews</h2>
            <div className='cosmetic-review'>
                {
                    cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                    ></Cosmetic>)
                }
            </div>
            <div>
                <button>See All Reviews</button>
            </div>
        </div>
        </div>
    );
};

export default Home;