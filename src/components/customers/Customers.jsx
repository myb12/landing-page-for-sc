import React from 'react';
import SectionHeader from '../../shared/sectionHeader/SectionHeader';
import './Customers.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";

const Customer = () => {

    const customersLogo = [
        'https://i.ibb.co/92f8PLT/customer-1.png',
        'https://i.ibb.co/cgFqr2w/customer-2.png',
        'https://i.ibb.co/PDVddF2/customer-3.png',
        'https://i.ibb.co/fVgcfJ8/customer-4.png',
        'https://i.ibb.co/92f8PLT/customer-1.png',
        'https://i.ibb.co/cgFqr2w/customer-2.png',
        'https://i.ibb.co/PDVddF2/customer-3.png',
        'https://i.ibb.co/fVgcfJ8/customer-4.png',
    ]

    return (
        <div className='customers-wrapper container'>
            <SectionHeader small center title="Our Customers" />

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {
                    customersLogo.map((el, i) => <SwiperSlide key={i}>
                        <img src={el} alt="" className='img-fluid' />
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Customer;