import React from 'react';
import './WhatWeDo.css'
import branding from '../../assets/what-we-do/branding.png'
import ux from '../../assets/what-we-do/UX.png'
import dev from '../../assets/what-we-do/dev.png'
import SectionHeader from '../../shared/sectionHeader/SectionHeader';

const WhatWeDo = () => {

    const brandingData = [
        'Brand Strategy',
        'Social media',
        'Marketing Assets',
        'Presentations',
        'Build MVP Version',
        'Pitch Deck'
    ];
    const uxData = [
        'User Interface',
        'User Experience',
        'Design System',
        'Wireframe',
        'Prototype',
        'Website & Mobile App',
        'IOS + Android',
    ];
    const devData = [
        'Front End (HTML, CSS, React)',
        'Backend (Node.js, MongoDB)',
        'iOS (Swift)',
        'Android (Kotlin, Flutter)',
        'Blockchain Development (NFT)',
    ];
    return (
        <div style={{ backgroundImage: `url(${require('../../assets/what-we-do/What-we-do-bg.png')})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
            <div className={'container py-5'}>

                <SectionHeader
                    big={false}
                    small={true}
                    center={false}
                    pricingCard={false}
                    title={"What We Do"}
                    subtitle={``}
                    className={'img-fluid'} />
                <div className="row mt-3">
                    <div className="col-lg-4">
                        <div className="heading d-flex align-items-center">
                            <img src={branding} alt="" className="me-2" />
                            <SectionHeader
                                big={false}
                                small={false}
                                center={false}
                                pricingCard={false}
                                smallFont={true}
                                title={"Branding"}
                                subtitle={``}
                                className={'img-fluid'} />
                        </div>
                        <div className={'mt-3'}>
                            {
                                brandingData?.map((data, i) =>
                                    <p key={i} className={'fw-bold'}>{data}</p>
                                )
                            }
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="heading d-flex align-items-center">
                            <img src={ux} alt="" className="me-2" />
                            <SectionHeader
                                smallFont={true}
                                title={`UI/UX Design`}
                                subtitle={``}
                                className={'img-fluid'} />
                        </div>
                        <div className={'mt-3'}>
                            {
                                uxData?.map((data, i) =>
                                    <p key={i} className={'fw-bold'}>{data}</p>
                                )
                            }
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="heading d-flex align-items-center">
                            <img src={dev} alt="" className="me-2" />
                            <SectionHeader
                                smallFont={true}
                                title={"Development"}
                                subtitle={``}
                                className={'img-fluid'} />
                        </div>
                        <div className={'mt-3'}>
                            {
                                devData?.map((data, i) =>
                                    <p key={i} className={'fw-bold'}>{data}</p>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhatWeDo;