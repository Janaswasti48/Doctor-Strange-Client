import React from 'react';


const Booking = ({ booking, setTreatment }) => {
    const { name, slots } = booking;
    return (

        <div class="card lg:max-w-lg  bg-base-100 shadow-xl ">
            <div class="card-body">
                <h2 class="card-title text-secondary text-2xl mx-auto font-semibold ">{name}</h2>
                <p className='mx-auto'>{
                    slots.length ?
                        <span>Available Slot:{slots[0]}</span>
                        :
                        <span className='text-red-700'>All Stots are Booked</span>
                }</p>
                <p className='mx-auto text-xl fond-semibold'>{slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available</p>
                <div class="card-actions justify-end">
       
                    <label for="booking-modal"
                        onClick={() => setTreatment(booking)}
                        disabled={slots.length === 0}
                        class="btn btn-sm my-5 bg-gradient-to-r from-primary to-secondary border-0 text-white mx-auto">Book Appointment
                    </label>


                </div>
            </div>
        </div>

    );
};

export default Booking;