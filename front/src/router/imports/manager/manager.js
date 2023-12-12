import { lazy } from "react";

const Dashboard = lazy(() =>
  import("../../../layouts/Manager/views/Dashboard")
);
const CategoryList = lazy(() =>
  import("../../../layouts/Manager/views/CategoryList")
);
const ProductList = lazy(() =>
  import("../../../layouts/Manager/views/ProductList")
);
const OrderList = lazy(() =>
  import("../../../layouts/Manager/views/OrderList")
);
const ManagerPage = lazy(() =>
  import("../../../layouts/Manager/components/ManagerPage")
);
const UserList = lazy(() => import("../../../layouts/Manager/views/UserList"));

import ProductEdit from "../../../layouts/Manager/components/ProductEdit";
import ProductRegister from "../../../layouts/Manager/components/ProductRegister";
import CategoryRegister from "../../../layouts/Manager/components/CategoryRegister";
import CategoryEdit from "../../../layouts/Manager/components/CategoryEdit";
import UserCreate from "../../../layouts/Manager/components/UserCreate";
import UserEdit from "../../../layouts/Manager/components/UserEdit";
import OrderRegister from "../../../layouts/Manager/components/OrderRegister";

export {
  Dashboard,
  CategoryList,
  CategoryRegister,
  CategoryEdit,
  ProductList,
  ProductRegister,
  ProductEdit,
  OrderList,
  OrderRegister,
  ManagerPage,
  UserList,
  UserEdit,
  UserCreate,
};
