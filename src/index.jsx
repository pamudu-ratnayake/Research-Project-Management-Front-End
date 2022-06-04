// import Dashboard from "./views/Dashboard";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// const Index = (props) => {

//     return(
//         <>
//         <Router>
//             <Switch>
//                 <Route path="/" exact component={Dashboard} />
//             </Switch>
//         </Router>
//         </>
//     );
// }

// export default Index;

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "./layouts/Admin.jsx";
import AuthLayout from "./layouts/Auth.jsx";
import StaffLayout from "./layouts/Staff.jsx";
import StudentLayout from "./layouts/Student.jsx";

import AdminDasboard from "./views/AdminDashboard.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/plugins/nucleo/css/nucleo.css";

// import "assets/plugins/nucleo/css/nucleo.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "assets/scss/argon-dashboard-react.scss";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/student" render={(props) => <StudentLayout {...props} />} />
        <Route path="/staff" render={(props) => <StaffLayout {...props} />} />
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Redirect from="/" to="/auth/login" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("index")
);
