import React from 'react';
import './ButtonPrimary.css';

// '#3088FF' : '#3088FF' : '#2D5BFF'

const ButtonPrimary = ({ title, variant }) => {
    return (
        <button
            className='btn button-primary'
            style={{ backgroundColor: variant === 'light' ? '#3088ff29' : variant === 'header' ? '#3088FF' : '#2D5BFF', color: variant === 'light' ? '#000' : '#fff' }}>
            {title}
        </button>
    );
};

export default ButtonPrimary;