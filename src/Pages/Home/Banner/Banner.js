import React from 'react';
import chair from '../../../assets/images/chair.png'
import PrimaryBtn from '../../Shared/Navbar/PrimaryBtn';
import './Banner.css'
const Banner = () => {
    return (

        <div className='bannerImg mt-20' >
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold uppercase">Box Office News!</h1>
                        <p className="py-6 text-base ">The Chamber of Physicians and Dentists together with the regional chambers of physicians and dentists are the organizational bodies of the professional self-government of physicians and dental practitioners who are associated in the chambers with equal status.</p>
                       <PrimaryBtn>Get Started</PrimaryBtn>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;