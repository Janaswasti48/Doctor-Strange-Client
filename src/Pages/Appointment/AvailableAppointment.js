import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Booking from './Booking';
import BookingModal from './BookingModal';

const AvailableAppointment = ({date}) => {
    const [bookings,setBookings] = useState([]);
    const  [treatment,setTreatment] = useState(null);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setBookings(data))
    },[])
    return (
        <div>
            <p className='text-secondary underline text-center my-3 font-semibold text-xl'>Available Appointment on {format( date, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12'>
                {
                    bookings.map(booking => <Booking
                    key={booking._id}
                    booking = {booking}
                    setTreatment={setTreatment}
                    ></Booking>)
                }
            </div>
        {treatment && <BookingModal
         date={date}
         treatment={treatment}
         setTreatment ={setTreatment}
         ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;