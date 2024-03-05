const Book = require("../models/Book");

// ========= create book
const createBook = async (_title, _author, _publishYear) => {
  try {
    let data = await Book.create({
      title: _title,
      author: _author,
      publishYear: _publishYear,
    });
    if (data) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

// get all books
const getAllBooks = async () => {
  try {
    let data = await Book.find();
    if (data) {
      return data;
    } else {
      console.log("cannot get books");
    }
  } catch (err) {
    console.log(err.message);
  }
};
// get one book by id
const getBookById = async (id) => {
  try {
    let data = await Book.findOne({ _id: id });
    if (data) {
      console.log("Book :", data);
      return data;
    } else {
      console.log(" error in getting a book");
    }
  } catch (error) {
    console.log(err);
  }
};
// update book
const updateBook = async (id, _title, _author, _publishYear) => {
  try {
    let data = await Book.findOneAndUpdate(
      { _id: id },
      { title: _title, author: _author, publishYear: _publishYear }
    );
    if (data) {
      console.log(`book updating done ${data}`);
      return data;
    } else {
      console.log("error in updating");
    }
  } catch (error) {}
};

// Delete book
const deleteBook = async (id) => {
  try {
    let data = await Book.deleteOne({ _id: id });
    if (data) {
      console.log(`deleted book ${data}`);
      return data;
    } else {
      return `error in deleting`;
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook
};
