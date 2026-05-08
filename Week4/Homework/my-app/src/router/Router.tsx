import { createBrowserRouter } from "react-router";
import Login from "../pages/login/LoginPage";
import SignUp from "../pages/sign-up/SIgnUpPage";
import MyPage from "../pages/my-page/MyPage";
import SearchMember from "../pages/search-member/SearchMember";
import MemberDetail from "../pages/member-detail/MemberDetail";

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
    },
    {
        path: "/members",
        Component: SearchMember
    },
    {
        path: "/members/:id",
        Component: MemberDetail
    }
])

export default router;