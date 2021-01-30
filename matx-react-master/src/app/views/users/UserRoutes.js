import { EgretLoadable } from "egret";

const UsersList = EgretLoadable({
  loader: () => import("./UsersList")
});

const AddUser = EgretLoadable({
  loader: () => import("./AddUser")
});
const ViewUser = EgretLoadable({
  loader: () => import("./ViewUser")
});
const AddPowerLoomDetails = EgretLoadable({
  loader:() => import("./AddPowerLoomDetails")
});

const UserRoutes = [
  {
    path: "/user-list",
    exact: true,
    component: UsersList
  },
  {
    path: "/add-user",
    exact: true,
    component: AddUser
  },
  {
    path: "/view-user",
    exact: true,
    component: ViewUser
  },
  {
    path: "/powerloom-details",
    exact: true,
    component: AddPowerLoomDetails
  }
];

export default UserRoutes;
