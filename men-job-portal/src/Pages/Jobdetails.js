import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
    const { id } = useParams();
    console.log(id);

    const [job, setJob] = useState(null);

    useEffect(() => {
        // Fetch job details based on the ID from the URL params
        const fetchJobDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3001/jobdetails/${id}`);
                if (response.ok) {
                    const jobData = await response.json();
                    setJob(jobData);
                } else {
                    console.error('Error fetching job details:', response.status);
                }
            } catch (error) {
                console.error('Error fetching job details:', error);
            }
        };

        fetchJobDetails();
    }, [id]);

    if (!job) {
        // If job data is not yet loaded, return a loading indicator or placeholder
        return <div>Loading...</div>;
    }

    const relativeTime = moment(job.jobPosting).fromNow();
    return (
        <div className="container mx-auto py-8 flex flex-col md:flex-row justify-between items-start">
            <div className="w-full md:w-3/4 mb-8 md:mb-0 md:pr-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{job?.jobTitle}</h1>
                <div className="flex items-center mb-4">
                    <p className="text-gray-700 mr-4"><b>Posted Date </b> {relativeTime}</p>
                </div>
                <h2 className='text-2xl md:text-3xl font-bold'>Job Details</h2>
                <hr className="border-gray-300 my-4" />
                <p className="text-gray-700 mb-4 mt-4">{job?.description}</p>
            </div>
            <div className="w-full md:w-1/4 bg-gray-100 p-4 rounded-lg">
                <div className="text-center mt-5">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">Company Information</h2>
                </div>
                <img src={job.companyLogo} alt={job?.companyName} />
                <h3 className="text-lg md:text-xl font-semibold mb-2">{job?.companyName}</h3>
                <div className="flex flex-wrap items-center mb-2">
                    <p className="text-gray-700 mr-4 mb-2 md:mb-0 md:mr-0 md:pr-4"><b>Location:</b> {job?.jobLocation}</p>
                    <p className="text-gray-700 mb-2 md:mb-0"><b>Employment Type:</b> {job?.employementType}</p>
                </div>
                <div className="flex items-center mb-2">
                    <p className="text-gray-700 mr-4"><b>Experience Level:</b> {job?.experienceLevel}</p>
                </div>
                <div className="flex items-center">
                    <p className="text-gray-700 mr-4"><b>Salary Range:</b> {job?.minPrice} - {job?.maxPrice} {job?.salaryType}</p>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;