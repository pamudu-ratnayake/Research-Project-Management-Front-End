import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  FormText,
  Row,
  Col,
  Label,
  Table
} from "reactstrap";

const Supervisors = () => {
  return (
    <>
      <div>
        <Card body>
          <CardHeader>
            <CardTitle tag="h5">Supervisors</CardTitle>
          </CardHeader>
          <CardBody >
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <Button color="primary" size="sm">Request</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
 </div>
    </>
  );
};

export default Supervisors;
