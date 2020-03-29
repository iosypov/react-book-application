import React from "react";
import {Box} from "@material-ui/core";
import Books from "../Books/Books";
import Alert from "@material-ui/lab/Alert";
import {connect} from "react-redux";

class Content extends React.Component{

  render() {
    let {message} = this.props;
    return (
      <Box pt={2}>
        {message && <Box pb={2}><Alert severity={message.type}>{message.text}</Alert></Box>}
        <Books />
      </Box>
    )
  }
}

const mapStateToProps = (state) => ({
  message: state.app.message
})

export default connect(mapStateToProps, null)(Content)