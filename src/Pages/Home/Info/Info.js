import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <InfoCard cardPara = "24/7" cardTitle = "Opening Hours" bgClass = "bg-gradient-to-r from-primary to-secondary"  img={clock}></InfoCard>
            <InfoCard cardPara = "Block-175#,Avenue-09,Oslo,Canada" cardTitle = "Our Location"  bgClass = "bg-accent" img={marker}></InfoCard>
            <InfoCard cardPara = "783425610" cardTitle = "Contact Us" bgClass = "bg-gradient-to-r from-secondary to-primary"  img={phone}></InfoCard>
            
        </div>

    );
};

export default Info;