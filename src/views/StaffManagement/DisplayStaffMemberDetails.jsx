import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
    Container,
    Row,
    Col,
  } from "reactstrap";
  import { useState, useEffect } from "react";
  import httpService from "../../services/axiosService/httpService";


const DisplayStaffMemberDetails = (props) => {

  const [memberData, setMember] = useState([]);
  useEffect(() => {
    httpService.getAxios(`/staffMember/getOneStaffMember/6297cd503b5fb5b74ac84b8a`)
      .then((res) => {
        console.log(res);
        setMember(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    return(
        <>
<Container className="mt--7">
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    {/* <h2 className="mb-0">Advertisement Information</h2> */}
                  </Col>
                  <Col className="text-right" xs="4"></Col>
                </Row>
              </CardHeader>
              <Card style={{ width: "61.3rem" }}>
                  <CardHeader style={{ fontSize: "2rem" }}>
                    Member Profile
                  </CardHeader>
                <CardBody style={{ padding: "2rem" }}>

                  
                  <Card
                    style={({ width: "28rem" }, { height: "2.5rem" })}
                    className="mb-4"
                  >
                    <CardBody className="pt-1 pt-md-0">
                      <div>
                        <CardText>
                          <Row>
                            <Col xs="3">
                              <span className="h5" style={{ font: "menu" }}>
                              Staff User Name  
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {memberData.staff_userName}
                              </span>
                            </Col>
                          </Row>
                        </CardText>
                      </div>
                    </CardBody>
                  </Card>

                  <Card
                    style={({ width: "28rem" }, { height: "2.5rem" })}
                    className="mb-4"
                  >
                    <CardBody className="pt-1 pt-md-0">
                      <div>
                        <CardText>
                          <Row>
                            <Col xs="3">
                              <span className="h5" style={{ font: "menu" }}>
                             First Name 
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {memberData.staff_FName}
                              </span>
                            </Col>
                          </Row>
                        </CardText>
                      </div>
                    </CardBody>
                  </Card>

                  <Card
                    style={({ width: "28rem" }, { height: "2.5rem" })}
                    className="mb-4"
                  >
                    <CardBody className="pt-1 pt-md-0">
                      <div>
                        <CardText>
                          <Row>
                            <Col xs="3">
                              <span className="h5" style={{ font: "menu" }}>
                              Last Name 
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">: {memberData.staff_LName}</span>
                            </Col>
                          </Row>
                        </CardText>
                      </div>
                    </CardBody>
                  </Card>

                  <Card
                    style={({ width: "28rem" }, { height: "2.5rem" })}
                    className="mb-4"
                  >
                    <CardBody className="pt-1 pt-md-0">
                      <div>
                        <CardText>
                          <Row>
                            <Col xs="3">
                              <span className="h5" style={{ font: "menu" }}>
                             Staff NIC 
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {memberData.staff_nic}
                              </span>
                            </Col>
                          </Row>
                        </CardText>
                      </div>
                    </CardBody>
                  </Card>

                  <Card
                    style={({ width: "28rem" }, { height: "2.5rem" })}
                    className="mb-4"
                  >
                    <CardBody className="pt-1 pt-md-0">
                      <div>
                        <CardText>
                          <Row>
                            <Col xs="3">
                              <span className="h5" style={{ font: "menu" }}>
                                 Gender 
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {memberData.staff_gender}
                              </span>
                            </Col>
                          </Row>
                        </CardText>
                      </div>
                    </CardBody>
                  </Card>

                  <Card
                    style={({ width: "28rem" }, { height: "2.5rem" })}
                    className="mb-4"
                  >
                    <CardBody className="pt-1 pt-md-0">
                      <div>
                        <CardText>
                          <Row>
                            <Col xs="3">
                              <span className="h5" style={{ font: "menu" }}>
                             Address 
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {memberData.staff_address}
                              </span>
                            </Col>
                          </Row>
                        </CardText>
                      </div>
                    </CardBody>
                  </Card>

                  <Card
                    style={({ width: "28rem" }, { height: "2.5rem" })}
                    className="mb-4"
                  >
                    <CardBody className="pt-1 pt-md-0">
                      <div>
                        <CardText>
                          <Row>
                            <Col xs="3">
                              <span className="h5" style={{ font: "menu" }}>
                                Staff Contact No 
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {memberData.staff_contact_no}
                              </span>
                            </Col>
                          </Row>
                        </CardText>
                      </div>
                    </CardBody>
                  </Card>

                  <Card
                    style={({ width: "28rem" }, { height: "2.5rem" })}
                    className="mb-4"
                  >
                    <CardBody className="pt-1 pt-md-0">
                      <div>
                        <CardText>
                          <Row>
                            <Col xs="3">
                              <span className="h5" style={{ font: "menu" }}>
                                Email 
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {memberData.staff_email}
                              </span>
                            </Col>
                          </Row>
                        </CardText>
                      </div>
                    </CardBody>
                  </Card>

                  <Card
                    style={({ width: "28rem" }, { height: "2.5rem" })}
                    className="mb-4"
                  >
                    <CardBody className="pt-1 pt-md-0">
                      <div>
                        <CardText>
                          <Row>
                            <Col xs="3">
                              <span className="h5" style={{ font: "menu" }}>
                                Staff Type 
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {memberData.staff_type}
                              </span>
                            </Col>
                          </Row>
                        </CardText>
                      </div>
                    </CardBody>
                  </Card>        
                </CardBody>
              </Card>
            </Card>
          </Col>
        </Row>
      </Container>
        </>
    );
    
};

export default DisplayStaffMemberDetails;