import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../sidebard/Sidebar";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  useEffect(() => {
    setIsloading(true);
    fetch("http://localhost:3001/all-jobs")
      .then(res => res.json())
      .then(data => {
        //console.log(data)
        setJobs(data);
        setIsloading(false)

      }
      )
  }, [])

  //console.log(jobs)

  const [query, setQuery] = useState(""); // Move useState to the Home component

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  //filter  jobs by title Create by Usama
  // const filteredItems = jobs.filter((job) => job?.jobTitle.toLowerCase().indexOf(query.toLocaleLowerCase()) !== -1)

  const filteredItems = jobs.filter((job) => {
    const jobTitleMatch = job?.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    const companyNameMatch = job?.companyName.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    const locationMatch = !selectedLocation || job?.jobLocation.toLowerCase() === selectedLocation.toLowerCase();
    return (jobTitleMatch || companyNameMatch) && locationMatch;
  });

  //================Radio Base Button filtering-------------

  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  // ===================Buttons Side  filtering---------------

  const handleClick = (event) => {
    // console.log(event.target.value);
    setSelectedCategory(event.target.value)
  }

  // calculate inndex Range

  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  }

  // funxtion for the next page

  const nextPage = () => {

    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {

      setCurrentPage(currentPage + 1);

    }

  }

  // function for current page

  const prevPage = () => {

    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  // main funtion 

  const filteredData = (jobs, selected, query, selectedLocation) => {
    let filteredJobs = jobs;

    // Filtering input
    if (query) {
      filteredJobs = filteredItems;
    }

    // Category filtering
    if (selected) {
      // console.log(selected);
      filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, experiencedLevel, salaryType, employementType, postingDate }) =>
        (jobLocation && jobLocation.toLowerCase() === selected.toLowerCase()) ||
        (maxPrice && parseInt(maxPrice) <= parseInt(selected)) ||
        (postingDate && postingDate >= selected) ||
        (salaryType && salaryType.toLowerCase() === selected.toLowerCase()) ||
        (experiencedLevel && experiencedLevel.toLowerCase() === selected.toLowerCase()) ||
        (employementType && employementType.toLowerCase() === selected.toLowerCase())
      );
      // console.log(filteredJobs);
    }
    if (selectedLocation) {
      filteredJobs = filteredJobs.filter(job =>
        job.jobLocation.toLowerCase() === selectedLocation.toLowerCase()
      );
    }


    //slice the data based on current page

    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex)
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  }

  const result = filteredData(jobs, selectedCategory, query, selectedLocation);

  return (
    <div>
      {/* Pass query and handleInputChange as props to the Banner component */}
      <Banner query={query}
        handleInputChange={handleInputChange}
        handleLocationChange={handleLocationChange} />
      {/* Main Content  */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-6 px-4 py-12">
        {/* Left Side  */}
        <div className="bg-white p-4 rounded md:col-span-1"> {/* Adjusted width for medium screens */}
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
        {/* Job Cards   */}
        <div className="bg-white p-4 rounded-sm md:col-span-2"> {/* Adjusted width for medium screens */}
          {isLoading ? (
            <div className="flex justify-center items-center">
              <img src="/images/loader.gif" alt="Loading..." style={{ height: "100px" }} />
            </div>)
            : result.length > 0 ? (
              <Jobs result={result} />
            ) : (
              <>
                <h3 className="text-lg font-bold mb-2">{result?.length} Jobs</h3>
                <p>No Data Found!</p>
              </>
            )}
          {/*pagination here */}
          {result.length > 0 && (
            <div className="flex justify-center mt-4 space-x-8">
              <button onClick={prevPage} disabled={currentPage === 1} className="hover:underline">
                Previous
              </button>
              <span className="mx-2">Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
              <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)} className="hover:underline">
                Next
              </button>
            </div>
          )}
        </div>
        {/* Right Side  */}
        <div className="bg-white p-4 rounded md:col-span-1"> {/* Adjusted width for medium screens */}
          <Newsletter />
        </div>
      </div>


    </div>
  );
};

export default Home;

