import {combineReducers} from "redux";
import {booksReducer} from "./books"
import {appReducer} from "./app";

export default combineReducers({
  app: appReducer,
  books: booksReducer
})