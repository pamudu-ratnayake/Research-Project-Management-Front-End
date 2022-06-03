import { formik, useFormik } from "formik";
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import httpService from "../../services/axiosService/httpService";

// reactstrap components
import {
  Button,
  Card,
  CardImg,
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  FormGroup,
  Form,
  Input,
  Label
} from "reactstrap";
// core components
// import API from "variables/tokenURL";

const StudentUpdate = (props) => {
  // const user = JSON.parse(localStorage.getItem("profile"));

  const [student, setStudent] = useState("");
  const [oneUser, setOneUser] = useState(0);

  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    Name: "",
    Registration_no: "",
    Faculty: "",
    Email: "",
    Gender: "",
    Date_of_birth: "",
    address: "",
    contact_No: "",
  };

  const validationSchema = Yup.object({
    Name: Yup.string().required("Required!"),
    Registration_no: Yup.string().required("Required!"),
    Faculty: Yup.string().required("Required!"),
    Email: Yup.string().email("Invalid Email!").required("Required!"),
    Gender: Yup.string().required("Required"),
    Date_of_birth: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    contact_No: Yup.string().required("Required"),
  });

  useEffect(() => {
    httpService.getAxios(`/student/getOneStudentDetails/6298feccb1acd547d2b60440`).then(
      (res) => {
        console.log(res);
        setStudent(res.data);
     
  })
  .catch((error) => {
    console.log(error);
  });
}, []);

  const onSubmit = (values) => {
    console.log("form data", values);

    httpService.putAxios(`/student/updateStudentDetails/6298feccb1acd547d2b60440`, values)
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
    // window.location.reload(false);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });



  // console.log("sdsad", oneUser.firstName);

  return (
    <>
      <div>
        <Card body>
          <CardHeader>
            <CardTitle tag="h5">Student Update</CardTitle>
          </CardHeader>
          <CardBody>
            <Form onSubmit={formik.handleSubmit}>
              <FormGroup>
                <Label>Name</Label>
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
                <Label>Student Registration Number</Label>
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
                <Label>Faculty</Label>
                <Input
                  placeholder="Faculty"
                  type="select"
                  name="Faculty"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Faculty}
                >
                  <option>Choose...</option>
                  <option>Computing</option>
                  <option>Engineering</option>
                  <option>Business</option>
                  <option>Humanities & sciences</option>
                  <option>Architecture</option>
                  <option>Hospitality & Culinary</option>
                </Input>
                {formik.touched.Faculty && formik.errors.Faculty ? (
                  <div style={{ color: "red" }}>{formik.errors.Faculty}</div>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
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
                <Label>Gender</Label>
                <Input
                  placeholder="Gender"
                  type="select"
                  name="Gender"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Gender}
                >
                  <option>Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                  </Input>
                {formik.touched.Gender && formik.errors.Gender ? (
                  <div style={{ color: "red" }}>{formik.errors.Gender}</div>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label>Date of Birth</Label>
                <Input
                  placeholder="Date_of_birth"
                  type="date"
                  name="Date_of_birth"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Date_of_birth}
                />
                {formik.touched.Date_of_birth && formik.errors.Date_of_birth ? (
                  <div style={{ color: "red" }}>{formik.errors.Date_of_birth}</div>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label>Address</Label>
                <Input
                  placeholder="address"
                  type="address"
                  name="address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                />
                {formik.touched.address && formik.errors.address ? (
                  <div style={{ color: "red" }}>{formik.errors.address}</div>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label>Contact Number</Label>
                <Input
                  placeholder="contact_No"
                  type="contact_No"
                  name="contact_No"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.contact_No}
                />
                {formik.touched.contact_No && formik.errors.contact_No ? (
                  <div style={{ color: "red" }}>{formik.errors.contact_No}</div>
                ) : null}
              </FormGroup>
              <br/>
              <FormGroup>
            <Button color="primary" type="submit">Update</Button>
            </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default StudentUpdate;
