import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import httpService from "../../services/axiosService/httpService";
import Chat from "../../components/chats/Chat";

import {
  Card,
  Table,
  CardImg,
  CardHeader,
  Row,
  Col,
  CardBody,
  Button,
  Container,
  Input,
  Modal
} from "reactstrap";

const MyResearchTopics = (props) => {

    const user = JSON.parse(localStorage.getItem("profile"));

    const [topiclist, settopic] = useState([]);
    const [searchStr, setSearch] = useState('');
    // const [deleteID, setDeleteID] = useState('');

    const [exampleModal, setmodalDemo] = useState(false);

    function toggleModal() {
        setmodalDemo(!exampleModal);
    };
  
    useEffect(() => {
      httpService
        .getAxios(`/topic/getAcceptedTopiciDetails/${user?.result?._id}`)
        .then((res) => {
          console.log(user?.result?._id);
          settopic(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    return(
        <>
            <Container className="mt-5" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-white shadow">
              <CardHeader className="bg-muted border-0">
                <Row className="align-items-center">
                  <Col xs="6">
                    <h1 className="mb-0">My Research Topics</h1>
                  </Col>
                  <Col xs="4">
                    <div style={{ marginLeft: 170 }}>
                      <Input
                        type="text"
                        placeholder="Search..."
                        style={{
                          borderWidth: "2.5px",
                          width: "15rem",
                          height: "2rem",
                          textAlign: "left",
                          borderRadius: "15px",
                        }}
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}
                      />
                    </div>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Table className="align-items-center" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Research Group ID</th>
                      <th scope="col">Research Topic</th>
                      <th scope="col">Document</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {topiclist
                      .filter((r) => {
                        if (searchStr === "") {
                          return r;
                        } else if (
                          r.topiclist?.research_grp_id
                            .toLowerCase()
                            .includes(searchStr.toLowerCase())
                        ) {
                          return r;
                        }
                      })
                      .map((topiclist) => (
                        <tr key={topiclist._id}>
                          <td> {topiclist.research_grp_id} </td>
                          <td> {topiclist.topic} </td>
                          <td> <i className="ni ni-cloud-download-95" /> Download </td>
                          <td>
                              <Button className="bg-success" onClick={() => {toggleModal("exampleModal")}}> <i className="ni ni-chat-round" /> </Button> 

                              <Modal
                                  className="modal-dialog-centered"
                                  isOpen={exampleModal}
                                  toggle={() => toggleModal("exampleModal")}
                                >
                                    <Chat data={topiclist.research_grp_id}/>
                                </Modal>

                            </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
        </>
    )
}

export default MyResearchTopics;