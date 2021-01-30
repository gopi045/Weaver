import { EgretLoadable } from "egret";

const Pricing = EgretLoadable({
  loader: () => import("./Pricing")
});

const otherRoutes = [
  {
    path: "/others/pricing",
    component: Pricing
  }
];

export default otherRoutes;
