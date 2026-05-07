import { createBrowserRouter } from "react-router";
import Login from "../pages/login/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Login
    }
])

export default router;