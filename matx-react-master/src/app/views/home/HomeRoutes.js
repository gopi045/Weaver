import { EgretLoadable } from "egret";

const Landing1 = EgretLoadable({
  loader: () => import("./Landing1")
});

const homeLayoutSettings = {
  layout1Settings: {
    mode: "full",
    leftSidebar: { show: false, mode: "closed" },
    topbar: { show: false },
  },
  perfectScrollbar: false,
  footer: { show: false }
}

const homeRoutes = [
  {
    path: "/landing1",
    component: Landing1,
    settings: homeLayoutSettings
  }
];

export default homeRoutes;
