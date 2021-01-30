import React, { Component } from "react";
import { Icon, IconButton} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  }
});

class EgretSearchBox extends Component {
  state = {
    open: false
  };

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    let { classes } = this.props;
    return (
      <React.Fragment>
        {!this.state.open && (
          <IconButton onClick={this.toggle}>
            <Icon>search</Icon>
          </IconButton>
        )}

        {this.state.open && (
          <div
            className={`flex flex-middle h-100 egret-search-box ${classes.root}`}
          >
            <input
              className={`px-16 search-box w-100 ${classes.root}`}
              type="text"
              placeholder="Type here"
              autoFocus
            />
            <IconButton onClick={this.toggle} className="text-middle mx-4">
              <Icon>close</Icon>
            </IconButton>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(EgretSearchBox);
