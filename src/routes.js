import AdminDashboard from "./views/AdminDashboard";
import StaffDashboard from "./views/StaffDashboard";
import StudentDashboard from "./views/StudentDashboard";
import AllSignUps from "./views/auth/AllSignUps";
import Login from "./views/auth/Login";
import StudentRegister from "./views/auth/StudentRegister";
import StaffRegister from "./views/auth/StaffRegister";
import PublishSubmitLinks from "./views/admin/PublishSubmitLinks";
import CreatePanel from "./views/admin/CreatePanel";
import ViewPanels from "./views/admin/ViewPanels";
import ViewAllSubmitLinks from "./views/admin/ViewAllSubmitLinks";
import UploadTemplates from "./views/admin/UploadTemplates";
import CreateMarking from "./views/admin/CreateMarking";
import MyResearchTopics from "./views/StaffManagement/MyResearchTopics";

import RegisterGroup from "./views/StudentManagement/RegisterGroup";
import TopicSubmit from "./views/StudentManagement/TopicSubmit";
import StudentProfile from "./views/StudentManagement/StudentProfile";
import StudentUpdate from "./views/StudentManagement/StudentUpdate";
import MarkingSchemes from "./views/StaffManagement/MarkingSchemes";

import AddStaffDetails from "./views/StaffManagement/AddStaffDetails";
import UpdateStaffMemberDetails from "./views/StaffManagement/UpdateStaffMemberDetails";
import DisplayStaffMemberDetails from "./views/StaffManagement/DisplayStaffMemberDetails";
import Topics from "./views/StaffManagement/Topics";


var routes = [
    {
        path: "/admin-dashboard",
        name: "Dashboard",
        component: AdminDashboard,
        icon: "ni ni-tv-2 text-primary",
        layout: "/admin"
    },
    {
        path: "/staff-dashboard",
        name: "Dashboard",
        component: StaffDashboard,
        layout: "/staff"
    },
    {
        path: "/allTopic-list",
        name: "Topic List",
        component: Topics,
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
        layout: "/staff"
    },
    {
        path: "/myresearch-topics",
        name: "My Research Topics",
        component: MyResearchTopics,
        layout: "/staff"
    },
    {
        path: "/marking-schemes",
        name: "Marking Schemes",
        component: MarkingSchemes,
        layout: "/staff"
    },
    {
        path: "/update-staff-details",
        name: "Update Staff Details",
        component: UpdateStaffMemberDetails,
        layout: "/staff"
    },
    {
        path: "/publishlinks",
        name: "Publish Links",
        component: PublishSubmitLinks,
        layout: "/admin"
    },
    {
        path: "/viewlinks",
        name: "All Published Links",
        component: ViewAllSubmitLinks,
        layout: "/admin"
    },
    {
        path: "/create-panel",
        name: "Create Panel",
        component: CreatePanel,
        layout: "/admin"
    },
    {
        path: "/viewAll-panels",
        name: "All Panel",
        component: ViewPanels,
        layout: "/admin"
    },
    {
        path: "/upload-template",
        name: "Upload Templates",
        component: UploadTemplates,
        layout: "/admin"
    },
    {
        path: "/create-marking",
        name: "Create Marking",
        component: CreateMarking,
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
