import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryBtn from '../../Shared/Navbar/PrimaryBtn';
import './ServicesDescribe.css'
const ServicesDescribe = () => {
    return (
        <div className='w-full '>
            <div className=" service-content card lg:card-side bg-base-100 shadow-xl my-12">
            <figure><img className='' src={treatment} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl">Exceptional Dental Care,</h2>
                <h2 className="card-title text-4xl"> on Your Terms</h2>
                <p>Everyone needs to go to the dentist and we understand that you have choices when it comes to choosing your healthcare providers. We are proud to offer our neighbors in downtown Seattle’s First Hill, Pike Place Market, Pike/Pine, and Belltown neighborhoods, exceptional dental care in an environment that makes every patient feel welcome, at home, and comfortable.</p>
                <div className="card-actions justify-end">
                   <PrimaryBtn>Get started</PrimaryBtn>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ServicesDescribe;