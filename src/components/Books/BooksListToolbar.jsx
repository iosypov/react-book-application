import React from "react";
import {connect} from "react-redux";
import {Toolbar, withStyles} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import BooksListToolbarStyles from "./BooksListToolbar.styles"
import {openBookForm} from "../../redux/actions/books";
import Button from "@material-ui/core/Button";

class BooksListToolbar extends React.Component {

  constructor(props) {
    super(props);

  }

  handleAddClick = () => {
    this.props.openBookForm({});
  }

  render() {

    const { classes } = this.props;
    return (
      <Toolbar className={classes.root}>
        <div className={classes.grow} />


        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<AddIcon />}
          onClick={this.handleAddClick}
        >
          Add New
        </Button>


      </Toolbar>
    )
  }
}

const mapDispatchToProps = {
  openBookForm
}
export default connect(null, mapDispatchToProps)(withStyles(BooksListToolbarStyles)(BooksListToolbar))