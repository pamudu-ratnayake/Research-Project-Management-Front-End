// reactstrap components
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
  Label,
  option
} from "reactstrap";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Register = () => {
  //Validation
  const validationSchema = Yup.object({
    // Name: Yup.string().required("Required!"),
    // Registration_no: Yup.string().required("Required!"),
    // Faculty: Yup.string().required("Required!"),
    // Email: Yup.string().email("Invalid Email!").required("Required!"),
    // Password: Yup.string().required("Required"),
  });

  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    Name: "",
    Registration_no: "",
    Faculty: "",
    Email: "",
    Password: "",
  };

  const onSubmit = (values) => {
    console.log("form data", values);

    axios
      .post("http://localhost:8080/student/addStudentDetails", values)
      .then((res) => {
        console.log(res);
        console.log("Data", formdata);

        // history.push({
        //   pathname:`/admin/SponsorList`
        // })
      })
      .catch((error) => {
        console.log(error);
      });

    alert("");
    window.location.reload(false);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
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
            <Form role="form" onSubmit={formik.handleSubmit}>
              <FormGroup>
                {/* <InputGroup className="input-group-alternative mb-3"> */}

                <Label>
                  Name
                  {/* <i className="ni ni-circle-08" /> */}
                </Label>

                <Input
                  placeholder="Name"
                  type="text"
                  name="Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Name}
                />
                {formik.touched.Name && formik.errors.Name ? (
                  <div style={{ color: "red" }}>{formik.errors.Name}</div>
                ) : null}
                {/* </InputGroup> */}
              </FormGroup>
              <FormGroup>
                <Label>
                  Student Registration Number
                  {/* <i className="ni ni-hat-3" /> */}
                </Label>

                <Input
                  placeholder="Student Regidtration Number"
                  type="text"
                  name="Registration_no"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Registration_no}
                />
                {formik.touched.Registration_no &&
                formik.errors.Registration_no ? (
                  <div style={{ color: "red" }}>
                    {formik.errors.Registration_no}
                  </div>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label>
                  {/* <i className="ni ni-circle-08" /> */}
                  Faculty
                </Label>

                <Input
                  placeholder="Faculty"
                  type="select"
                  name="Faculty"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Faculty}
                >
                <option>
                  Computing
                </option>
                <option>
                  Engineering
                </option>
                <option>
                  Business
                </option>
                <option>
                  Humanities & sciences
                </option>
                <option>
                  Architecture
                </option>
                <option>
                  Hospitality & Culinary
                </option>
                </Input>
                {formik.touched.Faculty && formik.errors.Faculty ? (
                  <div style={{ color: "red" }}>{formik.errors.Faculty}</div>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label>
                  Email
                  {/* <i className="ni ni-email-83" /> */}
                </Label>

                <Input
                  placeholder="Email"
                  type="email"
                  name="Email"
                  autoComplete="new-email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Email}
                />
                {formik.touched.Email && formik.errors.Email ? (
                  <div style={{ color: "red" }}>{formik.errors.Email}</div>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label>
                  Password
                  {/* <i className="ni ni-lock-circle-open" /> */}
                </Label>

                <Input
                  placeholder="Password"
                  type="password"
                  name="Password"
                  autoComplete="new-password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Password}
                />
                {formik.touched.Password && formik.errors.Password ? (
                  <div style={{ color: "red" }}>{formik.errors.Password}</div>
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
