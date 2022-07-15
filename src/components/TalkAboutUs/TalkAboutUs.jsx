import React from 'react';
import MainImage from '../../assets/talk-about-us/talk-about-us-image.png';
import SectionHeader from '../../shared/sectionHeader/SectionHeader';
import './TalkAboutUs.css';
import TalkAboutUsCard from './TalkAboutUsCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const TalkAboutUs = () => {
    const talkAboutUsData = [
        {
            id: 1,
            name: 'Shuvo Roy',
            designation: 'Softcent Co-Founder',
            image: 'https://i.ibb.co/stnF4hX/people1.png',
            text: 'We had a bit of a slow and bumpy start, but after changing the designer on their side everything went in a very good direction. The designers were talented and easy to work with.',
        },
        {
            id: 2,
            name: 'Suzanne',
            designation: 'CEO',
            image: 'https://i.ibb.co/BtpyHWc/author-2.jpg',
            text: 'It is a distinct pleasure for me to recommend Softcent to any and all interested parties. They have been professional, comprehensive and competent throughout the process of our working together.',
        },
        {
            id: 3,
            name: 'Regina Miles',
            designation: 'Marketing Head',
            image: 'https://i.ibb.co/vB0t6Wy/author-3.jpg',
            text: 'I would highly recommend Softcent. They are great to work with. The traffic to our website has increased thanks to their SEO program.',
        },

    ]
    return (
        <div className='container talk-about-us'>
            <SectionHeader center small title="Talk About Us" />
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                        {
                            talkAboutUsData.map((el, i) => <SwiperSlide key={i}>
                                <TalkAboutUsCard testimonial={el} />
                            </SwiperSlide>)
                        }

                    </Swiper>

                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src={MainImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TalkAboutUs;