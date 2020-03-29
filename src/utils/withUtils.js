import {MuiPickersContext} from "@material-ui/pickers";
import React from "react";

export function withUtils(Component) {
  return function WrapperComponent(props) {
    return (
      <MuiPickersContext.Consumer>
        {state => <Component {...props} muiPickerContext={state} />}
      </MuiPickersContext.Consumer>
    );
  };
}