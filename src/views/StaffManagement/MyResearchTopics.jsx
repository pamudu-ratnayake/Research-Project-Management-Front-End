import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import httpService from "../../services/axiosService/httpService";

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
} from "reactstrap";

const MyResearchTopics = (props) => {

    const user = JSON.parse(localStorage.getItem("profile"));

    const [topiclist, settopic] = useState([]);
    const [searchStr, setSearch] = useState('');
    // const [deleteID, setDeleteID] = useState('');
  
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
            <Container className="mt--9" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="6">
                    <h1 className="mb-0">Requested Research Topics</h1>
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
                          <td> {topiclist?.document} </td>
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