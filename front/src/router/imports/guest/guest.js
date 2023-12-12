import { lazy } from "react";
const Login = lazy(() => import("../../../layouts/Guest/views/Login"));
const Signup = lazy(() => import("../../../layouts/Guest/views/Signup"));
import GuestHome from "../../../layouts/Guest/views/Home";

export { Login, Signup, GuestHome };
