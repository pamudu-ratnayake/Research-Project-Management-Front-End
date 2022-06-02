import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Alert,
} from "reactstrap";
// core components
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { useEffect, useState } from "react";

const SupervisorRequest = (props) => {
  const [sDetails, setSponsor] = useState(0);

  let history = useHistory();

  // const today = new Date();
  // const currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + today.getTime();

  // console.log(userName);
  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    event_id: "",
    sender_name: "",
    _id: sDetails._id,
    sponsorEmail: sDetails.sponsorEmail,
    companyName: sDetails.companyName,
    cus_email: "",
    rqst: "",
    reqDate: "", //today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + today.getTime(),
  };

  const sendEmail = (e, values) => {
    // console.log("kkkk", values);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d7p8spa",
        "template_2hz5hnb",
        e.target,
        "user_fPD13QAVpGNDHZOSiKSLb"
      )
      .then((res) => {
        console.log(res);
        alert("Email Sent");
      })
      .catch((err) => console.log(err));

    // dataPost(values);
  };

  const dataPost = (values) => {
    console.log("Dataaaa", values);
    API.post("/requestedSponsor/addRequestedSponsors", values)
      .then((res) => {
        console.log(res);
        console.log("Data", values);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(() => {
  //   console.log(props.match.params._id);

  //   API
  //     .get(`/sponsor/getSponsor/${props.match.params._id}`)
  //     .then((res) => {
  //       console.log(res);
  //       setSponsor(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const formik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    initialValues,
    // onSubmit,
    // sendEmail,
    // validationSchema,
  });

  return (
    <>
      <div>
        <Card body>
          <CardHeader>
            <CardTitle tag="h5">Request Email</CardTitle>
          </CardHeader>
          <CardBody>
            <Form onSubmit={(formik.handleSubmit, sendEmail)}>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <label>Supervisor Name</label>
                    <Input
                      className="h5"
                      id="exampleFormControlInput1"
                      placeholder="reg000123456"
                      type="text"
                      name="supervisor_name"
                      // disabled
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      // defaultValue={sDetails.companyName}
                    />
                    {/* {formik.touched.companyName &&
                          formik.errors.companyName ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.companyName}
                            </div>
                          ) : null} */}
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <label>Student Name</label>
                    <Input
                      className="h5"
                      id="exampleFormControlInput1"
                      // placeholder="reg000123456"
                      type="text"
                      name="student_name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      // defaultValue={userName}
                    />
                    {/* {formik.touched.sender_name &&
                          formik.errors.sender_name ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.sender_name}
                            </div>
                          ) : null} */}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <label>Send To</label>
                    <Input
                      className="h5"
                      // placeholder="ABC (pvt).Ltd"
                      type="text"
                      name="supervisor_Email"
                      // disabled
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value="oshinicooray.98@gmail.com"
                      // value={formik.values.sponsorEmail}
                      // defaultValue={sDetails.sponsorEmail}
                    />
                    {/* {formik.touched.sponsorEmail &&
                          formik.errors.sponsorEmail ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.sponsorEmail}
                            </div>
                          ) : null} */}
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <label>Send From</label>
                    <Input
                      className="h5"
                      id="exampleFormControlInput1"
                      placeholder="reg000123456"
                      type="text"
                      name="student_Email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value="it19990446@my.sliit.lk"
                      // defaultValue={user?.result?.email}
                    />
                    {/* {formik.touched.cus_email && formik.errors.cus_email ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.cus_email}
                            </div>
                          ) : null} */}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <label>Sponsorship Request</label>
                    <Input
                      className="h5-black"
                      id="exampleFormControlInput1"
                      // placeholder="142, Palm Avenue, Colombo 10 "
                      rows="3"
                      type="textarea"
                      name="rqst"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      // value={formik.values.rqst}
                    />
                    {/* {formik.touched.rqst && formik.errors.rqst ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.rqst}
                            </div>
                          ) : null} */}
                  </FormGroup>
                </Col>
              </Row>
              <br/>
              <Row className="d-flex justify-content-between">
                <Col className="text-center">
                  <Button type="submit" color="primary" size="sm">
                    Send
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

export default SupervisorRequest;
