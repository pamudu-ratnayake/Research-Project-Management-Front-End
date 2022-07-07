import { useFormik } from "formik";
import React, { useState, useMemo, useEffect } from "react";
import { useDropzone } from "react-dropzone";

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

const UploadResultSheets = () => {
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
        template_title: "",
        description: "",
      };
    
      const onSubmit = (values) => {
          let formdata = new FormData();
          formdata.append("template_title", values.template_title);
          formdata.append("description", values.description);
          formdata.append("file", acceptedFiles[0]);
    
        httpService.postAxios(`/admin/create-template`, formdata)
        .then((res) => {
            console.log(res.data);
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
          <Container className="mt-5" fluid>
            <Row>
              <Col className="order-xl-1">
                <Card className="bg-white shadow">
                  <CardHeader className="bg-muted border-0">
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-0">Upload A Template</h1>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Form onSubmit={formik.handleSubmit}>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Template Title</label>
                            <Input
                              id="exampleFormControlInput1"
                              placeholder="Status"
                              type="text"
                              name="template_title"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.template_title}
                            ></Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Template Description</label>
                            <Input
                              id="exampleFormControlInput1"
                              placeholder="Status"
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
                          Upload Template
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
}

export default UploadResultSheets