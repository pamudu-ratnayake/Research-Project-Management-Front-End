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
import Dasboard from "./views/Dashboard";

import 'bootstrap/dist/css/bootstrap.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

// import "assets/plugins/nucleo/css/nucleo.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "assets/scss/argon-dashboard-react.scss";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/dashboard" render={(props) => <AdminLayout {...props} />} />
        <Redirect from="/" to="/dashboard/my-dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("index")
);
