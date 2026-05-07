import { createBrowserRouter } from "react-router";
import Login from "../pages/login/LoginPage";
import SignUp from "../pages/sign-up/SIgnUpPage";
import MyPage from "../pages/my-page/MyPage";
import SearchMember from "../pages/search-member/SearchMember";

const router = createBrowserRouter([
    {
        path: "/",
        Component: SearchMember
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
    },
        {
        path: "/members",
        Component: SearchMember
    }
])

export default router;