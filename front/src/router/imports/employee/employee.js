import { lazy } from "react";
const ManageOrder = lazy(() =>
  import("../../../layouts/Employee/views/ManageOrder")
);
const EmployeeDashboard = lazy(() =>
  import("../../../layouts/Employee/views/Dashboard")
);

export { ManageOrder, EmployeeDashboard };
