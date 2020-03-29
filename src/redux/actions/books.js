import booksApi from '../../api/books'
import {ADD_NEW_BOOK, HIDE_BOOK_MESSAGE, LOAD_BOOKS, SET_ACTIVE_BOOK, SHOW_BOOK_MESSAGE} from "../constants/books";
import {showMessage} from "./app";

export const  loadBooks = () => async (dispatch) => {
  const books = await booksApi.loadBooks();
  dispatch({
    type: LOAD_BOOKS,
    payload: books
  })
}

export const openBookForm = (book) => (dispatch) => {
  dispatch({
    type: SET_ACTIVE_BOOK,
    payload: book
  })
}

export const closeBookForm = () => {
  return {
    type: SET_ACTIVE_BOOK,
    payload: null
  }
}

export const showBookMessage = (message) => (dispatch) => {
  dispatch({
    type: SHOW_BOOK_MESSAGE,
    payload: message
  })

  setTimeout(() => {
    dispatch({
      type: HIDE_BOOK_MESSAGE,
    })
  }, 3000)
}

export const hideBookMessage = (message) => (dispatch) => {
  dispatch({
    type: HIDE_BOOK_MESSAGE
  })
}

export const saveBook = (book) => async (dispatch, getState) => {
  const books = getState().books.books.concat([]);

  try {
    await booksApi.checkUnique(books, book);

    const existBookIndex = books.findIndex((item) => (item.id === book.id));
    books[existBookIndex] = Object.assign({}, books[existBookIndex], book)

    dispatch({
      type: LOAD_BOOKS,
      payload: books
    })

    dispatch(closeBookForm());

    dispatch(showMessage({
      type: "success",
      text: "Book is successfully updated!"
    }))
  } catch (e) {
    dispatch(showBookMessage({
      type: "error",
      text: e.message
    }))
  }

}

export const addNewBook = (book) => async (dispatch, getState) => {
  const books = getState().books.books;
  const id = getState().books.lastId + 1;
  book.id = id;
  try {
    await booksApi.checkUnique(books, book);

    dispatch({
      type: ADD_NEW_BOOK,
      payload: {
        book,
        lastId: id
      }
    })

    dispatch(closeBookForm());

    dispatch(showMessage({
      type: "success",
      text: "Book is successfully added!"
    }))
  } catch (e) {
    dispatch(showBookMessage({
      type: "error",
      text: e.message
    }))
  }

}

export const deleteBook = (book) => async(dispatch, getState) => {
  const books = getState().books.books.concat([]);
  const existBookIndex = books.findIndex((item) => (item.id === book.id));
  books.splice(existBookIndex, 1);
  dispatch({
    type: LOAD_BOOKS,
    payload: books
  })

  dispatch(showMessage({
    type: "success",
    text: "Book is successfully deleted!"
  }))

}