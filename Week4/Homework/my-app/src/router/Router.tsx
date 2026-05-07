import { createBrowserRouter } from "react-router";
import Login from "../pages/login/LoginPage";
import SignUp from "../pages/sign-up/SIgnUpPage";
import MyPage from "../pages/my-page/MyPage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Login
    },
    {
        path: "/login",
        Component: Login
    },
    {
        path: "/signup",
        Component: SignUp
    },
        {
        path: "/mypage",
        Component: MyPage
    }
])

export default router;