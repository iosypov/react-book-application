import React from "react";
import {connect} from "react-redux";
import {TextField, Box, withStyles} from "@material-ui/core";
import {KeyboardDatePicker} from "@material-ui/pickers"
import Alert from "@material-ui/lab/Alert";
import BookFormStyles from "./BookForm.styles"
import BookButtons from "./BookButtons";
import {addNewBook, saveBook} from "../../redux/actions/books";


class BookForm extends React.Component {

  constructor(props) {
    super(props);
    const {book} = this.props;
    this.state = {
      formValid: {valid:true},
      title: book.title?book.title:"",
      titleValid: {valid: true},
      author: book.author?book.author:"",
      authorValid: {valid: true},
      date: book.date?new Date(book.date):new Date(),
      dateValid: {valid: true}
    }
  }

  save() {
    const id = this.props.book.id?this.props.book.id:null;
    const {author, title, date} = this.state;
    const book = {
      id,
      author,
      title,
      date: date.toISOString()
    }
    if (id === null) {
      this.props.addNewBook(book);
      return ;
    }
    this.props.saveBook(book);
  }

  handleSubmit = () => {
    const validateState = this.validateForm();

    if (validateState.formValid.valid) {
      this.save();
    }

    this.setState(validateState)



  }

  handleTitleChange = (event) => {
    const title = event.target.value;
    const validate = this.validateTitle(title);

    this.setState({
      title,
      titleValid: validate
    })
  }

  handleAuthorChange = (event) => {
    const author = event.target.value;
    const validate = this.validateAuthor(author);

    this.setState({
      author,
      authorValid: validate
    })
  }

  handleDateChange = (date) => {
    this.setState({
      date,
      dateValid: true
    })
  }

  handleDateError = (message) => {
    this.setState({
      dateValid:{
        valid: !message,
        message
      }
    })
  }

  validateForm() {
    const {title, author, dateValid} = this.state;
    const titleValid = this.validateTitle(title);
    const authorValid = this.validateAuthor(author);
    const formValid = {
      valid: true,
      message: ""
    }
    if (!titleValid.valid || !authorValid.valid || !dateValid.valid) {
      formValid.valid = false;
      formValid.message = "Please check the fields below."
    }

    return {
      authorValid,
      titleValid,
      dateValid,
      formValid
    }

  }


  validateAuthor(author) {
    if (!author || author.trim() === "") {
      return {
        valid: false,
        message: "Author should not be empty"
      }
    }

    return {
      valid: true
    }
  }

  validateTitle(title) {
    if (!title || title.trim() === "") {
      return {
        valid: false,
        message: "Title should not be empty"
      }
    }

    return {
      valid: true
    }
  }




  render() {
    const {classes,formMessage} = this.props;
    const {formValid, title, titleValid, author, authorValid, date} = this.state;
    return (
      <Box p={3}>
        {!formValid.valid && <Alert severity="error">{formValid.message}</Alert>}
        {formMessage && <Alert severity={formMessage.type}>{formMessage.text}</Alert>}
        <form noValidate autoComplete="off" className={classes.form} onSubmit={this.handleSubmit}>
          <div>
            <TextField
              required
              label="Title"
              value={title}
              onChange={this.handleTitleChange}
              error={!titleValid.valid}
              helperText={titleValid.message}
            />
          </div>
          <div>
            <TextField
              required
              label="Author"
              value={author}
              onChange={this.handleAuthorChange}
              error={!authorValid.valid}
              helperText={authorValid.message}
            />
          </div>
          <div>
            <KeyboardDatePicker
              disableToolbar
              required
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              value={date}
              id="date-picker-inline"
              label="Date"
              maxDate={new Date()}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              onChange={this.handleDateChange}
              onError={this.handleDateError}
            />
          </div>
          <BookButtons onSubmit={this.handleSubmit} />
        </form>
      </Box>
    );
  }
}

const mapDispatchToProps = {
  saveBook,
  addNewBook
}

const mapStateToProps = (state) => ({
  formMessage: state.books.bookFormMessage
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(BookFormStyles)(BookForm))