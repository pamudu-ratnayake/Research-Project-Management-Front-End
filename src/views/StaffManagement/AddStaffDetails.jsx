import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
    FormGroup,
    Input,
    Container,
    Form,
    Row,
    Col,
  } from "reactstrap";

  import httpService from "../../services/axiosService/httpService";
  import * as Yup from "yup";
  import { useFormik } from "formik";

const AddStaffDetails = (props) => {

  const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const initialValues = {
    enableReinitialize: true,
    validateOnMount:true,
    staff_userName:"",
    staff_FName:"",
    staff_LName:"",
    staff_nic:"",
    staff_gender:"",
    staff_address:"",
    staff_contact_no:"",
    staff_email:"",
    staff_type:"",
        
  };

  const validationSchema = Yup.object({
    staff_userName:Yup.string().required("Required !"),
    staff_FName:Yup.string().required("Required !"),
    staff_LName:Yup.string().required("Required !"),
    staff_nic:Yup.string().required("Required !"),
    staff_gender:Yup.string().required("Required !"),
    staff_address:Yup.string().required("Required !"),
    staff_contact_no:Yup.string().matches(
      phoneRegExp,
      "Phone Number is not Valid !"
    ).min(10, "Too short").max(10,"Too Long"),
    staff_email:Yup.string().email("Invalid Email!").required("Required !"),
    staff_type:Yup.string().required("Required !"),
        
  });

  const onSubmit = (values) => {
    console.log('triggered');
    httpService.postAxios(`/staffMember/addStaffMember`, values)
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
    return(
        <>
<Container className="mt--7">
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h2 className="mb-0">Staff Member Information</h2>
                  </Col>
                  <Col className="text-right" xs="4"></Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Staff User Name  </label>
                        <Input
                          id="staff_userName "
                          name="staff_userName"
                          placeholder="Enter Your User Name"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.staff_userName }
                        />
                        {formik.touched.staff_userName &&
                        formik.errors.staff_userName ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.staff_userName}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label> First Name </label>
                        <Input
                          id="staff_FName"
                          name="staff_FName"
                          placeholder="Enter First Name"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.staff_FName}
                        />
                        {formik.touched.staff_FName && formik.errors.staff_FName ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.staff_FName}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Last Name  </label>
                        <Input
                          id="staff_LName"
                          name="staff_LName"
                          placeholder="Enter Last Namer"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.staff_LName }
                        />
                        {formik.touched.staff_LName &&
                        formik.errors.staff_LName ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.staff_LName}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                     <Col md="6">
                      <FormGroup>
                        <label>NIC  </label>
                        <Input
                          id="staff_nic"
                          name="staff_nic"
                          placeholder="Enter NIC"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.staff_nic}
                        />
                        {formik.touched.staff_nic &&
                        formik.errors.staff_nic ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.staff_nic}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label> Gender </label>
                        <Input
                          id="staff_gender"
                          name="staff_gender"
                          type="select"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.staff_gender}
                        >
                          <option>Choose...</option>
                          <option>Male</option>
                          <option>Female</option>
              
                        </Input>
                        {formik.touched.staff_gender &&
                        formik.errors.staff_gender ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.staff_gender}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row> 
                  <Row>
                  <Col md="6">
                  <FormGroup>
                      <label>Address </label>
                      <Input
                        mb="3"
                        id="staff_address"
                        name="staff_address"
                        placeholder="Enter Address"
                        rows="2"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.staff_address}
                      />
                      {formik.touched.staff_address &&
                      formik.errors.staff_address ? (
                        <div style={{ color: "red" }}>
                          {formik.errors.staff_address}
                        </div>
                      ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                  <FormGroup>
                      <label>Email </label>
                      <Input
                        mb="3"
                        id="staff_email"
                        name="staff_email"
                        placeholder="Enter Email"
                        rows="2"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.staff_email}
                      />
                      {formik.touched.staff_email &&
                      formik.errors.staff_email ? (
                        <div style={{ color: "red" }}>
                          {formik.errors.staff_email}
                        </div>
                      ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6" mt="3">
                      <label> Contact No  </label>
                      <Input
                        id="staff_contact_no"
                        name="staff_contact_no"
                        placeholder="Enter your Contact No"
                        rows="6"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.staff_contact_no }
                      />
                      {formik.touched.staff_contact_no  &&
                      formik.errors.staff_contact_no  ? (
                        <div style={{ color: "red" }}>
                          {formik.errors.staff_contact_no }
                        </div>
                      ) : null}
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>  Staff Type </label>
                        <Input
                          id="staff_type"
                          name="staff_type"
                          type="select"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.staff_type }
                        >
                          <option>Choose...</option>
                          <option>Supervisor</option>
                          <option>Co-Supervisor</option>
                          <option>Panel Member</option>
              
                        </Input>
                        {formik.touched.staff_type  &&
                        formik.errors.staff_type  ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.staff_type }
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="text-center">
                <Button className="mt-4" color="primary" type="submit">
                  Create Profile
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

export default AddStaffDetails;