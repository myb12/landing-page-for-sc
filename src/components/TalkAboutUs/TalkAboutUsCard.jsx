import React from 'react';
import Quote1 from '../../assets/talk-about-us/quote1.png';
import Quote2 from '../../assets/talk-about-us/quote2.png';

const TalkAboutUsCard = ({ testimonial }) => {
    const { name, designation, image, text } = testimonial;
    return (
        <div>
            <img src={Quote1} alt="" className='open-quote' />
            <span>{text}</span>
            <img src={Quote2} alt="" className='close-quote' />

            <div className="author">
                <img src={image} alt="" />
                <div>
                    <h2>{name}</h2>
                    <p>{designation}</p>
                </div>
            </div>
        </div>
    );
};

export default TalkAboutUsCard;