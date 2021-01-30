import { EgretLoadable } from "egret";

const AppList = EgretLoadable({
  loader: () => import("./AppList")
});

const InfiniteList = EgretLoadable({
  loader: () => import("./InfiniteList")
});

const ListRoute = [
  {
    path: "/egret-list",
    exact: true,
    component: AppList
  },
  {
    path: "/infinite-scroll",
    exact: true,
    component: InfiniteList
  }
];

export default ListRoute;
