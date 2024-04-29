import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

const CreateJob = () => {
  const [selectedOptions, setSelectedOptions] = useState(null);

  const {
    register,
    handleSubmit, reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!data.jobTitle
      || !data.companyName
      || !data.minPrice
      || !data.maxPrice
      || !data.salaryType
      || !data.jobLocation
      || !data.jobPosting
      || !data.experienceLevel
      || !data.description
      || !data.postedBy
      || !data.category
    ) {
      toast.error("All Fields are required !");
      return;
    }
    data.skills = selectedOptions;
    fetch("http://localhost:3001/post-job", {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if (result.acknowledge === true) {
          Swal.fire({
            icon: 'success',
            title: 'Job added successfully!',
            showConfirmButton: false,
            timer: 1500
          });
        }
        reset();
      })
      .catch(error => {
        console.error(error);
      });
  };


  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "React", label: "React" },
    { value: "MS Office", label: "MS Office" },
    { value: "Oracle", label: "Oracle" },
    { value: "Flutter", label: "Flutter" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto x1:px-24 px-8 ">
      <Toaster />
      {/* Form */}
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <h1 className='container text-sky-500 font-sans text-2xl text-bold  mb-4'>Post a New Job</h1>
        <hr className="mb-4"></hr>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/*First Row*/}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input type="text" placeholder="Flutter Developer" {...register("jobTitle")} className="create-job-input" />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input type="text" placeholder="Ex: Microsoft" {...register("companyName")} className="create-job-input" />
            </div>
          </div>

          {/*2nd Row*/}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input type="text" placeholder="$20k" {...register("minPrice")} className="create-job-input" />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input type="text" placeholder="$120k" {...register("maxPrice")} className="create-job-input" />
            </div>
          </div>

          {/* 3rd Row*/}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select {...register("salaryType")} className="create-job-input">
                <option value="">Choose your salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input type="text" placeholder="Ex: Amsterdam" {...register("jobLocation")} className="create-job-input" />
            </div>
          </div>

          {/* 4th Row*/}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input type="date" placeholder="Ex: 2023-11-08" {...register("jobPosting")} className="create-job-input" />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select {...register("experienceLevel")} className="create-job-input">
                <option value="">Choose experience</option>
                <option value="noExperience">No Experience</option>
                <option value="Intership">Intership</option>
                <option value="Work Remotely">Work Remotely</option>
              </select>
            </div>
          </div>
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Category</label>
              <select {...register("category")} className="create-job-input">
                <option value="">Choose category</option>
                <option value="InformationTechnology ">Information Technology </option>
                <option value="LifeSciencesHealthcare">Life Sciences & Healthcare</option>
                <option value="Retail">Retail</option>
                <option value="AccountingFinance">Accounting / Finance</option>
                <option value="DistributionLogistics">Distribution/Logistics</option>
                <option value="OilGas">Oil & Gas</option>
                <option value="LegalProfessionalServices">Legal & Professional Services</option>
                <option value="SalesBusinessDevelopment">Sales/Business Development</option>
                <option value="HealthcareMedical">Healthcare & Medical</option>
                <option value="HumanResource">Human Resource</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="DesignMultimedia">Design & Multimedia</option>
                <option value="Government">Government</option>
                <option value="Engineering Jobs">Engineering Jobs</option>
              </select>
            </div>
          </div>

          {/* 5th Row*/}
          <div>
            <label className="block mb-2 text-lg">Required Skill Sets</label>
            <CreatableSelect
              defaultValue={selectedOptions}
              onChange={setSelectedOptions}
              options={options}
              isMulti
              className="create-job-input py-4"
            />
          </div>
          {/* 6th Row*/}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input type="url" placeholder="Paste your company logo URL: https://weshare.com/img1" {...register("companyLogo")} className="create-job-input" />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employement Type</label>
              <select {...register("employementType")} className="create-job-input">
                <option value="">Choose your experience</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>
          {/* 7th Row*/}
          <div className="w-full"></div>
          <label className="block mb-2 text-lg">Job Description</label>
          <textarea className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700"
            rows={6}
            placeholder="As a Product Design Manager at GitLab, you will be responsible for managing a team of up to 5 talented Product Designers.” This approach can allow job seekers to envision themselves in the role so they can decide if it's the right fit for them."
            {...register("description")} />
          {/* Last Row*/}
          <div className="w-full ">
            <label className="block mb-2 text-lg">Job Posted By</label>
            <input type="email" placeholder="Your Email" {...register("postedBy")} className="create-job-input" />
          </div>
          <input type="submit" className="block mt-12 bg-sky-600 text-white font-semibold px-10 py-2 rounded-sm cursor-pointer " />
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
