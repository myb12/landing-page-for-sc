import React from 'react';
import './SectionHeader.css'
import bigImage from '../../assets/head-section/big.png'
import smallImage from '../../assets/head-section/small.png'

const SectionHeader = ({ big, small, center, title, pricingCard, subtitle, smallFont }) => {
    return (
        <div className={`${center ? "align-items-center" : "align-items-start"} d-flex flex-column my-3`}>
            <h2 className={`head-section-title mb-0 ${pricingCard && 'pricing'} ${smallFont && 'small'}`}>
                {title}
            </h2>
            {
                (big || small) &&
                <img src={big ? bigImage : smallImage} alt="" className={'img-fluid'} />
            }
            {
                subtitle &&
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <p className={`${center ? "text-center" : ""}`}>{subtitle}</p>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            }
        </div>
    );
};

export default SectionHeader;