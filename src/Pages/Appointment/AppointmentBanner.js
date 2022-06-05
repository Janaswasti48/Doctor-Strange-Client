import React, { useState } from 'react';
import chair from "../../assets/images/chair.png"
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({ date, setDate }) => {

    // let footer;
    // if (date) {
    //      footer = <p className='text-secondary underline my-3 font-semibold text-xl'>You picked {format( date, 'PP')}.</p>;
    //   }
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse w-80 gap-40">
                <div>
                    <img src={chair} class="max-w-lg rounded-lg shadow-2xl" alt='DentalChair' />
                </div>
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    // footer = {footer}
                    />

                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;