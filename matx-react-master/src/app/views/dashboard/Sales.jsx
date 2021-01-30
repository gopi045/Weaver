import React, { Component, Fragment } from "react";
import {
  Grid,
  IconButton,
  Icon,
  Card,
  Divider,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";
import { Breadcrumb, SimpleCard, CardWidget1 } from "egret";
import DoughnutChart from "../charts/echarts/Doughnut";
import ComparisonChart from "../charts/echarts/ComparisonChart";
import { withStyles } from "@material-ui/styles";

class Sales extends Component {
  state = {};
  productList = [
    {
      imgUrl: "/assets/images/products/headphone-2.jpg",
      name: "earphone",
      price: 100,
      delivered:10,
      available: 15
    },
    {
      imgUrl: "/assets/images/products/headphone-3.jpg",
      name: "earphone",
      price: 1500,
      delivered:80,
      available: 30
    },
    {
      imgUrl: "/assets/images/products/sq-11.jpg",
      name: "bulb",
      price: 1900,
      delivered:19,
      available: 35
    },
    {
      imgUrl: "/assets/images/products/iphone-1.jpg",
      name: "pen",
      price: 100,
      delivered:13,
      available: 0
    },
    {
      imgUrl: "/assets/images/products/headphone-3.jpg",
      name: "Head phone",
      price: 1190,
      delivered:11,
      available: 5
    }
  ];

  paymentList = [
    {
      img: "/assets/images/payment-methods/master-card.png",
      type: "Master Card",
      product: "Bundled product",
      amount: 909
    },
    {
      img: "/assets/images/payment-methods/paypal.png",
      type: "Paypal",
      product: "Bundled product",
      amount: 303
    },
    {
      img: "/assets/images/payment-methods/visa.png",
      type: "Visa",
      product: "Bundled product",
      amount: 330
    },
    {
      img: "/assets/images/payment-methods/maestro.png",
      type: "Maestro",
      product: "Bundled product",
      amount: 909
    },
    {
      img: "/assets/images/payment-methods/maestro.png",
      type: "Master Card",
      product: "Bundled product",
      amount: 909
    }
  ];

  render() {
    let { theme } = this.props;
    return (
      <div className="sales m-sm-30">
        <div className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Dashboard", path: "/" },
              { name: "Sales" }
            ]}
          />
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <CardWidget1 backgroundClass="bg-circle-primary" />
          </Grid>
          <Grid item xs={12} md={4}>
            <CardWidget1 backgroundClass="bg-circle-warn" />
          </Grid>
          <Grid item xs={12} md={4}>
            <CardWidget1 backgroundClass="bg-circle-secondary" />
          </Grid>

          {/* update starts from here */}
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <SimpleCard title="Productions vs Sales" subtitle="Last 6 months">
              <ComparisonChart
                height="350px"
                color={[
                  theme.palette.primary.main,
                  theme.palette.primary.light
                ]}
              />
            </SimpleCard>
          </Grid>

          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Card elevation={3} className="pt-20">
              <div className="card-title px-24 mb-12">Top selling sarees</div>
              <div className="overflow-auto">
                <Table className="product-table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="px-24" colSpan={4}>
                        Product Name
                      </TableCell>
                      <TableCell className="px-0" colSpan={2}>
                        Revenue
                      </TableCell>
                      <TableCell className="px-0" colSpan={2}>
                        Delivered Sarees
                      </TableCell>
                      <TableCell className="px-0" colSpan={2}>
                        In Stock Sarees
                      </TableCell>
                      <TableCell className="px-0" colSpan={1}>
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.productList.map((product, index) => (
                      <TableRow key={index}>
                        <TableCell
                          className="px-0 capitalize"
                          colSpan={4}
                          align="left"
                        >
                          <div className="flex flex-middle">
                            <img
                              className="circular-image-small"
                              src={product.imgUrl}
                              alt="user"
                            />
                            <p className="m-0 ml-8">{product.name}</p>
                          </div>
                        </TableCell>
                        <TableCell
                          className="px-0 capitalize"
                          align="left"
                          colSpan={2}
                        >

                          {product.price > 999
                            ? (product.price / 1000).toFixed(1) + "k"
                            : product.price}
                        </TableCell>
                        <TableCell className="px-0" align="left" colSpan={2}>
                          {
                              <small className="border-radius-4 bg-green text-white px-8 py-2 ">
                                {product.delivered} Delivered
                              </small>
                           }
                        </TableCell>
                        <TableCell className="px-0" align="left" colSpan={2}>
                          {product.available ? (
                            product.available < 20 ? (
                              <small className="border-radius-4 bg-secondary text-white px-8 py-2 ">
                                {product.available} available
                              </small>
                            ) : (
                              <small className="border-radius-4 bg-primary text-white px-8 py-2 ">
                                in stock
                              </small>
                            )
                          ) : (
                            <small className="border-radius-4 bg-error text-white px-8 py-2 ">
                              out of stock
                            </small>
                          )}
                        </TableCell>
                        <TableCell className="px-0" colSpan={1}>
                          <IconButton>
                            <Icon color="primary">edit</Icon>
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </Grid>

        </Grid>
      </div>
    );
  }
}

export default withStyles({}, { withTheme: true })(Sales);
