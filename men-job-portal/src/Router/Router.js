import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import { MyJobs } from "../Pages/MyJobs";
import Updatejob from "../Pages/Updatejob";
import Contact from "../Pages/Contact";
import CvBuilder from "../Pages/CvBuilder";
import TermsConditions from "../Pages/TermsConditions";
import Privacy from "../Pages/Privacy";
import Faq from "../Pages/Faq";
import Browsejobs from "../Pages/Browsejobs";
import JobDetails from "../Pages/Jobdetails";
import Companyjobs from "../Pages/Companyjobs";
import Jobloction from "../Pages/Jobloction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children: [

      { path: "/", element: <Home /> },
      {
        path: "post-job",
        element: <CreateJob />
      },
      {
        path: "my-job",
        element: <MyJobs />
      },

      {
        path: "edit-job/:id",
        element: <Updatejob />,
        loader: ({ params }) => fetch(`http://localhost:3001/all-jobs/${params.id}`)
      },



      {
        path: "contact",
        element: <Contact />
      },

      {
        path: "cvbuilder",
        element: <CvBuilder />
      },

      {
        path: "termsconditions",
        element: <TermsConditions />
      },

      {
        path: "privacy",
        element: <Privacy />
      },

      {
        path: "faq",
        element: <Faq />
      },

      {
        path: "browsejobs",
        element: <Browsejobs />
      },
      {
        path: "jobdetails/:id",
        element: <JobDetails />,
        loader: ({ params }) => fetch(`http://localhost:3001/jobdetails/${params.id}`)
      },
      {
        path: "company-jobs/:companyId",
        element: <Companyjobs/>,
        loader: ({ params }) => fetch(`http://localhost:3001/company-jobs/${params.companyId}`)
      },
      {
        path: "location-jobs/:jobLocation",
        element: <Jobloction/>,
        loader: ({ params }) => fetch(`http://localhost:3001/location-jobs/${params.jobLocation}`)
      }





    ]

  },
]);

export default router;