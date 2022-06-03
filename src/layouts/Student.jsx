import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "../components/Navbars/AdminNavbar";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

import routes from "../routes";

const StudentLayout = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/student") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
    <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
      <Sidebar
        {...props}
        routes={routes}
        // logo={{
        //   innerLink: "/admin/dashboard",
        //   imgSrc: require("../assets/img/brand/argon-react.png").default,
        //   imgAlt: "...",
        // }}
      />
      <div className="main-content" ref={mainContent}>
        {/* <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        /> */}
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/student/student-dashboard" />
        </Switch>
        <Container fluid>
          {/* <AdminFooter /> */}
        </Container>
      </div>
    </>
  );
};

export default StudentLayout;
