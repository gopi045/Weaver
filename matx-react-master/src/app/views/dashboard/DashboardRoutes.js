import { EgretLoadable } from "egret";
import { authRoles } from "../../auth/authRoles";

const LearningManagement = EgretLoadable({
  loader: () => import("./LearningManagement")
});
const Analytics = EgretLoadable({
  loader: () => import("./Analytics")
});
const Sales = EgretLoadable({
  loader: () => import("./Sales")
});

const dashboardRoutes = [
  {
    path: "/dashboard/sales",
    component: Sales,
    auth: authRoles.admin
  },
  // {
  //   path: "/dashboard/dashboard1",
  //   component: Dashboard1
  // },
  // {
  //   path: "/dashboard/learning-management",
  //   component: LearningManagement,
  //   auth: authRoles.admin
  // }
];

export default dashboardRoutes;
