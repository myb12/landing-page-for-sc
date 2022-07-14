import React from 'react';
import './Banner.css';
import BannerShape from '../../assets/images/banner-img.png'
import BannerImage from '../../assets/images/banner-image.png'
import BannerHeading from './BannerHeading';
import { BsFillPlayFill } from 'react-icons/bs';

const Banner = () => {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <BannerHeading>
                                Software services for startups withoutlimits..
                            </BannerHeading>
                            <p className='banner-paragraph'>
                                We believe that great design should not be out of reach, so our services are less than half the price of a full-time designer.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img src={BannerShape} alt="" className='banner-shape' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container banner-image-wrapper">
                <img className="banner-image" src={BannerImage} alt="" />
                <div className="play-btn-wrapper">
                    <div className="play-btn">
                        <div className="play-icon">
                            <BsFillPlayFill />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;