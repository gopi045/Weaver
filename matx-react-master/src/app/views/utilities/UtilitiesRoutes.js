import {EgretLoadable} from "egret";

const Color = EgretLoadable({
  loader: () => import("./Color")
});
const Spacing = EgretLoadable({
  loader: () => import("./Spacing")
});
const Typography = EgretLoadable({
  loader: () => import("./Typography")
});
const Display = EgretLoadable({
  loader: () => import("./Display")
});

const utilitiesRoutes = [
  {
    path: '/utilities/color',
    component: Color
  },
  {
    path: "/utilities/spacing",
    component: Spacing
  },
  {
    path: "/utilities/typography",
    component: Typography
  },
  {
    path: "/utilities/display",
    component: Display
  },
]

export default utilitiesRoutes;