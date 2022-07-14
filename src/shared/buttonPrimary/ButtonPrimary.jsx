import React from 'react';
import './ButtonPrimary.css'

const ButtonPrimary = ({ title }) => {
    return (
        <button className='btn button-primary'>
            {title}
        </button>
    );
};

export default ButtonPrimary;