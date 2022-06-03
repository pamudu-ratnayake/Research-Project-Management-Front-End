import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import httpService from "../../services/axiosService/httpService";

import {
  Card,
  FormGroup,
  CardText,
  CardTitle,
  Table,
  CardImg,
  CardBody,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownMenu,
  Modal,
  Button,
  Container,
  Input,
} from "reactstrap";

import axios from "axios";

const Topics = (props) => {

const [topiclist, settopic] = useState([]);
// const [deleteID, setDeleteID] = useState('');

useEffect(() => {
httpService
    .getAxios("/staffMember/get-StaffMembers", values)
    .then((res) => {
    settopic(res.data);
      console.log(res);
    })

    .catch((error) => {
      console.log(error);
    });
}, []);

// const deleteRequest = () => {
//   console.log('ID eka: ',deleteID)
//   API
//     .delete(
//       `/advertisement/deleteAdvertisement/${deleteID}`
//     )
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//     window.location.reload(false);
// };
return(
<>
<Container className="mt--7" fluid>
        <Card>
          <FormGroup>
            <Table className="align-items-center" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Student ID</th>
                  <th scope="col">Topic </th>
                  <th scope="col">Topic Description </th>
        
                  {/* <th scope="col">Advertisement Status 
                  </th> */}
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {topiclist.map((topiclist) => (
                  <tr key={topiclist._id}>
                    <td>{topiclist._id}</td>
                    <td>{topiclist.topic}</td>
                    <td>
                      <i className="bg-warning" />
                      {topiclist.description}
                    </td>
                   
                    {/* <td>
                      <div className="avatar-group">
                        <Input>
                        <option>Set Status</option>
                          <option>Displayed </option>
                          <option>Now Showing</option>
                          <option>Requested</option> 
                        </Input>
                      </div>
                    </td> */}
                  
                    {/* <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          role="button"
                          size="sm"
                          color=""
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <Link to={`/admin/AdvertisementDetails/${topiclist._id}`}>
                            <DropdownItem>View Request</DropdownItem>
                          </Link>
                          
                          <DropdownItem                 
                          onClick={function(event){toggleModal("defaultModal"); setDeleteID(topiclist._id)}}
                          >
                            Delete Request
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </Table>
          </FormGroup>
        </Card>
      </Container>
</>
);
};

export default Topics;