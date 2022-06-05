import React from 'react';

const Testimonial = ({ testimonial }) => {
    const { picture, name, comment, location } = testimonial;
    return (
        // <div>
        //     <p>{comment}</p>
        //     <div className=''>
        //         <img src={picture} alt=""/>

        //     </div>
        //     <div className=''>
        //         <h2>{name}</h2>
        //         <p>{location}</p>
        //     </div>
        // </div>
        <div className="card lg:max-w-lg bg-base-100 shadow-xl gap-4">

            <div className="card-body items-center text-center">

                <p className=''>{comment}</p>
                <div className='flex justify-center items-center '>
                    <div className=''>
                        <figure className="px-10 pt-10">
                            <img src={picture} alt="Shoes" className="rounded-xl" />
                        </figure>
                    </div>
                    <div>
                        <h2 className="card-title text-xl">{name}</h2>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;