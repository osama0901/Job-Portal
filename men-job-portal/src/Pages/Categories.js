import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi"


const Categories = () => {
    const { category } = useParams();
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const CompanyDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3001/categories/${category}`);

                if (response.ok) {
                    const jobData = await response.json();
                    setJobs(jobData);
                } else {
                    console.error('Error fetching job details:', response.status);
                }
            } catch (error) {
                console.error('Error fetching job details:', error);
            } finally {
                setLoading(false);
            }
        };

        CompanyDetails();
    }, [category]);

    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <img src="/images/loader.gif" alt="Loading..." style={{ height: "100px" }} />
            </div>
        );
    }

    return (
        <div className="flex justify-center">
            <div className="w-[80vw] min-h-[80vh] ">
                <div>
                    {console.log(jobs)}
                    <h3 className="text-lg font-bold mb-2 ml-6">{jobs?.length} {category} Jobs</h3>
                </div>
                {jobs?.map(job => (
                    <section key={job?._id} className='card border border-gray-300 rounded p-4 mb-4 hover:shadow-lg'>
                        <Link to={`/jobdetails/${job._id}`} className='flex gap-4 flex-col sm:flex-row item-start'>
                            <img src={job?.companyLogo} alt={job?.companyName} className="w-12 h-12 object-contain" />
                            <div>
                                <h4 className='text-primary mb-1'>{job?.category}</h4>
                                <h4 className='text-primary mb-1'>{job?.companyName}</h4>
                                <h3 className='text-lg font-semibold mb-2'>{job?.jobTitle}</h3>
                                <h6 className='text-lg font-semibold mb-2'>{job?.skills && job?.skills.map(skill => skill.label).join(', ')}</h6>
                                <div className='text-primary/70 text-base flex flex-wrap gap-2 mb-2'>
                                    <span className='flex items-center gap-1'><FiMapPin /> {job?.jobLocation}</span>
                                    <span className='flex items-center gap-1'><FiClock /> {job?.employementType}</span>
                                    <span className='flex items-center gap-1'><FiDollarSign /> {job?.minPrice}-{job?.maxPrice} {job?.salaryType}</span>
                                    <span className='flex items-center gap-1'><FiCalendar /> {job?.jobPosting}</span>
                                </div>
                                <p className='text-base text-primary/70 max-h-24 truncate'>{job?.description}</p>                            </div>
                        </Link>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Categories;
