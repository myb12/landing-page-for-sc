import React from 'react';
import './OurProducts.css'
import SectionHeader from "../../shared/sectionHeader/SectionHeader";
import ButtonPrimary from "../../shared/buttonPrimary/ButtonPrimary";
import product1 from '../../assets/products/product-1.png'
import product2 from '../../assets/products/product-2.png'

const OurProducts = () => {
    return (
        <div style={{ backgroundColor: "#F9F9F9" }}>
            <div className="container">
                <div className="row py-3">
                    <div className="col-lg-7">
                        <SectionHeader
                            ourProduct
                            small
                            title="Our Products"
                            subtitle={`We believe that great design should not be out of reach, so our services are less than half the price of a full-time designer.`}
                            className={'img-fluid'} />
                    </div>
                    <div className="col-lg-5 h-100 mt-auto  text-end">
                        <ButtonPrimary title='See More' />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 p-0">
                        <div className="p-5 bg-white h-100">
                            <SectionHeader
                                title="SwipeXYZ Product" />
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <ButtonPrimary title='View product' variant={'light'} />
                        </div>
                    </div>
                    <div className="col-lg-6 p-0">
                        <img src={product1} alt="" className={'img-fluid'} />
                    </div>
                    <div className="col-lg-6 p-0">
                        <img src={product2} alt="" className={'img-fluid'} />
                    </div>
                    <div className="col-lg-6 p-0">
                        <div className="p-5 bg-white h-100 py-auto">
                            <SectionHeader
                                title="Cashback Product" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <ButtonPrimary title='View product' variant={'light'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProducts;