import React from 'react';
import './DesignTech.css'
import SectionHeader from "../../shared/sectionHeader/SectionHeader";
import figma from '../../assets/design-tech/figma.png'
import illustrator from '../../assets/design-tech/illustrator.png'
import indesign from '../../assets/design-tech/indesign.png'
import xd from '../../assets/design-tech/xd.png'
import photoshop from '../../assets/design-tech/photoshop.png'

const DesignTech = () => {
    return (
        <div className={'container'}>
            <SectionHeader
            big
            center
            title={'Our Design Technology'}
            />
            <div className={'d-flex justify-content-between'}>
                <img src={figma} alt=""/>
                <img src={indesign} alt=""/>
                <img src={xd} alt=""/>
                <img src={photoshop} alt=""/>
                <img src={illustrator} alt=""/>
            </div>
        </div>
    );
};

export default DesignTech;