import React from 'react';

const Service = ({service}) => {
    const {name,_id,picture,description} = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;