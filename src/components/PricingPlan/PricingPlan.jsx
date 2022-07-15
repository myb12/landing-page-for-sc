import React, { useState } from 'react';
import './PricingPlan.css'
import SectionHeader from "../../shared/sectionHeader/SectionHeader";
import ButtonPrimary from "../../shared/buttonPrimary/ButtonPrimary";

const PricingPlan = () => {
    const [yearly, setYearly] = useState(false);
    console.log('y', yearly)
    const cardData = [
        {
            title: "Merketing",
            monthlyPrice: "899",
            yearlyPrice: "9000",
            features: [
                'Dedicated Designer',
                'Unlimited requests',
                'Unlimited brand profiles',
                'Native source files',
                'Real-time collaboration',
                'Banner Ads',
                'Clothing & Merchandise Design',
                'Packaging & Label',
                'Logo & Brand Guide',
            ]
        },
        {
            title: "UI/UX Design",
            monthlyPrice: "1000",
            yearlyPrice: "11000",
            features: [
                'Dedicated Designer',
                'Unlimited requests',
                'Unlimited brand profiles',
                'Native source files',
                'Real-time collaboration',
                'Banner Ads',
                'Clothing & Merchandise Design',
                'Packaging & Label',
                'Logo & Brand Guide',
            ]
        },
        {
            title: "Development",
            monthlyPrice: "1000",
            yearlyPrice: "11500",
            features: [
                'Dedicated Designer',
                'Unlimited requests',
                'Unlimited brand profiles',
                'Native source files',
                'Real-time collaboration',
                'Banner Ads',
                'Clothing & Merchandise Design',
                'Packaging & Label',
                'Logo & Brand Guide',
            ]
        }
    ]
    return (
        <div className='container pricing-plan'>
            <SectionHeader
                center
                small
                title={'Pricing Package Choose Your Plan'}
                subtitle={`We believe that great design should not be out of reach, so our services are less than half the price of a full-time designer.`}
            />
            <div className={'d-flex justify-content-center'}>
                <span onClick={() => setYearly(false)} className='me-4'>
                    <ButtonPrimary title={'Monthly'} variant='light' />
                </span>

                <span onClick={() => setYearly(true)} variant={yearly ? 'light' : ''}>
                    <ButtonPrimary title={'Yearly'} />
                </span>
            </div>
            <div className="row mt-4">
                {
                    cardData?.map((el, i) =>

                        <div className="col-lg-4" key={i}>
                            <div className="custom-card px-3">
                                <div className="d-flex justify-content-between">
                                    <SectionHeader
                                        pricingCard
                                        title={el.title}
                                    />
                                    <div className={'d-flex align-items-center'}>
                                        <SectionHeader
                                            price
                                            title={yearly ? el.yearlyPrice : el.monthlyPrice}
                                        />
                                        <h5>{yearly ? `/Y` : `/mo`}</h5>
                                    </div>
                                </div>
                                <div className={'features pb-4'}>
                                    {el.features.map((data, i) =>
                                        <p key={i}>{data}</p>
                                    )}
                                </div>
                                <div className={'text-center py-4'}>
                                    <button className={'btn pricing-card-btn w-75 py-3'}>{yearly ? el.yearlyPrice + `/Y` : el.monthlyPrice + `/mo`}</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PricingPlan;