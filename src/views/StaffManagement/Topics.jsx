import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
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

const Topics = (props) => {

  const user = JSON.parse(localStorage.getItem("profile"));

  const [topiclist, settopic] = useState([]);
  const [searchStr, setSearch] = useState('');
  // const [deleteID, setDeleteID] = useState('');

  let history = useHistory();

  useEffect(() => {
    httpService
      .getAxios(`/topic/getTopiciDetails/${user?.result?._id}`)
      .then((res) => {
        console.log(user?.result?._id);
        settopic(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onAccept = (topicID) => {
    httpService.postAxios(`/topic/updateStatus/${topicID}`)
    .then((res) => {
      console.log(res.data);
      history.push({
        pathname: `/staff/myresearch-topics`,
      });
    })
    .catch((err) => {
      console.error(err);
    });
  };

  const onReject = (topicID) => {
    httpService.postAxios(`/topic/rejectTopic/${topicID}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
  }

  return (
    <>
      <Container className="mt-5" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-white shadow">
              <CardHeader className="bg-muted border-0">
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
                      <th scope="col" />
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
                          <td><i className="ni ni-cloud-download-95" /> Download </td>
                          <td className="text-right">
                            <Button className="bg-success" onClick={() => {onAccept(topiclist._id)}}><i className="ni ni-check-bold" /></Button>
                            <Button className="bg-danger" onClick={() => {onReject(topiclist._id)}}><i className="ni ni-fat-remove" /></Button>
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
  );
};

export default Topics;
