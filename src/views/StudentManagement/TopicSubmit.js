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
  CardText,
} from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import httpService from "../../services/axiosService/httpService";

const TopicSubmit = () => {
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
      supervisors: supervisor,
      co_supervisors: cosupervisor,
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

  const addSupervisor = (supervisorDetail) => {
    console.log("data :", supervisorDetail);

    const newSupervisor = supervisorDetail;

    // console.log(newStudent);
    setSupervisor([...supervisor, newSupervisor]);
    console.log(supervisor);
    // event.target.reset();
  };

  const addCoSupervisor = (cosupervisorDetail) => {
    console.log("data :", cosupervisorDetail);

    const newCoSupervisor = cosupervisorDetail;

    // console.log(newStudent);
    setCoSupervisor([...cosupervisor, newCoSupervisor]);
    console.log(cosupervisor);
    // event.target.reset();
  };

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
                  onChange={formik.handleChange}
                  // onClick={add}
                  onBlur={formik.handleBlur}
                  value={formik.values.supervisor}
                >
                  <option>S1</option>
                  <option>S2</option>
                  <option>S3</option>
                  <option>S4</option>
                  <option>S5</option>
                  <option>S6</option>
                </Input>
                {formik.touched.supervisor && formik.errors.supervisor ? (
                  <div style={{ color: "red" }}>{formik.errors.supervisor}</div>
                ) : null}

                <div>
                  <Button
                    color="primary"
                    size="sm"
                    type="button"
                    onClick={() => {
                      addSupervisor(formik.values.supervisor);
                    }}
                  >
                    Add
                  </Button>
                </div>
              </FormGroup>

              <br />
              <div>
                {supervisor.map((item, index) => {
                  return (
                    <div>
                      <div xs="" key={index}></div>
                      <CardText>{item.supervisorDetail}</CardText>
                    </div>
                  );
                })}
              </div>
              <FormGroup>
                <Label>Co-Supervisor</Label>
                <Input
                  type="select"
                  name="co_supervisors"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.co_supervisors}
                >
                  <option>S1</option>
                  <option>S2</option>
                  <option>S3</option>
                  <option>S4</option>
                  <option>S5</option>
                  <option>S6</option>
                </Input>
                {formik.touched.co_supervisors &&
                formik.errors.co_supervisors ? (
                  <div style={{ color: "red" }}>
                    {formik.errors.co_supervisors}
                  </div>
                ) : null}

                <div>
                  <Button
                    color="primary"
                    size="sm"
                    type="button"
                    onClick={() => {
                      addCoSupervisor(formik.values.co_supervisors);
                    }}
                  >
                    Add
                  </Button>
                </div>
              </FormGroup>
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
