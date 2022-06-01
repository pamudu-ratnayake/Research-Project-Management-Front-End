import Dashboard from "./views/Dashboard";
import Test from "./views/Test";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import PublishSubmitLinks from "./views/admin/PublishSubmitLinks";
import CreatePanel from "./views/admin/CreatePanel";

var routes = [
    {
        path: "/my-dashboard",
        name: "Dashboard",
        component: Dashboard,
        layout: "/dashboard"
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        layout: "/dashboard"
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        layout: "/dashboard"
    },
    {
        path: "/test",
        name: "Test",
        component: Test,
        layout: "/dashboard"
    },
    {
        path: "/publishlinks",
        name: "Publish Links",
        component: PublishSubmitLinks,
        layout: "/dashboard"
    },
    {
        path: "/create-panel",
        name: "Create Panel",
        component: CreatePanel,
        layout: "/dashboard"
    },
];

export default routes;