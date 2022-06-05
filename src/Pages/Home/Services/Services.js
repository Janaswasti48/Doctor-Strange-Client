import React from 'react';
import Service from '../Service/Service';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import ServicesDescribe from './ServicesDescribe';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "",
            picture: fluoride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "",
            picture: cavity
        },
        {
            _id: 3,
            name: "Teeth Whitening ",
            description: "",
            picture: whitening
        }
    ]

    return (
        <div className='my-28'>
            <div className='text-center my-4 text-xl font-bold uppercase'>
                <h6 className='text-2xl text-primary'>Our Service</h6>
                <h2 className='text-4xl my-4'>Services We Provide</h2>
            </div>
            <div className='sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12'>
                {
                    services.map(service =><Service
                    key={service._id}
                    service = {service}
                    ></Service>

                    )
                }
            </div>
            <div>
                <ServicesDescribe></ServicesDescribe>
            </div>
        </div>

    );
};

export default Services;