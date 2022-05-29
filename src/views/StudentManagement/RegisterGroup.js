import { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
// import UserHeader from "components/Headers/UserHeader.js";

const RegisterGroup = (props) => {
  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    name: "",
    regNo: "",
    acdEmail: "",
    pEmail: "",
    contac: "",
  };

  const validationSchema = Yup.object({
    name: Yup.number().required("Required!"),
    regNo: Yup.string().required("Required!"),
    acdEmail: Yup.string().required("Required!"),
    pEmail: Yup.number().required("Required!"),
    contact: Yup.number().required("Required!"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const [student, setStudent] = useState([]);

  const add = async (event) => {
    await event.preventDefault();
    console.log(event.target.std_name.value, event.target.reg_No.value);

    const formData = event.target;
    const newStudent = {
      std_name: formData.std_name.value,
      reg_No: formData.reg_No.value,
      academic_email: formData.academic_email.value,
      personal_email: formData.personal_email.value,
      contact_No: formData.contact_No.value,
    };
    // console.log(newStudent);
    setStudent([...student, newStudent]);
    console.log(student);
    event.target.reset();
  };

  const deletestudent = (itemIndex) => {
    console.log(itemIndex);

    const filtered = [...student].filter((c) => c.index !== itemIndex);
    console.log(filtered);
    setStudent(filtered);
  };

  return (
    <>
      {/* <UserHeader /> */}
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Add Members</h3>
                    
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
              <Row>
                <Col>
              <h6 className="mb-0">*Add leader as the first member</h6>
              </Col>
              </Row>
                <Form onSubmit={add}>
                  <Row>
                    <Col>
                      <Row xs="">
                        <Col xs="10">
                          <div className="pl-lg-4">
                            <FormGroup>
                              <label>Name with initials</label>
                              <Input
                                className="form-control-alternative"
                                id="exampleFormControlInput1"
                                placeholder="Student Name"
                                type="text"
                                name="std_name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.std_name}
                              />
                              {formik.touched.std_name &&
                              formik.errors.std_name ? (
                                <div style={{ color: "red" }}>
                                  {formik.errors.std_name}
                                </div>
                              ) : null}
                            </FormGroup>
                          </div>
                        </Col>
                      </Row>
                      <Row xs="">
                        <Col xs="5">
                          <div className="pl-lg-4">
                            <FormGroup>
                              <label>Registration Number</label>
                              <Input
                                className="form-control-alternative"
                                id="exampleFormControlInput1"
                                placeholder="Student Registration Number"
                                type="text"
                                name="reg_No"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.reg_No}
                              />
                              {formik.touched.reg_No && formik.errors.reg_No ? (
                                <div style={{ color: "red" }}>
                                  {formik.errors.reg_No}
                                </div>
                              ) : null}
                            </FormGroup>
                          </div>
                        </Col>
                        <Col xs="5">
                          <div className="pl-lg-4">
                            <FormGroup>
                              <label>Academic Email</label>
                              <Input
                                className="form-control-alternative"
                                id="exampleFormControlInput1"
                                placeholder="Academic Email"
                                type="text"
                                name="academic_email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.academic_email}
                              />
                              {formik.touched.academic_email &&
                              formik.errors.academic_email ? (
                                <div style={{ color: "red" }}>
                                  {formik.errors.academic_email}
                                </div>
                              ) : null}
                            </FormGroup>
                          </div>
                        </Col>
                      </Row>
                      <Row xs="">
                        <Col xs="5">
                          <div className="pl-lg-4">
                            <FormGroup>
                              <label>Personal Email</label>
                              <Input
                                className="form-control-alternative"
                                id="exampleFormControlInput1"
                                placeholder="Personal Email"
                                type="text"
                                name="personal_email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.personal_email}
                              />
                              {formik.touched.personal_email &&
                              formik.errors.personal_email ? (
                                <div style={{ color: "red" }}>
                                  {formik.errors.personal_email}
                                </div>
                              ) : null}
                            </FormGroup>
                          </div>
                        </Col>
                        <Col xs="5">
                          <div className="pl-lg-4">
                            <FormGroup>
                              <label>Contact Number</label>
                              <Input
                                className="form-control-alternative"
                                id="exampleFormControlInput1"
                                placeholder="Contact Number"
                                type="text"
                                name="contact_No"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.contact_No}
                              />
                              {formik.touched.contact_No &&
                              formik.errors.contact_No ? (
                                <div style={{ color: "red" }}>
                                  {formik.errors.contact_No}
                                </div>
                              ) : null}
                            </FormGroup>
                          </div>
                        </Col>
                      </Row>
                      {/* Add Button */}
                      <div>
                        <Col>
                          <Button
                            className="btn-icon btn-3"
                            color="primary"
                            size="sm"
                            type="submit"
                            // onClick={add}
                          >
                            <span className="btn-inner--icon">Add</span>
                          </Button>
                        </Col>
                      </div>

                      <div>
                        {student.map((item, index) => {
                          return (
                            <div>
                              <div xs="" key={index}>
                                <label>
                                  Member {index+1}
                                </label>
                                <Row>
                                <Col xs="">
                                  <span className="h5">{item.std_name}</span>
                                </Col>
                              </Row>
                              <Row>
                                <Col xs="">
                                  <span className="h5">{item.reg_No}</span>
                                </Col>
                              </Row>
                              <Row xs="">
                                <Col xs="">
                                  <span className="h5">
                                    {item.academic_email}
                                  </span>
                                </Col>
                              </Row>
                              <Row>
                                <Col xs="">
                                  <span className="h5">
                                    {item.personal_email}
                                  </span>
                                </Col>
                              </Row>
                              <Row>
                                <Col xs="">
                                  <span className="h5">{item.contact_No}</span>
                                </Col>

                                <Col className="pt-2">
                                  <Button
                                    className="btn-icon btn-2"
                                    color="primary"
                                    size="sm"
                                    type="button"
                                    onClick={() => deletestudent(index)}
                                  >
                                    <span className="btn-inner--icon">
                                      <i className="ni ni-fat-delete" />
                                    </span>
                                  </Button>
                                </Col>
                              </Row>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <Button
                      color="success"
                      size="sm"
                      type="button"
                      // onClick={pdfGenerater}
                    >
                      Register
                    </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RegisterGroup;
