import React from "react";
import {Toolbar, withStyles} from "@material-ui/core";
import BookButtonsStyles from "./BookButtons.styles";
import {connect} from "react-redux";
import {closeBookForm} from "../../redux/actions/books";
import Button from "@material-ui/core/Button";
class BookToolbar extends React.Component {
  handleCancelClick = () => {
    this.props.closeBookForm();
  }

  handleSaveClick = (e) => {
    e.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit();
    }
  }

  render() {
    const {classes} = this.props;
    return (
      <Toolbar className={classes.root}>
        <div className={classes.grow} />
        <Button variant="contained" className={classes.button} onClick={this.handleCancelClick}>Cancel</Button>
        <Button variant="contained" color="primary" className={classes.button} onClick={this.handleSaveClick} type="submit">Save</Button>
      </Toolbar>

    )
  }
}
const mapDispatchToProps = {
  closeBookForm
}
export default connect(null, mapDispatchToProps)(withStyles(BookButtonsStyles)(BookToolbar))