require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const movieRouter = require("./routes/movie.routes");
const compression = require("compression");

const app = express();
app.use(compression());
app.use(express.json());
app.use(cors());
app.use(express.static("."), function (req, res, next) {
  res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/movies", movieRouter);

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

prisma.$connect().then(() => console.log("Connected to the database"));

// ORM
// const mongoose = require("mongoose");
//
// const db = mongoose
//   .connect("mongodb://localhost:27017/db", {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((response) => {
//     console.log("Connected to the database...");
//     return response;
//   });

app.get("/", (req, res) => {
  res.status(200).json({ number: Math.random() * 100 });
});

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => console.log("Running on port", PORT));
