import React from 'react';
import Banner from '../../components/banner/Banner';
import Customer from '../../components/customers/Customers';
import Portfolios from '../../components/portfolio/Portfolios';
import WhatWeDo from '../../components/whatWeDo/WhatWeDo';
import Header from '../../shared/header/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Customer />
            <WhatWeDo />
            <Portfolios />
        </div>
    );
};

export default Home;