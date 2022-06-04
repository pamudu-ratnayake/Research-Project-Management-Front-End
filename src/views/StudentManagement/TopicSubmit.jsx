import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  FormText,
  Label,
  Row,
  Col,
} from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import httpService from "../../services/axiosService/httpService";

const TopicSubmit = () => {

  const user = JSON.parse(localStorage.getItem("profile"));

  const [staff, setStaff] = useState([]);
  const [stdGrp, setStdGrp] = useState([]);

  useEffect(() => {
    httpService.getAxios('/staffMember/get-StaffMembers')
    .then((res) => {
      console.log(res.data);
      setStaff(res.data);
    })
    .catch((err) => {
      console.error(err);
    });

    httpService.getAxios(`/studentgroup/getOneStudentGroupDetails/${user?.result?._id}`)
    .then((res) => {
      console.log(res.data[0]._id);
      setStdGrp(res.data[0]._id);
    })
    .catch((err) => {
      console.error(err);
    });
  },[]);

  const initialValues = {
    topic: "",
    description: "",
    document: "",
    supervisor: [],
    co_supervisors: [],
  };

  const validationSchema = Yup.object({
    topic: Yup.string().required("*Required!"),
    description: Yup.string().required("*Required!"),
    // document: Yup.string().required("*Required!"),
    // supervisors: Yup.string().required("*Required!"),
    // co_supervisors: Yup.string().required("*Required!"),
  });

  const onSubmit = (values) => {

    const topicDetails = {
      topic: values.topic,
      description: values.description,
      document: values.document,
      supervisors: supId,
      co_supervisors: coSupId,
      research_grp_id: stdGrp
    }
    console.log("triggered", topicDetails);
    httpService
      .postAxios(`/topic/addTopiciDetails`, topicDetails)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const [supervisor, setSupervisor] = useState([]);
  const [cosupervisor, setCoSupervisor] = useState([]);
  const [supId, setSupId] = useState([]);
  const [coSupId, setCoSupId] = useState([]);

  const loadSupName = (e) => {
    const supName = `${staff[e.target.value].staff_FName} ${staff[e.target.value].staff_LName}`
    setSupervisor([...supervisor, supName]);
    setSupId([...supId, staff[e.target.value]._id]);
  }
  const loadCoSupName = (e) => {
    const coSupName = `${staff[e.target.value].staff_FName} ${staff[e.target.value].staff_LName}`
    setCoSupervisor([...cosupervisor, coSupName]);
    setCoSupId([...coSupId, staff[e.target.value]._id]);
  }

  const deleteSup = (index) => {
    supervisor.splice(index, 1);
    supId.splice(index, 1);
    setSupervisor([...supervisor]);
    setSupId([...supId]);
  }
  const deleteCoSup = (index) => {
    cosupervisor.splice(index, 1);
    coSupId.splice(index, 1);
    setCoSupervisor([...cosupervisor]);
    setCoSupId([...coSupId]);
  }


  return (
    <>
      <div>
        <Card body>
          <CardHeader>
            <CardTitle tag="h5">Topic Submit</CardTitle>
          </CardHeader>
          <CardBody>
            <Form onSubmit={formik.handleSubmit}>
              <FormGroup>
                <Label for="exampleEmail">Topic</Label>
                <Input
                  id="exampleEmail"
                  name="topic"
                  //   placeholder="with a placeholder"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.topic}
                />
                {formik.touched.topic && formik.errors.topic ? (
                  <div style={{ color: "red" }}>{formik.errors.topic}</div>
                ) : null}
              </FormGroup>
              <br />
              <FormGroup>
                <Label for="exampleText">Description</Label>
                <Input
                  id="exampleText"
                  name="description"
                  type="textarea"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                />
                {formik.touched.description && formik.errors.description ? (
                  <div style={{ color: "red" }}>
                    {formik.errors.description}
                  </div>
                ) : null}
              </FormGroup>
              <br />
              <FormGroup>
                <Label for="exampleFile">Additional Documents</Label>
                <Input
                  id="exampleFile"
                  name="file"
                  type="file"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.document}
                />
                <FormText></FormText>
                {formik.touched.document && formik.errors.document ? (
                  <div style={{ color: "red" }}>{formik.errors.document}</div>
                ) : null}
              </FormGroup>
              <br />
              <FormGroup>
                <Label>Supervisor</Label>
                <Input
                  type="select"
                  name="supervisor"
                  onChange={loadSupName}
                  onBlur={formik.handleBlur}
                  value={formik.values.supervisor}
                >
                  <option>Choose...</option>
                  {staff.map((staff, index) => (
                    <option key={staff._id} value={index}>{staff.staff_FName} {staff.staff_LName}</option>
                  ))}
                </Input>
                {formik.touched.supervisor && formik.errors.supervisor ? (
                  <div style={{ color: "red" }}>{formik.errors.supervisor}</div>
                ) : null}
              </FormGroup>
                <div>
                  {supervisor?.map((sup, index) => {
                    return (
                      <Row key={index}>
                        <hr/>
                        <Col md="6">
                        <span> {sup} </span>
                        </Col>
                        <Col md="6">
                        <span onClick={() => {deleteSup(index)}}> X </span>
                        </Col>
                        <hr/>
                      </Row>
                    )
                  })}
                </div>
                <br/><br/>
              <FormGroup>
                <Label>Co-Supervisor</Label>
                <Input
                  type="select"
                  name="co_supervisors"
                  onChange={loadCoSupName}
                  onBlur={formik.handleBlur}
                  value={formik.values.co_supervisors}
                >
                  <option>Choose...</option>
                  {staff.map((staff, index) => (
                    <option key={staff._id} value={index}>{staff.staff_FName} {staff.staff_LName}</option>
                  ))}
                </Input>
                {formik.touched.co_supervisors && formik.errors.co_supervisors ? (
                  <div style={{ color: "red" }}>{formik.errors.co_supervisors}</div>
                ) : null}
              </FormGroup>
                <div>
                  {cosupervisor?.map((coSup, index) => {
                    return (
                      <Row key={index}>
                        <hr/>
                        <Col md="6">
                        <span> {coSup} </span>
                        </Col>
                        <Col md="6">
                        <span onClick={() => {deleteCoSup(index)}}> X </span>
                        </Col>
                        <hr/>
                      </Row>
                    )
                  })}
                </div>
              <br />
              <div className="text-center">
                <Button className="mt-4" color="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default TopicSubmit;
