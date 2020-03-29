import {ADD_NEW_BOOK, HIDE_BOOK_MESSAGE, LOAD_BOOKS, SET_ACTIVE_BOOK, SHOW_BOOK_MESSAGE} from "../constants/books";

const initialState = {
  books: [],
  activeBook: null,
  lastId: 10000,
  bookFormMessage: null
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return {...state, books: action.payload}
    case SET_ACTIVE_BOOK:
      return {...state, activeBook: action.payload}
    case ADD_NEW_BOOK:
      return {...state, books: state.books.concat(action.payload.book), lastIndex: action.lastId}
    case SHOW_BOOK_MESSAGE:
      return {...state, bookFormMessage: action.payload}
    case HIDE_BOOK_MESSAGE:
      return {...state, bookFormMessage: null}
    default:
      return state;

  }
}