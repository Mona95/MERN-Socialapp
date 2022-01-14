const express = require("express");

// helper libraries
//  MongoDB object modeling tool designed to work in an asynchronous environment
const mongoose = require("mongoose");
//  is a zero-dependency module that loads environment variables from a .env file into process.env
const dotenv = require("dotenv");
// secure Express apps by setting various HTTP headers
const helmet = require("helmet");
// HTTP request middleware logger for Node.js and basically used as a logger.
const morgan = require("morgan");
// middleware for handling multipart/form-data, which is primarily used for uploading files
const multer = require("multer");
// use directories in application to display data instead of GET
const path = require("path");

//routes
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

const app = express();

// to use .env file
dotenv.config();

// Connect to DB
(async function () {
  try {
    await mongoose.connect(
      process.env.MONGO_URL,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log("Connected to Mongo")
    );
  } catch (error) {
    console.log("Connction error", error);
  }
})();

// if url is /image, dont trigger any api, instead go to the images directory
app.use("/images/", express.static(path.join(__dirname, "public/images")));

//middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

//define application routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(8800, () => {
  console.log("backend is running");
});
