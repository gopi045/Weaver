import { EgretLoadable } from "egret";

const EgretCalendar = EgretLoadable({
  loader: () => import("./EgretCalendar")
});

const calendarRoutes = [
  {
    path: "/calendar",
    exact: true,
    component: EgretCalendar
  }
];

export default calendarRoutes;
