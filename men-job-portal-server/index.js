const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(cors());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@men-job-portal.ddye6po.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const db = client.db("MenJobPortal");
    const jobsCollections = db.collection("demoJobs");

    app.post("/post-job", async (req, res) => {
      let body = req.body;
      body._id = new ObjectId(body._id);
      console.log(req.body);
      body.createdAt = new Date(); // Corrected property name
      console.log(body);
      try {
        const job = await jobsCollections.findOne({ _id: body._id });
        const companyId = req.body.companyName
          .toLowerCase() // Convert to lowercase
          .replace(/\s+/g, '-') // Replace spaces with dashes
          .replace(/[^\w-]+/g, '');

        body.companyId = companyId;

        if (job == null) {
          console.log(body)
          // If job with given _id does not exist, insert a new document

          result = await jobsCollections.insertOne(body);
        } else {
          // If job with given _id exists, update the existing document
          result = await jobsCollections.findOneAndUpdate(
            { _id: new ObjectId(body._id) },
            { $set: body },
            { returnOriginal: false } // return the updated document
          );
        }
        if (result.insertedId) {
          return res.status(200).send(result);
        } else {
          return res.status(404).send({
            message: "Cannot Insert Try Again Later!",
            status: false
          });
        }
      } catch (error) {
        console.error(error);
        return res.status(500).send({
          message: "Internal Server Error",
          status: false
        });
      }
    });

    app.get("/all-jobs", async (req, res) => {
      try {
        const jobs = await jobsCollections.find({}).toArray();
        console.log(jobs)
        res.send(jobs);
      } catch (error) {
        console.error(error);
        return res.status(500).send({
          message: "Internal Server Error",
          status: false
        });
      }
    });

    // Add a new route to fetch jobs posted by a specific company
    app.get("/company-jobs/:companyId", async (req, res) => {
      const companyId = req.params.companyId;

      try {
        const jobs = await jobsCollections.find({ companyId }).toArray();
        res.json(jobs);
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
      }
    });

    app.get("/location-jobs/:jobLocation", async (req, res) => {
      const jobLocation = req.params.jobLocation;

      try {
        const jobs = await jobsCollections.find({ jobLocation }).toArray();
        res.json(jobs);
        console.log(res)
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
      }
    });
    app.get("/categories/:category", async (req, res) => {
      const category = req.params.category;
      console.log(category)
      try {
        const jobs = await jobsCollections.find({ category }).toArray();
        res.json(jobs);
        console.log(res)
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
      }
    })
    //get single job using id

    app.get("/all-jobs/:id", async (req, res) => {
      const id = req.params.id;
      console.log(req.params);
      const job = await jobsCollections.findOne({
        _id: new ObjectId(id)
      });
      console.log(job);
      res.send(job)
    });

    app.get("/jobdetails/:id", async (req, res) => {
      const jobId = req.params.id;

      // Check if the job ID is a valid ObjectId
      if (!ObjectId.isValid(jobId)) {
        return res.status(400).send({ message: 'Invalid job ID' });
      }

      try {
        const job = await jobsCollections.findOne({ _id: new ObjectId(jobId) });
        if (!job) {
          return res.status(404).send({ message: 'Job not found' });
        }
        res.json(job);
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
      }
    });

    app.get("/myJobs/:email", async (req, res) => {
      const Jobs = await jobsCollections.find({ postedBy: req.params.email }).toArray();
      res.send(Jobs);
    });

    app.delete("/job/:id", async (req, res) => {
      const id = req.params.id;
      console.log(req.params);
      const filter = { _id: new ObjectId(id) };
      const result = await jobsCollections.deleteOne(filter); // Corrected method name
      res.send(result);
    });

    await client.db('admin').command({ ping: 1 });
    console.log('Pinged your deployment. You successfully connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Osama!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
