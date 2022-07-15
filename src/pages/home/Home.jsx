import React from 'react';
import Banner from '../../components/banner/Banner';
import Customer from '../../components/customers/Customers';
import Portfolios from '../../components/portfolio/Portfolios';
import WhatWeDo from '../../components/whatWeDo/WhatWeDo';
import Header from '../../shared/Header/Header';
import OurProducts from "../../components/OurProducts/OurProducts";
import PricingPlan from "../../components/PricingPlan/PricingPlan";
import DesignTech from "../../components/DesignTech/DesignTech";
import TalkAboutUs from '../../components/TalkAboutUs/TalkAboutUs';
import Footer from '../../shared/Footer/Footer';
import WorkFlow from '../../components/WorkFlow/WorkFlow';
import DevTech from '../../components/DevTech/DevTech';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Customer />
            <WhatWeDo />
            <OurProducts />
            <PricingPlan />
            <TalkAboutUs />
            <Portfolios />
            <DevTech />
            <DesignTech />
            <WorkFlow />
            <Footer />
        </div>
    );
};

export default Home;