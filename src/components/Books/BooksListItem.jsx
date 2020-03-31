import React from "react";
import {TableRow, TableCell, IconButton} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {connect} from "react-redux";
import {openBookForm} from "../../redux/actions/books";
import {withUtils} from "../../utils/withUtils";
class BooksListItem extends React.Component {

  handleEditBook = (book) => {
    this.props.openBookForm(book);
  }

  handleDeleteBook = (book) => {
    if (this.props.onDelete) {
      this.props.onDelete(book)
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.item.author !== this.props.item.author) {
      return true;
    }

    if (nextProps.item.title !== this.props.item.title) {
      return true;
    }

    if (nextProps.item.date !== this.props.item.date) {
      return true;
    }

    return false;
  }

  formatTitle(title) {
    title = title.replace(/[^a-zA-Z ]/g, "");
    title = title.split(" ").map((part) => (part.charAt(0).toUpperCase() + part.slice(1))).join(" ");
    return title;
  }

  formatDate(date) {
    const {muiPickerContext} = this.props;
    date = muiPickerContext.date(date.split(".")[0]);
    return muiPickerContext.format(date, "MM/dd/yyyy")
  }


  render() {
    const {item} = this.props;
    return (
      <TableRow>
        <TableCell>{this.formatTitle(item.title)}</TableCell>
        <TableCell>
          {item.author}
        </TableCell>
        <TableCell>{this.formatDate(item.date)}</TableCell>
        <TableCell align="right">
          <IconButton edge="end" aria-label="delete" onClick={this.handleEditBook.bind(this, item)} >
            <EditIcon />
          </IconButton>
          <IconButton onClick={this.handleDeleteBook.bind(this, item)}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>

    )
  }
}

const mapDispatchToProps = {
  openBookForm
}


export default connect(null, mapDispatchToProps)(withUtils(BooksListItem))


