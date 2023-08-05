//IMPORTS
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const cookiesParser = require("cookie-parser");
const path = require("path");
const app = express();


app.use(cookiesParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const CONNECTION_URL = process.env.MONGODB_URL;

const PORT = process.env.PORT || 9000;

// const { MongoClient, ServerApiVersion } = require('mongodb');

// async function run() {
//   const client = new MongoClient(CONNECTION_URL, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
//   });

//   try {
//     await client.connect();

//     await client.db("admin").command({ ping: 1 });

//     console.log("Pinged your deployment. Connected to Database :: MongoDB Cloud");
//   } catch (err) {
//     console.error("Error connecting to MongoDB:", err);
//   } finally {
//     await client.close();
//   }
// }

// run().catch(console.error);

mongoose.set('strictQuery', false);

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Database :: MongoDB Cloud"))
  .catch((err) => console.log(err.message));



app.use(
  cors({
    origin: [
      "http://localhost:3000", "https://doer.onrender.com/"],
    credentials: true,
  })
);

app.use("/", require("./routes/index"));


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html", "client", "build", "index.html"));
  });
}

//SERVER LISTENING
app.listen(PORT, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`server running on:${PORT}`);
  }
});



