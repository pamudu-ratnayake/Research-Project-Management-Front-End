import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useHistory } from "react-router-dom";
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
  const [staff, setStaff] = useState([]);
  const [panelMemberDetails, setPanelMemDetails] = useState({
    idL: null,
    staff_contact_no: "Select Panel Member",
    staff_email: "Select Panel Member"
  });

  useEffect(() => {
    httpService.getAxios('/staffMember/get-StaffMembers')
    .then((res) => {
      console.log(res.data);
      setStaff(res.data);
    })
    .catch((err) => {
      console.error(err);
    })
  },[]);

  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    panel_no: "",
    research_area: "",
    no_of_members: 0,
    members: [],
  };

  const validationSchema = Yup.object({
    // panel_no: Yup.string().required("*Required!"),
    // research_area: Yup.string().required("*Required!"),
    // no_of_members: Yup.string().required("*Required!"),
    // members: Yup.string().required("*Required!"),
    // con_no: Yup.string().required("*Required!"),
    // emails: Yup.string().required("*Required!"),
  });

  let history = useHistory();

  const onSubmit = (values) => {
    const panelData = {
      panel_no : values.panel_no,
      research_area : values.research_area,
      members : panelMembers,
      no_of_members : panelMembers.length
    };
    httpService.postAxios('/admin/create-panel', panelData)
    .then((res) => {
      console.log(res.data);
      history.push({
        pathname: `/admin/viewAll-panels`,
      });
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

  const addMembers = () => {
    setPanelMembers([...panelMembers, panelMemberDetails]);
  };

  const deleteMember = (itemIndex) => {
    panelMembers.splice(itemIndex, 1);
    setPanelMembers([...panelMembers]);
  };

  const loadPanelMemberValues = (e) => {
    console.log(e.target.value)

    setPanelMemDetails({
      id: staff[e.target.value]._id,
      member_name: `${staff[e.target.value].staff_FName} ${staff[e.target.value].staff_LName}`,
      con_no: staff[e.target.value].staff_contact_no,
      email: staff[e.target.value].staff_email
    });
  }

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
                        <label>Research Area</label>
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
                          placeholder="Panel Number"
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
                        <label>Member Name</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Enter Location"
                          type="select"
                          name="member_name"
                          onChange={loadPanelMemberValues}
                          onBlur={formik.handleBlur}
                          value={formik.values.member_name}
                        >
                          <option value={-1}>Choose...</option>
                          {staff.map((member, index) => (
                            <option key={member._id} value={index}>{`${member.staff_FName} ${member.staff_LName}`}</option>
                          ))}
                        </Input>
                        {formik.touched.member_name && formik.errors.member_name ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.member_name}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <label>Contact Number</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Email"
                          type="text"
                          name="con_no"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={panelMemberDetails.con_no}
                          // defaultValue={memberDetails.con_no}
                        disabled/>
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
                          value={panelMemberDetails.email}
                        disabled/>
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

                  {panelMembers?.map((member, index) => {
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
