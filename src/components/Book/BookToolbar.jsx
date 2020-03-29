import React from "react";
import {AppBar, IconButton, Toolbar, Typography, withStyles} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import BookToolbarStyles from "./BookToolbar.styles";
import {connect} from "react-redux";
import {closeBookForm} from "../../redux/actions/books";
class BookToolbar extends React.Component {

  handleCloseClick = () => {
    this.props.closeBookForm();
  }

  render() {
    const {classes,title} = this.props;
    return (
      <AppBar position="static" >
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">
            {title}
          </Typography>
          <div className={classes.grow} />
          <IconButton aria-label="close" color="inherit" onClick={this.handleCloseClick}>
            <CloseIcon />
          </IconButton>
        </Toolbar>

      </AppBar>
    )
  }
}
const mapDispatchToProps = {
  closeBookForm
}
export default connect(null, mapDispatchToProps)(withStyles(BookToolbarStyles)(BookToolbar))