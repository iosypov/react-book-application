import React from "react";
import {connect} from "react-redux";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  withStyles
} from "@material-ui/core";
import BooksListItem from "./BooksListItem";
import BooksListToolbar from "./BooksListToolbar";
import {deleteBook, loadBooks} from "../../redux/actions/books";
import BooksListStyle from "./BooksList.styles";
class BooksList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      deleteDialogOpen: false,
      deleteDialogBook: null
    }
  }

  componentDidMount() {
    this.props.loadBooks();
  }

  handleBookDelete = (book) => {
    this.setState({
      deleteDialogOpen: true,
      deleteDialogBook: book
    })
  }

  handleDeleteDialogClose = () => {
    this.setState({
      deleteDialogOpen: false,
      deleteDialogBook: null
    })
  }

  handleDeleteDialogAgree = () => {
    const {deleteDialogBook} = this.state;
    this.props.deleteBook(deleteDialogBook)

    this.setState({
      deleteDialogOpen: false,
      deleteDialogBook: null
    })
  }

  render() {
    const {books, classes}  = this.props;
    const {deleteDialogOpen} = this.state;
    return (
      <React.Fragment>
        <BooksListToolbar />
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow >
                <TableCell width="30%" className={classes.headerCell}>Title</TableCell>
                <TableCell width="30%" className={classes.headerCell}>Author</TableCell>
                <TableCell width="100" className={classes.headerCell}>Date</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books.map(row => (
                <BooksListItem key={row.id} item={row} onDelete={this.handleBookDelete.bind(this)} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Dialog
          open={deleteDialogOpen}
          onClose={this.handleDeleteDialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Warning</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete this item?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleDeleteDialogClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleDeleteDialogAgree} color="primary" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  loadBooks,
  deleteBook
}

const mapStateToProps = (state) => ({
  books: state.books.books
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(BooksListStyle)(BooksList))