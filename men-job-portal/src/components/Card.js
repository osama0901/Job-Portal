import React from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi"

const Card = ({ data }) => {
  const {
    _id,
    companyName,
    companyLogo,
    minPrice,
    maxPrice,
    salarytype,
    jobLocation,
    employementType,
    jobPosting,
    description,
    jobTitle
  } = data;

  const truncateDescription = (description) => {
    if (!description) return '';
    return description.split(' ').slice(0, 30).join(' ');
  };

  return (
    <section className='card'>
      <Link to={`/jobdetails/${_id}`} className='flex gap-4 flex-col sm:flex-row item-start'>
        <img src={companyLogo} alt={companyName} className="w-12 h-12 object-contain" />
        <div>
          <h4 className='text-primary mb-1'>{companyName}</h4>
          <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>
          <div className='text-primary /70 text-base flex flex-wrap  gap-2 mb-2'>
            <span className='flex items-center gap-1'><FiMapPin /> {jobLocation}</span>
            <span className='flex items-center gap-1'><FiClock /> {employementType}</span>
            <span className='flex items-center gap-1'><FiDollarSign /> {minPrice}-{maxPrice}</span>
            <span className='flex items-center gap-1'><FiCalendar /> {jobPosting}</span>
          </div>
          <p className='text-base text-primary/70'>{truncateDescription(description)}......</p>
        </div>
      </Link>
    </section>
  );
};

export default Card;
