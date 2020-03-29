import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";

export default class TopBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">
              Books Application
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </React.Fragment>
    )
  }
}