import { EgretLoadable } from "egret";

const CrudTable = EgretLoadable({
  loader: () => import("./CrudTable")
});

const crudRoute = [
  {
    path: "/crud-table",
    exact: true,
    component: CrudTable
  }
];

export default crudRoute;
