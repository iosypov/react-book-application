import React from "react";
import {Drawer, withStyles} from "@material-ui/core";
import BookToolbar from "./BookToolbar";
import BookStyles from "./Book.styles"
import BookForm from "./BookForm";
import {connect} from "react-redux";
import {closeBookForm} from "../../redux/actions/books";
class Book extends React.Component {


  handleFormClose = () => {
    this.props.closeBookForm();
  }

  render() {
    const { classes,activeBook } = this.props;
    const open = activeBook !== null;
    const title = (open && activeBook.id)?"Edit Book":"Add New Book";
    return (
      <Drawer anchor={"right"} open={open} PaperProps={{className:classes.root}} onClose={this.handleFormClose}>
        <BookToolbar title={title} />
        <BookForm book={open?activeBook:{}} />

      </Drawer>
    )
  }
}

const mapStateToProps = (state) => ({
  activeBook: state.books.activeBook
});

const mapDispatchToProps = {
  closeBookForm
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(BookStyles)(Book));