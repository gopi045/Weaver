import { EgretLoadable } from "egret";

const AppChat = EgretLoadable({
  loader: () => import("./AppChat")
});

const chatRoutes = [
  {
    path: "/chat",
    component: AppChat
  }
];

export default chatRoutes;
