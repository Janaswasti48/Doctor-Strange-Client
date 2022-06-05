import React from 'react';
import people1 from "../../../assets/images/people1.png"
import people2 from "../../../assets/images/people2.png"
import people3 from "../../../assets/images/people3.png"
import quote from "../../../assets/icons/quote.svg"
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const testimonials = [
        {
            _id: 1,
            name: "Winson Harry",
            picture: people1,
            location: "California",
            comment: "Sports injuries like joint sprain, ligament tear,muscles injury, dislocation so on can be treat once diagnosed through oral medication, topical medications, physiotherapy or minimally-invasive surgery."
        },
        {
            _id: 1,
            name: "Hena Baker",
            picture: people2,
            location: "Oslo",
            comment: "Age related orthopaedic conditions such as knee osteoarthritis and hip osteoarthritis frequently decreases the ability to remain mobile, cause discomfort and reduces the ability to lead a quality lifestyle."
        },
        {
            _id: 1,
            name: "Lisa Walkar",
            picture: people3,
            location: "Gorgia",
            comment: "Spinal issues include neck pain, upper back pain, low back pain or neurological issues affecting the upper or lower limbs (nerve impingement at the spine)."
        },
    ]
    return (
        <div className='my-40'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-primary text-2xl font-bold'>Testimonial</h2>
                    <h1 className=' text-4xl font-bold'>What Our Patients Says</h1>
                </div>
                <div className=''>
                    <img className='lg:w-48 w-24' src={quote} alt="" />
                </div>
            </div>

            <div className=' sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12'>
                {
                    testimonials.map(testimonial => <Testimonial
                        key={testimonial._id}
                        testimonial={testimonial}
                    ></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;