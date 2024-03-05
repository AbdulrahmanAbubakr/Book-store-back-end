const e = require("express");
const BookController = require("../controllers/BookController");
const express = require("express");
const route = express.Router();

// create book router
route.post("/create-book", async (req, res) => {
  try {
    let { title, author, publishYear } = req.body;
    let data = await BookController.createBook(title, author, publishYear);
    if (data) {
      console.log(data);
      res.send(data);
    } else {
      console.log(`error in creating `);
    }
  } catch (error) {
    console.log(error);
  }
});

// get all books router
route.get("/get-all-books", async (req, res) => {
  try {
    let data = await BookController.getAllBooks();
    if (data) {
      res.json({
        Books: data,
        status: 200,
        message: "All Books ",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

// get book by id router
route.get("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let data = await BookController.getBookById(id);
    if (data) {
      res.json({
        book: data,
        status: 200,
        message: "the determined book",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

// update book router
route.patch("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let { title, author, publishYear } = req.body;
    let data = await BookController.updateBook(id, title, author, publishYear);
    console.log(data);
    if (data) {
      console.log(`updated book : ${data}`);
      res.json({
        updatedBook: data,
        status: 200,
        message: "updating done",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
// delete book router
route.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let data = await BookController.deleteBook(id);
    if (data) {
      res.json({
        deletedBook: data,
        status: 500,
        message: "book deleting done",
      });
    } else {
      console.log(`error in deleting ${data}`);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});
module.exports = route;
