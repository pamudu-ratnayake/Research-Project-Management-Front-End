import { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Label,
} from "reactstrap";

const RegisterGroup = (props) => {
  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    name: "",
    regNo: "",
    acdEmail: "",
    pEmail: "",
    contact: "",
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

  const deletestudent = (Index) => {
      student.splice(Index,1);
      setStudent([...student])
  };

  const onSubmit = (values) => {
    console.log("form data", values);

    httpService.postAxios(`/studentgroup/addStudentGroupiDetails`, values)
      .then((res) => {
        console.log(res);
        console.log("Data", formdata);

        // history.push({
        //   pathname:`/dashboard/login`
        // })
      })
      .catch((error) => {
        console.log(error);
      });

    alert("");
    window.location.reload(false);
  };

  return (
    <>
      <div>
        <Card body>
          <CardHeader>
            <CardTitle tag="h5">Register Group</CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col>
                <CardText className="mb-0">
                  *Add leader as the first member
                </CardText>
              </Col>
            </Row>
            <br />
            <Form onSubmit={add}>
              <Row>
                <Col>
                  <Row xs="">
                    <Col xs="12">
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
                          {formik.touched.std_name && formik.errors.std_name ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.std_name}
                            </div>
                          ) : null}
                        </FormGroup>
                      </div>
                    </Col>
                  </Row>
                  <Row xs="">
                    <Col xs="6">
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
                    <Col xs="6">
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
                    <Col xs="6">
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
                    <Col xs="6">
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
                  <br />
                  <div>
                    <Col>
                      <Button
                        color="primary"
                        size="sm"
                        type="button"
                        // onClick={add}
                      >
                        Add
                      </Button>
                    </Col>
                  </div>
                  <br />
                  <div>
                    {student.map((item, index) => {
                      return (
                        <div>
                          <div xs="" key={index}>
                            <label className="h5">Member {index + 1}</label>
                            <Row>
                              <Col xs="">
                                <CardText>{item.std_name}</CardText>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="">
                                <CardText>{item.reg_No}</CardText>
                              </Col>
                            </Row>
                            <Row xs="">
                              <Col xs="">
                                <CardText>{item.academic_email}</CardText>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="">
                                <CardText>{item.personal_email}</CardText>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="">
                                <CardText>{item.contact_No}</CardText>
                              </Col>

                              <Col className="pt-2">
                                <Button
                                  className="btn-icon btn-2"
                                  color="primary"
                                  size="sm"
                                  type="button"
                                  onClick={() => deletestudent(index)}
                                >
                                  Remove
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
              <br/>
              <Row>
                <Col>
                  <Button
                    color="success"
                    size="sm"
                    type="submit"
                  >
                    Register
                  </Button>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default RegisterGroup;
