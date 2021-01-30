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
import AddIcon from "@material-ui/icons/Add";
import MUIDataTable,{ ExpandButton, TableViewCol } from "mui-datatables";
import Done from "@material-ui/icons/Done";
import Error from "@material-ui/icons/Error";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from '@material-ui/icons/Edit';
import { getAllUser, deleteUser } from "./UserService";
import AddPowerLoom from "./AddPowerLoom";
import { Breadcrumb, ConfirmationDialog } from "egret";
import { Link as RouterLink } from 'react-router-dom';
import shortid from "shortid";

class ViewUser extends Component {
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
      { name: "PL Id" },
      { name: "PL No" },
      "Product Name",
      "Total Saree",
      "Total Amount",
      "Total  1 Kg",
      "Total  2 Kg",
      {
        name: "Status",
        options: {
          customBodyRender: (value, tableMeta, updateValue) => {
            if (value === "Active")
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
              component={RouterLink} to="/powerloom-details"
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
        "1",
        "Rani Yellow",
        100,
        1000,
        7,
        8,
        "Active",
        ""
      ],
      [
        "78r9-2d34-asd2342fxsdfs3",
        "1",
        "Rani Yellow",
        100,
        1000,
        7,
        8,
        "Active",
        ""
      ],
      [
        "78r9-2d34-asd2342fxsdfs3",
        "1",
        "Rani Yellow",
        100,
        1000,
        7,
        8,
        "Active",
        ""
      ],
      [
        "78r9-2d34-asd2342fxsdfs3",
        "1",
        "Rani red",
        180,
        10000,
        2,
        4,
        "Active",
        ""
      ]
      ];

      var act = [];
      var i = 0;

    const options = {
      filter: true,
      filterType: "dropdown",
      responsive: "scroll",
      selectableRows: false,
      downloadOptions: {
        filename: 'excel-format.csv',
        filterOptions: {
          useDisplayedColumnsOnly: true,
          useDisplayedRowsOnly: true,
        }
    },
    customToolbar: () => {
        return (
            <React.Fragment>
            <Tooltip title={"Add icon"}>
              <IconButton  onClick={() => this.setState({ shouldOpenEditorDialog: true })}>
                <AddIcon />
              </IconButton>
            </Tooltip>
          </React.Fragment>
        );
      },
      expandableRows: true,
      expandableRowsHeader: false,
      expandableRowsOnClick: true,
      onViewColumnsChange: (rowData, rowMeta) => {
        // col[i]=rowData;
        act[rowData] = rowMeta;
        i++;
        console.log(rowMeta);
      },
      isRowExpandable: (dataIndex, expandedRows) => {
        //if (dataIndex === 3 || dataIndex === 4) return false;

        // Prevent expand/collapse of any row if there are 4 rows expanded already (but allow those already expanded to be collapsed)
        // if (
        //   expandedRows.data.length > 4 &&
        //   expandedRows.data.filter((d) => d.dataIndex === dataIndex).length ===
        //     0
        // )
        //   return false;
        return true;
      },
      renderExpandableRow: (rowData, rowMeta) => {
        // console.log(this.props);
        const varpuData =[1,"Rani Gold",100, "01/02/2021", 10,2,1000]
        console.log(rowData);
        //return setTimeout(() => fff(act, rowData), 100)
        return (
          <TableRow>
            <TableCell></TableCell>
            {act["Name"] == "add" || act["Name"] == undefined ? (
              <TableCell>{varpuData[0]}</TableCell>
            ) : null}
            <TableCell>{varpuData[1]}</TableCell>
            <TableCell>{varpuData[2]}</TableCell>
            <TableCell>{varpuData[3]}</TableCell>
            <TableCell>{varpuData[4]}</TableCell>
            <TableCell>{varpuData[5]}</TableCell>
            <TableCell>{varpuData[6]}</TableCell>
            <TableCell>{rowData[7]}</TableCell>
            <TableCell>{rowData[8]}</TableCell>
          </TableRow>
        );
      }
    };


    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb routeSegments={[
              { name: "Users", path: "/user-list" },
              { name: "Power Looms" }]} />
        </div>


        <MUIDataTable
        title={"Power Looms"}
        data={data}
        columns={columns}
        options={options}
      />
      {shouldOpenEditorDialog && (
            <AddPowerLoom
              handleClose={this.handleDialogClose}
              open={shouldOpenEditorDialog}
              uid={this.state.uid}
            />
          )}
      </div>

    );

  }
}

export default ViewUser;
