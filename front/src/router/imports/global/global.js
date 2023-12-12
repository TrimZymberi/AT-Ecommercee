import { lazy } from "react";
import LazyLoading from "../../loader/LazyLoader";
const DriverDashboard = lazy(() =>
  import("../../../layouts/Driver/views/Dashboard")
);
const AboutUs = lazy(() => import("../../../layouts/Universal/views/AboutUs"));
const NotFound = lazy(() => import("../../../layouts/NotFound"));
export { DriverDashboard, NotFound, AboutUs, LazyLoading };
