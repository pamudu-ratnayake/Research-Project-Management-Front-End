import Dashboard from "./views/Dashboard";
import Test from "./views/Test";

var routes = [
    {
        path: "/my-dashboard",
        name: "Dashboard",
        component: Dashboard,
        layout: "/dashboard"
    },
    {
        path: "/test",
        name: "Test",
        component: Test,
        layout: "/dashboard"
    },
];

export default routes;