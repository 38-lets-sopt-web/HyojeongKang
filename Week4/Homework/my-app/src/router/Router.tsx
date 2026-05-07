import { createBrowserRouter } from "react-router";
import Login from "../pages/login/LoginPage";
import SignUp from "../pages/sign-up/SIgnUpPage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: SignUp
    },
    {
        path: "/login",
        Component: Login
    }
])

export default router;