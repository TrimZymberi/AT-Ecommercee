import { lazy } from "react";

const CustomerHome = lazy(() => import("../../../layouts/Customer/views/Home"));
const OrderHistory = lazy(() =>
  import("../../../layouts/Customer/views/OrderHistory")
);
const Checkout = lazy(() => import("../../../layouts/Customer/views/Checkout"));
const Profile = lazy(() => import("../../../layouts/Customer/views/Profile"));
const Order = lazy(() => import("../../../layouts/Customer/views/Order"));

export { CustomerHome, OrderHistory, Checkout, Profile, Order };
