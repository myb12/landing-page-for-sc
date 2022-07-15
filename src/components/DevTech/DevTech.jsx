import React from 'react';
import './DevTech.css'
import php from '../../assets/dev-tech/php.png'
import css from '../../assets/dev-tech/css.png'
import html from '../../assets/dev-tech/html.png'
import js from '../../assets/dev-tech/js.png'
import code from '../../assets/dev-tech/code.png'
import SectionHeader from '../../shared/sectionHeader/SectionHeader';

const DevTech = () => {
    return (
        <div className='container dev-tech'>
            <SectionHeader center small title="Our Dev Technology" />
            <ul className="nav nav-pills mb-3 justify-content-between mt-5" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">Programming Languages
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">Frameworks
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                        aria-selected="false">Databases
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled"
                        aria-selected="false">Mobile Platforms
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane mt-5 pt-5 fade show active" id="pills-home" role="tabpanel"
                    aria-labelledby="pills-home-tab" tabIndex="0">
                    <div className={'d-flex justify-content-between flex-wrap'}>
                        <img src={php} alt="" />
                        <img src={js} alt="" />
                        <img src={code} alt="" />
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                    </div>
                </div>
                <div className="tab-pane mt-5 pt-5 fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabIndex="0">
                    <div className={'d-flex justify-content-between flex-wrap'}>
                        <img src={php} alt="" />
                        <img src={js} alt="" />
                        <img src={code} alt="" />
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                        <img src={code} alt="" />
                        <img src={js} alt="" />
                    </div>
                </div>
                <div className="tab-pane mt-5 pt-5 fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                    tabIndex="0">
                    <div className={'d-flex justify-content-between flex-wrap'}>
                        <img src={php} alt="" />
                        <img src={js} alt="" />
                        <img src={code} alt="" />
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                    </div>
                </div>
                <div className="tab-pane mt-5 pt-5 fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab"
                    tabIndex="0">
                    <div className='d-flex justify-content-between flex-wrap'>
                        <img src={js} alt="" />
                        <img src={code} alt="" />
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevTech;