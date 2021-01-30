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
import MUIDataTable from "mui-datatables";
import Done from "@material-ui/icons/Done";
import Error from "@material-ui/icons/Error";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from '@material-ui/icons/Edit';
import { getAllUser, deleteUser } from "./TableService";
import MemberEditorDialog from "./MemberEditorDialog";
import { Breadcrumb, ConfirmationDialog } from "egret";
import shortid from "shortid";

class CrudTable extends Component {
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
      { name: "Deployment ID" },
      { name: "Application" },
      "Configuration",
      "Version ",
      "Last Deployed",
      "Approval",
      "Operation",
      {
        name: "Health",
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
        "78r9-2d34-asd2342fxsdfs3",
        "kelaForecast",
        "Production",
        1.5,
        "10/28/2018",
        "Approved",
        "Complete",
        "OK",
        ""
      ],
      [
        "78r9-2d34-asd2342fxsdfs3",
        "kelaForecast",
        "Test",
        1.5,
        "10/28/2018",
        "New Version Pending",
        "Error",
        "Failing",
        "Bad"
      ],
      [
        "78r9-2d34-asd2342fxsdfs3",
        "InnerVision",
        "Production",
        2.0,
        "10/31/2018",
        "Approved",
        "Complete",
        "OK",
        ""
      ],
      [
        "78r9-2d34-asd2342fxsdfs3",
        "InnerVision",
        "Test",
        2.1,
        "10/31/2018",
        "Approved",
        "In Progress",
        "OK",
        ""
      ],
      [
        "78r9-2d34-asd2342fxsdfs3",
        "OncoKnowledge",
        "Production",
        1.0,
        "10/29/2018",
        "Approved",
        "Complete",
        "OK",
        ""
      ],
      [
        "78r9-2d34-asd2342fxsdfs3",
        "OncoKnowledge",
        "Test",
        1.12,
        "10/28/2018",
        "New Version Pending",
        "Error",
        "Failing",
        "Bad"
      ]
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
          <Breadcrumb routeSegments={[{ name: "CRUD Table" }]} />
        </div>

        <Button
          className="mb-16"
          variant="contained"
          color="primary"
          onClick={() => this.setState({ shouldOpenEditorDialog: true })}
        >
          Add New Member
        </Button>
        <Card className="w-100 overflow-auto" elevation={6}>
        <MUIDataTable
        title={"Deployments"}
        data={data}
        columns={columns}
        options={options}
      />
          {/* <Table className="crud-table" style={{ whiteSpace: "pre", minWidth: "750px" }}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Balance</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user, index) => (
                  <TableRow key={shortid.generate()}>
                    <TableCell className="px-0" align="left">
                      {user.name}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {user.age}
                    </TableCell>
                    <TableCell className="px-0">${user.balance}</TableCell>
                    <TableCell className="px-0" align="left">
                      {user.company}
                    </TableCell>
                    <TableCell className="px-0">
                      {user.isActive ? (
                        <small className="border-radius-4 bg-primary text-white px-8 py-2 ">
                          active
                        </small>
                      ) : (
                        <small className="border-radius-4 bg-light-gray px-8 py-2 ">
                          inactive
                        </small>
                      )}
                    </TableCell>
                    <TableCell className="px-0 border-none">
                      <IconButton
                        onClick={() =>
                          this.setState({
                            uid: user.id,
                            shouldOpenEditorDialog: true
                          })
                        }
                      >
                        <Icon color="primary">edit</Icon>
                      </IconButton>
                      <IconButton onClick={() => this.handleDeleteUser(user)}>
                        <Icon color="error">delete</Icon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>

          <TablePagination
            className="px-16"
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={userList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              "aria-label": "Previous Page"
            }}
            nextIconButtonProps={{
              "aria-label": "Next Page"
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.setRowsPerPage}
          /> */}

          {shouldOpenEditorDialog && (
            <MemberEditorDialog
              handleClose={this.handleDialogClose}
              open={shouldOpenEditorDialog}
              uid={this.state.uid}
            />
          )}
          {shouldOpenConfirmationDialog && (
            <ConfirmationDialog
              open={shouldOpenConfirmationDialog}
              onConfirmDialogClose={this.handleDialogClose}
              onYesClick={this.handleConfirmationResponse}
              text="Are you sure to delete?"
            />
          )}
        </Card>
      </div>
    );
  }
}

export default CrudTable;
