import { EgretLoadable } from "egret";
import { authRoles } from "../../auth/authRoles";

const Shop = EgretLoadable({
  loader: () => import("./Shop")
});

const Cart = EgretLoadable({
  loader: () => import("./Cart")
});

const Checkout = EgretLoadable({
  loader: () => import("./Checkout")
});

const ecommerceRoutes = [
  {
    path: "/ecommerce/shop",
    component: Shop,
    auth: authRoles.admin
  },
  {
    path: "/ecommerce/cart",
    component: Cart,
    auth: authRoles.admin
  },
  {
    path: "/ecommerce/checkout",
    component: Checkout,
    auth: authRoles.admin
  },
];

export default ecommerceRoutes;
