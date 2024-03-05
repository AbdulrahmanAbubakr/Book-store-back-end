const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const PORT = 5300;
const bookRoute = require("./Routes/BookRouter");
mongoose
  .connect("mongodb://127.0.0.1:27017/Book-store")
  .then(() => {
    console.log("Connected to DB successfully");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/books", bookRoute);

// app.get("/", (req, res) => {
//   console.log("Request", req);
//   return res.status(234).send("Welcome to MERN Stack tutorial");
// });

app.listen(PORT, () => {
  console.log(`server is listening on port: ${PORT}`);
});
