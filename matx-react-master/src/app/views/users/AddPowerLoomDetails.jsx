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
import MUIDataTable from "mui-datatables";
import Done from "@material-ui/icons/Done";
import Error from "@material-ui/icons/Error";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from '@material-ui/icons/Edit';
import { getAllUser, deleteUser } from "./UserService";
import AddPowerLoom from "./AddPowerLoom";
import { Breadcrumb, ConfirmationDialog } from "egret";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { classList } from "utils";
import shortid from "shortid";

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
});




class AddPowerLoomDetails extends Component {
  state = {
    rowsPerPage: 10,
    page: 0,
    userList: [],
    shouldOpenEditorDialog: false,
    shouldOpenConfirmationDialog: false,
    value: 0
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
  handleChange = (event, value) => {
    this.setState({ value });
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
    const { classes } = this.props;
    const { value } = this.state;

    const paymentColumns = [
      { name: " Payment Id" },
       "Bank Name" ,
      "IFSC Code",
      "Date",
      "Method",
      "Saree",
      "Amount",

        {
        name: "Status",
        options: {
          customBodyRender: (value, tableMeta, updateValue) => {
            return(
            <small
                      className={classList({
                        "border-radius-4  text-white px-8 py-2": true,
                        "bg-green": value === 'paid',
                        "bg-secondary": value === 'pending',
                        "bg-error": value === 'unpaid',
                      })}
                    >
                      {value}
                    </small>
            )
          }
        }
      }
    ];

    const PaymentsData = [
      [
        "1",
        "Indian Bank",
        "V000036",
        "27/01/2021",
        "IMPS",
        8,
        10000,
        "paid",
        ""
      ],
      [
        "1",
        "Indian Bank",
        "V000036",
        "27/01/2021",
        "IMPS",
        10,
        10000,
        "unpaid",
        ""
      ],
      [
        "1",
        "Indian Bank",
        "V000036",
        "27/01/2021",
        "IMPS",
        15,
        10000,
        "pending",
        ""
      ],
      [
        "1",
        "Indian Bank",
        "V000036",
        "27/01/2021",
        "IMPS",
        6,
        10000,
        "paid",
        ""
      ],
      [
        "1",
        "Indian Bank",
        "V000036",
        "27/01/2021",
        "IMPS",
        9,
        10000,
        "paid",
        ""
      ],
      ];
      const coneColumns = [
         "Id" ,
         "Colour Name" ,
        "No",
        "Quality",
        "Type",
        "Date",
        "KG"
      ];
      const coneData = [
        [
          "1",
          "Red",
          "2",
          "100",
          "MST",
          "27/01/2021",
          1.6
        ]
      ]
      const jaraikaiColumns = [
        "Id" ,
        "Colour Name",
       "No",
       "Quality",
       "Type",
       "Date",
       "KG"
     ];
     const jarikaiData = [
       [
         "1",
         "Gold",
         "2",
         "100",
         "MST",
         "27/01/2021",
         1.6
       ]
     ]

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
      }
    };


    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb routeSegments={[
              { name: "Users", path: "/user-list" },
              { name: "Power Looms" , path: "/view-user"},
              { name: "Power Looms Details" }]} />
        </div>
        <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={this.handleChange} aria-label="ant example">
          <AntTab label="Payemts" />
          <AntTab label="Cone details" />
          <AntTab label="Jarikai details" />
        </AntTabs>

        <div key="tab-content">
        {value === 0 && <Typography>
        <MUIDataTable
        title={"Payments And add Sarees"}
        data={PaymentsData}
        columns={paymentColumns}
        options={options}
      />
      </Typography>}
        {value === 1 && <Typography>
        <MUIDataTable
        title={"Cone Materials"}
        data={coneData}
        columns={coneColumns}
        options={options}
      />
      </Typography>}
        {value === 2 && <Typography>
        <MUIDataTable
        title={"Jarikai"}
        data={jarikaiData}
        columns={jaraikaiColumns}
        options={options}
      />
      </Typography>}
      </div>
      </div>
    </div>


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

export default withStyles(useStyles) (AddPowerLoomDetails);
