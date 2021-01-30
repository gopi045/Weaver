import { EgretLoadable } from "egret";

const AppTodo = EgretLoadable({
  loader: () => import("./AppTodo")
});

const todoRoutes = [
  {
    path: "/todo/list",
    component: AppTodo
  }
];

export default todoRoutes;
