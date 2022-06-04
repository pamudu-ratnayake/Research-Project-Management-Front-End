import React from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
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
  Container,
  Label,
  Row,
  Col,
} from "reactstrap";

const PublishSubmitLinks = (props) => {
  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    title: "",
    due_date: "",
    description: "",
  };

  const validationSchema = Yup.object({
    // title: Yup.string().required("*Required!"),
    // date: Yup.string().required("*Required!"),
    // description: Yup.string().required("*Required!"),
  });

  let history = useHistory();

  const onSubmit = (values) => {
    console.log("values are: ", values);
    httpService
      .postAxios(`/admin/create-submit`, values)
      .then((res) => {
        console.log(res.data);
        history.push({
          pathname: `admin/viewlinks`,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <Container className="mt--9" fluid>
        <Row>
          <Col className="order-xl-1">
            <Card className="bg-white shadow">
              <CardHeader className="bg-secondary border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h1 className="mb-0">Publish The Submission Link</h1>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Title</Label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Submission Title"
                          type="text"
                          name="title"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.title}
                        />
                        {formik.touched.title && formik.errors.title ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.title}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Date of Birth</Label>
                        <Input
                          placeholder="Due Date"
                          type="date"
                          name="due_date"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.due_date}
                        />
                        {formik.touched.due_date && formik.errors.due_date ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.due_date}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="10">
                      <FormGroup>
                        <Label>Description</Label>
                        <Input
                          id="exampleFormControlTextarea1"
                          placeholder="Description..."
                          rows="3"
                          type="textarea"
                          name="description"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.description}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="text-center">
                    <Button className="mt-4" color="primary" type="submit">
                      Publish Link
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PublishSubmitLinks;
