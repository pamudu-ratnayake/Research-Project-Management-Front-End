import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

import routes from "../routes.js";

const AuthLayout = (props) => {
	const mainContent = React.useRef(null);
	const location = useLocation();

	React.useEffect(() => {
		document.body.classList.add("bg-primary");
		return () => {
			document.body.classList.remove("bg-primary");
		};
	}, []);
	React.useEffect(() => {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
		mainContent.current.scrollTop = 0;
	}, [location]);

	const getRoutes = (routes) => {
		return routes.map((prop, key) => {
			if (prop.layout === "/auth") {
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

	return (
		<>
			<div className="main-content" ref={mainContent}
			        style={{
						minHeight: "1000px",
						backgroundImage:
						  "url(" + require("../assets/img/auth3.png") + ")",
						backgroundSize: "cover",
						backgroundPosition: "center top",
					  }}
					  >
						          {/* <span className="mask bg-gradient-success opacity-2" /> */}
				{/* <AuthNavbar /> */}
				<div className="header  py-7 py-lg-8">
					<Container>
						<div className="header-body text-center mt-7">
							<Row className="justify-content-center">
								<Col lg="5" md="6">
									<br/><br/>
									<h1 className="text">Welcome To The Research Management!</h1>
								</Col>
							</Row>
						</div>
					</Container>

				</div>
				{/* Page content */}
				<Container className="mt-4 pb-5">
					<Row className="justify-content-center">
						<Switch>
							{getRoutes(routes)}
							<Redirect from="*" to="/auth/login" />
						</Switch>
					</Row>
				</Container>
			{/* <AuthFooter /> */}
			</div>
		</>
	);
};

export default AuthLayout;
