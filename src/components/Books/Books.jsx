import React from "react";
import {Box, Typography} from "@material-ui/core";
import BooksList from "./BooksList";
import Book from "../Book/Book";
export default class Books extends React.Component {



  render() {
    return (
      <Box>
        <Typography variant={"h3"}>
          Books
        </Typography>
        <BooksList />
        <Book />
      </Box>
    )
  }
}

