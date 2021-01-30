import { EgretLoadable } from "egret";

const InvoiceList = EgretLoadable({
  loader: () => import("./InvoiceList")
});

const InvoiceDetails = EgretLoadable({
  loader: () => import("./InvoiceDetails")
});

const invoiceRoutes = [
  {
    path: "/invoice/list",
    exact: true,
    component: InvoiceList
  },
  // {
  //     path: "/invoice/add",
  //     exact: true,
  //     component: InvoiceDetails
  // },
  {
    path: "/invoice/:id",
    component: InvoiceDetails
  },
  {
    path: "/invoice/edit/:id",
    component: InvoiceList
  }
];

export default invoiceRoutes;
