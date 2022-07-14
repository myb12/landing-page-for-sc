import React from 'react';
import SectionHeader from '../../shared/sectionHeader/SectionHeader';

const Customer = () => {
    return (
        <div className='customers-wrapper container'>
            <SectionHeader
                small
                center
                title="Our Customers"
                subtitle={``}
                className={'img-fluid'} />
        </div>
    );
};

export default Customer;