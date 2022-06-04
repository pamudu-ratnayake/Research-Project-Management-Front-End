import { useFormik } from "formik";
import React, { useState, useMemo, useEffect } from "react";
import { useDropzone } from "react-dropzone";
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

const CreateMarking = (props) => {

  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "90px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#A9A9B0",
    borderStyle: "dashed",
    marginBottom: "20px",
    backgroundColor: "#ffffff",
    color: "default",
    outline: "none",
    transition: "border .24s ease-in-out",
  };
  const activeStyle = {
    borderColor: "#2196f3",
  };
  const acceptStyle = {
    borderColor: "#00e676",
  };
  const rejectStyle = {
    borderColor: "#ff1744",
  };

  const [files, setFiles] = useState([]);

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    open,
  } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const filepath = acceptedFiles.map((file) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    title: "",
    description: "",
  };

  let history = useHistory();

  const onSubmit = (values) => {
      let formdata = new FormData();
      formdata.append("title", values.template_title);
      formdata.append("description", values.description);
      formdata.append("file", acceptedFiles[0]);

    httpService.postAxios(`/admin/create-marking`, formdata)
    .then((res) => {
        console.log(res.data);
        history.push({
          pathname: `/admin`,
        });
    })
    .catch((err) => {
        console.error(err);
    })
  };

  const formik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    initialValues,
    onSubmit,
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
                    <h1 className="mb-0">Create A Marking Scheme</h1>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Marking Title</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Title"
                          type="text"
                          name="title"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.title}
                        ></Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Marking Description</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Marking Details...."
                          type="textarea"
                          name="description"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.description}
                        ></Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <br/>
                  <br/>

                  <div {...getRootProps({ style })}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop your image file here, or click to select files</p>
                  </div>

                  <h4>File Details</h4>
                  <ul>{filepath}</ul>

                  <div className="text-center">
                    <Button className="mt-4" color="primary" type="submit">
                      Upload Marking
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

export default CreateMarking;
