import React from 'react';

const InfoCard = ({img,cardTitle,bgClass,cardPara}) => {
    return (
        <div className={` card lg:card-side bg-base-100 shadow-xl mx-4 ${bgClass}`}>
        <figure className="pl-4"><img src={img} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title text-white">{cardTitle}</h2>
          <p className="text-white">{cardPara}</p>
          
        </div>
      </div>
    );
};

export default InfoCard;