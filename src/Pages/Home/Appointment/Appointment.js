import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import background from '../../../assets/images/appointment.png'
import PrimaryBtn from '../../Shared/Navbar/PrimaryBtn';
const Appointment = () => {
    return (
        <section style={
            {background: `url(${background})`,}
        } className='flex justify-center items-center mt-52 rounded-xl'>
            <div className='flex-1'>
                <img className='mt-[-135px] ' src= {doctor}alt="" />
                {/* hidden lg:block */}
            </div>
            <div className='flex-1'>
                <h3 className='text-primary text-2xl font-bold '>Appointment</h3>
                <h1 className='my-5 text-4xl font-bold text-white'>Make Appointment</h1>
                <p className='text-white my-5'>Bonding is an effective treatment for most people with minor damage. If you have a broken or discolored tooth and want to know more about how tooth bonding can help repair your tooth, call our office today to schedule your appointment.</p>
<PrimaryBtn>Get Started</PrimaryBtn>
            </div>
        </section>
    );
};

export default Appointment;