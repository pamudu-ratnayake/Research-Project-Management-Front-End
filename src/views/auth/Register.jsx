import { useFormik } from "formik";
import { useHistory } from "react-router";
import * as Yup from "yup";
import httpService from "../../services/axiosService/httpService";

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

const Register = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    conPassword: "",
    user_type: "Student",
    reg_no: "",
    faculty: "",
  };

  const validationSchema = Yup.object({
    // firstName: Yup.string().required("*Required!"),
    // lastName: Yup.string().required("*Required!"),
    // email: Yup.string().email("*Invalid email!").required("*Required!"),
    // password: Yup.string().required("*Required!"),
    // conPassword: Yup.string().required("*Required!"),
    // reg_no: Yup.string().required("*Required!"),
    // faculty: Yup.string().required("*Required!"),
  });

  const onSubmit = (values) => {
    console.log('triggered');
    httpService.postAxios(`/auth-user/signup`, values)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    })
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-white shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-4">
              <small>Sign up with</small>
            </div>
            <div className="text-center">
              <Button
                className="btn-neutral btn-icon mr-4"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                {/* <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={
                        require("../../assets/img/icons/common/github.svg")
                          .default
                      }
                    />
                  </span> */}
                <span className="btn-inner--text">Github</span>
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                {/* <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={
                        require("../../assets/img/icons/common/google.svg")
                          .default
                      }
                    />
                  </span> */}
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign up with credentials</small>
            </div>
            <Form onSubmit={formik.handleSubmit}>
              <Row>
                <Col>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-circle-08" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="firstName"
                        placeholder="First Name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                      />
                    </InputGroup>
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div style={{ color: "red" }}>
                        {formik.errors.firstName}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          {/* <i className="ni ni-circle-08" /> */}
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="lastName"
                        placeholder="Last Name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                      />
                    </InputGroup>
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div style={{ color: "red" }}>
                        {formik.errors.lastName}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          {/* <i className="ni ni-hat-3" /> */}
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="reg_no"
                        placeholder="Regidtration Number"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.reg_no}
                      />
                    </InputGroup>
                    {formik.touched.reg_no && formik.errors.reg_no ? (
                      <div style={{ color: "red" }}>{formik.errors.reg_no}</div>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          {/* <i className="ni ni-circle-08" /> */}
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="faculty"
                        placeholder="Faculty"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.faculty}
                      />
                    </InputGroup>
                    {formik.touched.faculty && formik.errors.faculty ? (
                      <div style={{ color: "red" }}>
                        {formik.errors.faculty}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      {/* <i className="ni ni-email-83" /> */}
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
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      {/* <i className="ni ni-lock-circle-open" /> */}
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
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      {/* <i className="ni ni-lock-circle-open" /> */}
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    name="con_password"
                    placeholder="Confirm Password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.con_password}
                  />
                </InputGroup>
                {formik.touched.con_password && formik.errors.con_password ? (
                  <div style={{ color: "red" }}>
                    {formik.errors.con_password}
                  </div>
                ) : null}
              </FormGroup>
              <div className="text-muted font-italic">
                <small>
                  password strength:{" "}
                  <span className="text-success font-weight-700">strong</span>
                </small>
              </div>
              <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">
                        I agree with the{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>
                </Col>
              </Row>
              <div className="text-center">
                <Button className="mt-4" color="primary" type="submit">
                  Create account
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
