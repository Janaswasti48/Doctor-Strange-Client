import React from 'react';
import appointment from "../../../assets/images/appointment.png"
const Contact = () => {
    return (
        <section className='overflow-hidden' style={{ background: `url(${appointment})` }
        }>
            <h5 className='text-2xl text-primary font-bold mt-5 text-center '>Contact Us</h5>
            <h2 className='text-4xl text-white font-bold my-5 text-center'>Stay Connected With Us</h2>
            <div className='w-full'>
                <div className="card m-auto  max-w-sm justify-center content-center">
                    <div className="card-body">
                        <div className="form-control ">

                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <input type="text" placeholder="Subject" className="input input-bordered" />
                        </div>
                        <div className='form-control'>
                            <textarea className="textarea" placeholder="Your message"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contact;