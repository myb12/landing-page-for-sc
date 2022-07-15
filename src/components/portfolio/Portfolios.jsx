import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";
import SectionHeader from '../../shared/sectionHeader/SectionHeader';
import PortfolioCard from './PortfolioCard';

const Portfolios = () => {
    const portfolioData = [
        {
            id: 1,
            title: 'Color System Design',
            image: 'https://i.ibb.co/84zVHVg/Colory-Cover-1.png',
        },
        {
            id: 2,
            title: 'Logo Design',
            image: 'https://i.ibb.co/qsfPLRD/Colory-Cover-2.png',
        },
        {
            id: 3,
            title: 'UI/UX Design',
            image: 'https://i.ibb.co/1J3mQv1/Mockup-1.png',
        },
        {
            id: 4,
            title: 'Web Development',
            image: 'https://i.ibb.co/84zVHVg/Colory-Cover-1.png',
        },
        {
            id: 5,
            title: 'App Development',
            image: 'https://i.ibb.co/qsfPLRD/Colory-Cover-2.png',
        },
        {
            id: 6,
            title: 'Web Design',
            image: 'https://i.ibb.co/1J3mQv1/Mockup-1.png',
        },
    ]
    return (
        <div className='container portfolios'>
            <div className='heading-wrapper'>
                <SectionHeader small title="Our Portfolio" />
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                navigation={true}
                className="mySwiper mt-4"
            >
                {
                    portfolioData.map((el, i) => <SwiperSlide key={i}>
                        <PortfolioCard title={el.title} image={el.image} />
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Portfolios;