import React, { Component } from "react";
import { Breadcrumb } from "egret";
import { withStyles } from '@material-ui/core/styles';
import SimpleForm from "../material-kit/forms/SimpleForm";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = (theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto'
    },
});

class AddUser extends Component {

  render() {
    const {classes} = this.props;
    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Users", path: "/add-user" },
              { name: "Add New User" }
            ]}
          />
        </div>
        <Paper className={classes.paper}>
        <Grid container>
        <Grid item xs={12}>
        <SimpleForm />
        </Grid>
        </Grid>
        </Paper>

      </div>
    );
  }
}

export default withStyles(useStyles) (AddUser);
