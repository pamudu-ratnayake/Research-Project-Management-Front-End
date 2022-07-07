import React, { useEffect, useState } from 'react';
import fileDownload from 'js-file-download';
import { Button, Card,Input, CardHeader, CardBody, Container, Row, Col, Table } from "reactstrap";
import httpService from '../../services/axiosService/httpService';

const MarkingSchemes = () => {

    const [posts, setPosts] = useState([]);
    const [searchStr, setSearch] = useState('');

    useEffect(() => {
        httpService.getAxios(`/admin/get-marking`)
        .then((res) => {
            console.log(res.data);
            setPosts(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    },[]);

    const downloadScheme = (marking) => {
        // fileDownload(template, "marking");
        window.open(marking, '_blank', 'noopener,noreferrer');
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
                    <h1 className="mb-0">Marking Schemes</h1>
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
                      <th scope="col">Marking Title</th>
                      <th scope="col">Marking Description</th>
                      <th scope="col">Marking Scheme</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {posts
                      .filter((r) => {
                        if (searchStr === "") {
                          return r;
                        } else if (
                          r.posts?.title
                            .toLowerCase()
                            .includes(searchStr.toLowerCase())
                        ) {
                          return r;
                        }
                      })
                      .map((posts) => (
                        <tr key={posts._id}>
                          <td> {posts.title} </td>
                          <td> {posts.description} </td>
                          <td onClick={() => {downloadScheme(posts.marking_scheme)}}> Download </td>
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

export default MarkingSchemes