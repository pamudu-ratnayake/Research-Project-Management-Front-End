import httpService from "../../services/axiosService/httpService";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link ,useHistory} from "react-router-dom";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  //  Validation Schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("*Invalid email!")
      .required("*Please Enter Email!"),
    password: Yup.string().required("*Please Enter Password!"),
  });

  let history = useHistory();

  const onSubmit = (values) => {
    httpService
      .postAxios("/auth-user/login", values)
      .then((res) => {
        console.log(res.data);

        localStorage.setItem("profile", JSON.stringify(res.data));
        const user = JSON.parse(localStorage.getItem("profile"));
        console.log(user?.result?.user_type);
        if (user?.result?.user_type === "Student") {
          history.push({
            pathname: `/student`,
          });
        }
        if (user?.result?.user_type === "Staff") {
          history.push({
            pathname: `/staff`,
          });
        }
        if (user?.result?.user_type === "Admin") {
          history.push({
            pathname: `/admin`,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-white shadow border-0">
          <CardHeader className="bg-transparent pb-5">
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">

            <Form onSubmit={formik.handleSubmit}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    name="email"
                    placeholder="Email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                </InputGroup>
                {formik.touched.email && formik.errors.email ? (
                  <div style={{ color: "red" }}>{formik.errors.email}</div>
                ) : null}
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    name="password"
                    placeholder="Password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                </InputGroup>
                {formik.touched.password && formik.errors.password ? (
                  <div style={{ color: "red" }}>{formik.errors.password}</div>
                ) : null}
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="my-4" color="primary" type="submit">
                  Log in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text"
              href="#pablo"
            >
              <p >Forgot password?</p>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <Link to="/auth/register-all">
            <a
              className="text"
              href="#pablo"
              >
              <p>Create new account</p>
            </a>
              </Link>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
