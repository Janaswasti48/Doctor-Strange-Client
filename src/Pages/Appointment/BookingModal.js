import React from 'react';
import { format } from 'date-fns';
const BookingModal = ({ treatment, date, setTreatment }) => {
    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value;
        setTreatment(null)
        console.log(slot);
    }
    const { name, slots } = treatment;
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle mx-auto">
                <div class="modal-box ">
                    <h3 class="font-bold  text-center text-2xl text-secondary">Booking For: {name}</h3>
                    <form onSubmit={handleBooking} className='my-5 grid grid-cols-1 justify-items-center mx-auto'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs my-2" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" placeholder="Name" class="input input-bordered w-full max-w-xs my-2" />
                        <input type="text" placeholder="Phone Number" class="input input-bordered w-full max-w-xs my-2" />
                        <input type="text" placeholder="Email" class="input input-bordered w-full max-w-xs my-2" />
                        <input type="submit" value="Submit" class="btn btn-secondary text-white w-full max-w-xs my-2" />
                    </form>
                    <div class="modal-action">
                        <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;