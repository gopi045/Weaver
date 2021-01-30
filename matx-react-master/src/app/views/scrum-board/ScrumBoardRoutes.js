import { EgretLoadable } from "egret";

const AppScrumBoard = EgretLoadable({
  loader: () => import("./AppScrumBoard")
});

const Board = EgretLoadable({
  loader: () => import("./Board")
});

const scrumBoardRoutes = [
  {
    path: "/scrum-board/:id",
    component: Board
  },
  {
    path: "/scrum-board",
    component: AppScrumBoard
  }
];

export default scrumBoardRoutes;
