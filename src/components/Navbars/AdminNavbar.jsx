import { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
// import decode from "jwt-decode"

// reactstrap components
import { DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Form, FormGroup, InputGroupAddon, InputGroupText, Input, InputGroup, Navbar, Nav, Container, Media } from "reactstrap";

const AdminNavbar = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [customer, setCustomer] = useState("");

  console.log(user);

  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    history.push("/auth");
    localStorage.clear();
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      // const decodedToken = decode(token);
      // if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));

  }, []);

  return (
    <>
<Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" to="/">
            {props.brandText}
          </Link>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    {/* <img alt="..." src={customer && customer.prof_img} /> */}
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">Pamudu</span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </DropdownItem>

                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-user-run" />
                  <span
                    onClick={() => {
                      logout();
                    }}
                  >
                    Logout
                  </span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
