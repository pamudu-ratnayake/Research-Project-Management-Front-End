import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
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
  Row,
  Col,
} from "reactstrap";

const CreatePanel = (props) => {

  const [panelMembers, setPanelMembers] = useState([]);

  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    panel_no: "",
    research_area: "",
    no_of_members: 0,
    members: [],
    // con_no: "",
    // emails: "",
  };

  const validationSchema = Yup.object({
    // panel_no: Yup.string().required("*Required!"),
    // research_area: Yup.string().required("*Required!"),
    // no_of_members: Yup.string().required("*Required!"),
    // members: Yup.string().required("*Required!"),
    // con_no: Yup.string().required("*Required!"),
    // emails: Yup.string().required("*Required!"),
  });

  const onSubmit = (values) => {
    const panelData = {
      panel_no : values.panel_no,
      research_area : values.research_area,
      members : panelMembers,
      no_of_members : panelMembers.length
    };
    // values.no_of_members = panelMembers.length;
    // values.members = panelMembers;
    console.log("values are: ", panelData)
    httpService.postAxios('/admin/create-panel', panelData)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    })
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const addMembers = (formData) => {
    const members = {
      member_name: formData.member_name,
      con_no: formData.con_no,
      email: formData.email,
    };
    setPanelMembers([...panelMembers, members]);
  };

  const deleteMember = (itemIndex) => {
    panelMembers.splice(itemIndex, 1);
    setPanelMembers([...panelMembers]);
  };

  return (
    <>
      <Container className="mt--9" fluid>
        <Row>
          <Col className="order-xl-1">
            <Card className="bg-white shadow">
              <CardHeader className="bg-secondary border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h1 className="mb-0">Create A Panel</h1>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col md="6">
                    <FormGroup>
                        <label>Research Area{formik.no_of_members}</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Enter Research Area"
                          type="select"
                          name="research_area"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.research_area}
                        >
                          <option>Choose...</option>
                          <option>Autonomous Intelligent Machines and Systems (AIMS)</option>
                          <option>Machine Learning and Soft Computing (MLSC)</option>
                          <option>Knowledge Inspired Computing (KIC)</option>
                          <option>Computing for Inclusive and Equitable Society (CIEC)</option>
                          <option>Computing Infrastructure and Security (CIS)</option>
                          <option>Software Systems & Technologies (SST)</option>
                        </Input>
                        {formik.touched.research_area && formik.errors.research_area ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.research_area}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>

                    <Col md="6">
                      <FormGroup>
                        <label>Panel Number</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Status"
                          type="text"
                          name="panel_no"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.panel_no}
                        ></Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4">
                      <FormGroup>
                        <label>Member Name {formik.no_of_members}</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Enter Location"
                          type="select"
                          name="member_name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.member1}
                        >
                          <option>Choose...</option>
                          <option>Indoor</option>
                          <option>Outdoor</option>
                        </Input>
                        {formik.touched.member1 && formik.errors.member1 ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.member1}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <label>Contact Number</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Contact Number"
                          type="text"
                          name="con_no"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.con_no}
                        />
                        {formik.touched.con_no && formik.errors.con_no ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.con_no}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <label>Email</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Contact Number"
                          type="text"
                          name="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.email}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button
                    className="mt-4"
                    color="primary"
                    type="button"
                    onClick={() => {
                      addMembers(formik.values);
                    }}
                  >
                    Add Member
                  </Button>

                  {panelMembers && panelMembers.map((member, index) => {
                    return (
                      <Row key={index}>
                        <hr/>
                        <Col xs="4" className="mb-3">
                          <span className="h5">{member?.member_name}</span>
                        </Col>
                        <Col xs="3" className="mb-3">
                          <span className="h5">{member?.con_no}</span>
                        </Col>
                        <Col xs="4" className="mb-3">
                          <span className="h5">{member?.email}</span>
                        </Col>
                        <Col xs="1" className="mb-3">
                          <span className="h5" onClick={() => {deleteMember(index)}}>X</span>
                        </Col>
                        <hr/>
                      </Row>
                    );
                  })}

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

export default CreatePanel;
