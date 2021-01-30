import React, { Component } from "react";
import {
  IconButton,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Icon,
  TablePagination,
  Button,
  Card
} from "@material-ui/core";
import MUIDataTable,{ ExpandButton, TableViewCol } from "mui-datatables";
import Done from "@material-ui/icons/Done";
import Error from "@material-ui/icons/Error";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from '@material-ui/icons/Edit';
import { getAllUser, deleteUser } from "./UserService";
// import MemberEditorDialog from "./MemberEditorDialog";
import { Breadcrumb, ConfirmationDialog } from "egret";
import { Link as RouterLink } from 'react-router-dom';

import shortid from "shortid";

class UsersList extends Component {
  state = {
    rowsPerPage: 10,
    page: 0,
    userList: [],
    shouldOpenEditorDialog: false,
    shouldOpenConfirmationDialog: false
  };

  setPage = page => {
    this.setState({ page });
  };

  setRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };


  handleChangePage = (event, newPage) => {
    this.setPage(newPage);
  };

  handleDialogClose = () => {
    this.setState({
      shouldOpenEditorDialog: false,
      shouldOpenConfirmationDialog: false
    });
    this.updatePageData();
  };

  handleDeleteUser = user => {
    this.setState({
      user,
      shouldOpenConfirmationDialog: true
    });
  };

  handleConfirmationResponse = () => {
    deleteUser(this.state.user).then(() => {
      this.handleDialogClose();
    });
  };

  componentDidMount() {
    this.updatePageData();
  }

  updatePageData = () => {
    getAllUser().then(({ data }) => this.setState({ userList: [...data] }));
  };



  render() {
    let {
      rowsPerPage,
      page,
      userList,
      shouldOpenConfirmationDialog,
      shouldOpenEditorDialog
    } = this.state;


    const columns = [
      { name: "User ID" },
      { name: "User Name" },
      "Aadhar No",
      "Place",
      "Total PowerLooms",
      "Total Sarees",
      {
        name: "Active",
        options: {
          customBodyRender: (value, tableMeta, updateValue) => {
            if (value === "OK")
              return (
                <Tooltip title="OK">
                  <Done color="primary" />
                </Tooltip>
              );
            else
              return (
                <Tooltip title="Failing">
                  <Error color="error" />
                </Tooltip>
              );
          }
        }
      },
      {
        name: "Actions",
        options: {
          customBodyRender: (value, tableMeta, updateValue) => {
            return (

              <IconButton
              color="primary"
              className="mr-8"
              component={RouterLink} to="/view-user"
              >
              <Icon>chevron_right</Icon>
              </IconButton>

            );
          }
        }
      }
    ];

    const data = [
      [
        "1",
        "Senthil",
        "534534534",
        "Palampatty",
        "3",
        1000,
        "OK",
        ""
      ],
      [
        "2",
        "selvaraj",
        "534534534",
        "Seeragapady",
        "20",
        1070,
        "OK",
        ""
      ],
      [
        "3",
        "Saravana",
        "534534534",
        "KPalayam",
        "10",
        10000,
        "OK",
        ""
      ],
      [
        "4",
        "gopi",
        "534534534",
        "Elampillai",
        "8",
        1500,
        "OK",
        ""
      ],

    ];


    const options = {
      filter: true,
      filterType: "dropdown",
      responsive: "scroll",
      selectableRows: true,
      downloadOptions: {
        filename: 'excel-format.csv',
        filterOptions: {
          useDisplayedColumnsOnly: true,
          useDisplayedRowsOnly: true,
        }
    }

    };


    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb routeSegments={[{ name: "Users List" }]} />
        </div>


        <MUIDataTable
        title={"Users List"}
        data={data}
        columns={columns}
        options={options}
      />
      </div>

    );

  }
}

export default UsersList;
