import AdminDashboard from "./views/AdminDashboard";
import StaffDashboard from "./views/StaffDashboard";
import StudentDashboard from "./views/StudentDashboard";
import AllSignUps from "./views/auth/AllSignUps";
import Test from "./views/Test";
import Login from "./views/auth/Login";
import StudentRegister from "./views/auth/StudentRegister";
import StaffRegister from "./views/auth/StaffRegister";
import PublishSubmitLinks from "./views/admin/PublishSubmitLinks";
import CreatePanel from "./views/admin/CreatePanel";
import RegisterGroup from "./views/StudentManagement/RegisterGroup";
import TopicSubmit from "./views/StudentManagement/TopicSubmit";
import StudentProfile from "./views/StudentManagement/StudentProfile";
import StudentUpdate from "./views/StudentManagement/StudentUpdate";
import AddStaffDetails from "./views/StaffManagement/AddStaffDetails";
import UpdateStaffMemberDetails from "./views/StaffManagement/UpdateStaffMemberDetails";
import DisplayStaffMemberDetails from "./views/StaffManagement/DisplayStaffMemberDetails";


var routes = [
    {
        path: "/admin-dashboard",
        name: "Dashboard",
        component: AdminDashboard,
        layout: "/admin"
    },
    {
        path: "/staff-dashboard",
        name: "Dashboard",
        component: StaffDashboard,
        layout: "/staff"
    },
    {
        path: "/student-dashboard",
        name: "Dashboard",
        component: StudentDashboard,
        layout: "/student"
    },
    {
        path: "/register-all",
        name: "Dashboard",
        component: AllSignUps,
        layout: "/auth"
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        layout: "/auth"
    },
    {
        path: "/student-register",
        name: "Register",
        component: StudentRegister,
        layout: "/auth"
    },
    {
        path: "/staff-register",
        name: "Register",
        component: StaffRegister,
        layout: "/auth"
    },
    {
        path: "/add-staff-details",
        name: "Add Staff Details",
        component: AddStaffDetails,
        layout: "/dashboard"
    },
    {
        path: "/display-staff-details",
        name: "Display Staff Details",
        component: DisplayStaffMemberDetails,
        layout: "/dashboard"
    },
    {
        path: "/update-staff-details",
        name: "Update Staff Details",
        component: UpdateStaffMemberDetails,
        layout: "/dashboard"
    },
    {
        path: "/test",
        name: "Test",
        component: Test,
        layout: "/admin"
    },
    {
        path: "/publishlinks",
        name: "Publish Links",
        component: PublishSubmitLinks,
        layout: "/admin"
    },
    {
        path: "/create-panel",
        name: "Create Panel",
        component: CreatePanel,
        layout: "/admin"
    },
    {
        path: "/registerGroup",
        name: "Register Group",
        component: RegisterGroup,
        layout: "/student"
    },
  {
    path: "/topicSubmit",
    name: "Topic Submit",
    component: TopicSubmit,
    layout: "/student",
  },
  {
    path: "/studentProfile",
    name: "Student Profile",
    component: StudentProfile,
    layout: "/student",
  },
  {
    path: "/studentUpdate",
    name: "Student Update",
    component: StudentUpdate,
    layout: "/student",
  },
];

export default routes;
