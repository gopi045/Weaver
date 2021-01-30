import { EgretLoadable } from "egret";

const AppMap = EgretLoadable({
  loader: () => import("./AppMap")
});

const mapRoutes = [
  {
    path: "/map",
    component: AppMap
  }
];

export default mapRoutes;
