import React from 'react';
import './Portfolio.css';

const PortfolioCard = ({ title, image }) => {
    return (
        <div>
            <img src={image} alt="" className='portfolio-image' />
            <h4 className='portfolio-title'>
                {title}
            </h4>
        </div>
    );
};

export default PortfolioCard;