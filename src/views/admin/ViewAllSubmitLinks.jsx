import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import httpService from "../../services/axiosService/httpService";

import { Button, Modal, Card,Input, CardHeader, CardBody, Container, Row, Col, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Table } from "reactstrap";

const ViewAllSubmitLinks = (props) => {

    const [searchStr, setSearch] = useState('');
    const [posts, setPosts] = useState([]);
    const [deleteID, setDeleteID] = useState('');

    const [exampleModal, setmodalDemo] = useState(false);

    function toggleModal() {
        setmodalDemo(!exampleModal);
    };

    useEffect(() => {
        httpService.getAxios('/admin/getall-submit')
        .then((res) => {
            console.log(res.data);
            setPosts(res.data);
        })
        .catch((err) => {
            console.error(err);
        });
    },[]);

    const deletePanel = () => {
        httpService.deleteAxios(`/admin/delete-submit/${deleteID}`)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.error(err);
        });

        window.location.reload(false);
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
                    <h1 className="mb-0">All Submission Links</h1>
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
                  <Col className="text-right ml--6" xs="2">
                    <Link to={"/admin/publishlinks"}>
                      <Button color="primary" size="sm">
                        Create A Link
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Table className="align-items-center" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Due Date</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {posts
                      .filter((r) => {
                        if (searchStr === "") {
                          return r;
                        } else if (
                          r.posts?.panel_no
                            .toLowerCase()
                            .includes(searchStr.toLowerCase())
                        ) {
                          return r;
                        }
                      })
                      .map((posts) => (
                        <tr key={posts._id}>
                          <td> {posts.title} </td>
                          <td> {posts.due_date} </td>
                          <td className="text-right">
                            <UncontrolledDropdown>
                              <DropdownToggle
                                className="btn-icon-only text"
                                href="#pablo"
                                role="button"
                                size="sm"
                                color=""
                                onClick={(e) => e.preventDefault()}
                              >
                                <i className="fas fa-ellipsis-v" />
                              </DropdownToggle>
                              <DropdownMenu
                                className="dropdown-menu-arrow"
                                right
                              >
                                <Link
                                  to={``}
                                >
                                  <DropdownItem>Edit Link</DropdownItem>
                                </Link>
                                <DropdownItem
                                  onClick={function (event) {
                                    toggleModal("exampleModal");
                                    setDeleteID(posts._id);
                                  }}
                                >
                                  {" "}
                                  Delete Link
                                </DropdownItem>

                                <Modal
                                  className="modal-dialog-centered"
                                  isOpen={exampleModal}
                                  toggle={() => toggleModal("exampleModal")}
                                >
                                  <div className="modal-header">
                                    <h5
                                      className="modal-title"
                                      id="exampleModalLabel"
                                    >
                                      Confirm to delete this event
                                    </h5>
                                    <button
                                      aria-label="Close"
                                      className="close"
                                      data-dismiss="modal"
                                      type="button"
                                      onClick={() =>
                                        toggleModal("exampleModal")
                                      }
                                    >
                                      <span aria-hidden={true}>×</span>
                                    </button>
                                  </div>
                                  <div className="modal-body">
                                    Do you want to delete this event?
                                  </div>
                                  <div className="modal-footer">
                                    <Button
                                      color="primary"
                                      type="button"
                                      onClick={() => {deletePanel()}}
                                    >
                                      Confirm Delete
                                    </Button>
                                    <Button
                                      color="secondary"
                                      data-dismiss="modal"
                                      type="button"
                                      onClick={() =>
                                        toggleModal("exampleModal")
                                      }
                                    >
                                      Close
                                    </Button>
                                  </div>
                                </Modal>
                              </DropdownMenu>
                            </UncontrolledDropdown>
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

export default ViewAllSubmitLinks;
