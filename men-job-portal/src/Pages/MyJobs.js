import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

export const MyJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchText, setSearchText] = useState("");


    // set current page
    const [currentPage, setcurrentPage] = useState(1);
    const itemsPerPage = 10;
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('http://localhost:3001/all-jobs');
                if (!response.ok) {
                    throw new Error('Failed to fetch jobs');
                }
                const data = await response.json();
                setJobs(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching jobs:', error);
                setIsLoading(false);
            }
        };

        setIsLoading(true);
        fetchJobs();
    }, [searchText]);

    //  pagination 
    const indexofLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexofLastItem - itemsPerPage;
    const currentJobs = jobs.slice(indexOfFirstItem, indexofLastItem);


    // next button & previous button

    const nextPage = () => {
        if (indexofLastItem < jobs.length) {
            setcurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {

        if (currentPage > 1) {
            setcurrentPage(currentPage - 1)
        }
    }


    const handleSearch = () => {
        const filter = jobs.filter((job) => job.jobTitle.toLowerCase().includes(searchText.toLowerCase()));
        setJobs(filter);
        setIsLoading(false);
    }

    const handleDelete = (id) => {
        // Show confirmation dialog
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this job!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                // If user confirms deletion, send delete request
                fetch(`http://localhost:3001/job/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged === true) { // Check for 'acknowledged' instead of 'acknowledge'
                            // Show success message
                            Swal.fire(
                                'Deleted!',
                                'Job has been deleted.',
                                'success'
                            );
                            // After successful deletion, you might want to fetch jobs again to update the list
                            setIsLoading(true);
                        }
                    })
                    .catch(error => {
                        console.error('Error deleting job:', error);
                        // Handle error here
                    });
            }
        });
    }

    return (
        <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
            <div className='my-jobs-container'>
                <h1 className='text-sky-500 font-sans text-2xl text-bold text-center   mb-10'> {isLoading ? 'Loading...' : 'All Jobs'} </h1>
                <div className='search-box p-2 text-center mb-2 '>
                    <input
                        onChange={(e) => setSearchText(e.target.value)}
                        type="text" name="search" id="search" className="py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full"
                    />
                    <button className='bg-sky-500 text-white font-semibold px-8 py-2 rounded-sm mb-4' onClick={handleSearch}>Search</button>
                    <ul>
                        {jobs.map((job) => (
                            <li key={job?._id}>
                                <div>{job?.title}</div>
                                <div>{job?.company}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <section className="py-1 bg-blueGray-50">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3 className="font-semibold text-base text-blueGray-700">All Jobs</h3>
                                </div>
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    <Link to="/post-job">
                                        <button className="bg-sky-500 text-white  active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Post A New Job</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="block w-full overflow-x-auto">
                            <table className="items-center bg-transparent w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            No
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Title
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Company Name
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Salary
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Edit
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                {
                                    isLoading ? (<div className="flex items-center justify-center h-20"><p>Loading....!</p></div>) : (
                                        <tbody>
                                            {currentJobs.map((job, index) => (
                                                <tr key={index}>
                                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                        {index + 1}
                                                    </th>
                                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        {job?.jobTitle}
                                                    </td>
                                                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        {job?.companyName}
                                                    </td>
                                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                                                        ${job?.minPrice} - ${job?.maxPrice}
                                                    </td>
                                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <Link to={`/edit-job/${job?._id}`}>Edit</Link>
                                                    </td>
                                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <button onClick={() => handleDelete(job?._id)} className='bg-red-700 py-2 px-6 text-white rounded-sm'>Delete</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    )
                                }
                            </table>
                        </div>
                    </div>
                </div>
                <footer className="relative pt-8 pb-6 mt-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                            <div className="w-full md:w-6/12 px-4 mx-auto text-center">

                            </div>
                        </div>
                    </div>
                </footer>
                {/* Pagination */}

                <div className="flex justify-end text-black space-x-8 mb-8"> {
                    currentPage > 1 && (
                        <button className="hover:underline" onClick={prevPage}>
                            <MdArrowBackIos size={20} />
                        </button>
                    )
                }
                    {
                        indexofLastItem < jobs.length && (
                            <button onClick={nextPage} className="hover:underline">
                                <MdArrowForwardIos size={20} />
                            </button>
                        )
                    }
                </div>
            </section>
        </div>
    );
};
