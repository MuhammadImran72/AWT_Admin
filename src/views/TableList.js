import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useState  , useEffect} from "react";
function TableList() {
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);
  
  const [state, setstate] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleImgChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imgg = e.target.files[0];
     
      setImg(imgg);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setstate({
      ...state,
      [name]: value,
    });
  }

  const submitHandler = e => {
  }
  return (
    <>
      <Container fluid>
        <Row>

          <Col md-6> 
          <button class="btn btn-primary" onClick={toggle}>
              Add Business Unit
            </button>
          </Col>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Striped Table with Hover</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Salary</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">City</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>$23,789</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>$56,142</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>$38,735</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Doris Greene</td>
                      <td>$63,542</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>$78,615</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Table on Plain Background</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Salary</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">City</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>$23,789</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>$56,142</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>$38,735</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Doris Greene</td>
                      <td>$63,542</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>$78,615</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>



      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <div     >
          <label for="validationDefault01" class="form-label">
              select Units
            </label>
          <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  
  <option value="Public Listed Companies"> Public Listed Companies </option>
  <option value="Public UnListed Companies2"> Public UnListed Companies </option>
  <option value="Private Limited Companies">Private Limited Companies</option>
  <option value="Other Trust Units"> Other Trust Units </option>
</select>
<br></br>
            <label for="validationDefault01" class="form-label">
              Main Heading
            </label>
            <input
              type="text"
              class="form-control"
              id="validationDefault01"
              name="title"
              value={state.title}
              onChange={(e) => handleChange(e)}
              required
            />

            <label for="validationDefault02" class="form-label">
              Description
            </label>
            <input
              type="text"
              class="form-control"
              id="validationDefault02"
              name="description"
              value={state.description}
              onChange={(e) => handleChange(e)}
              required
            />

            <label class="form-label" for="customFile">
              Banner Image
            </label>
            <input type="file"
             class="form-control"
              id="customFile" 
               name="imageFile"
                accept='image/*'
                onChange={(e) => handleImgChange(e)} />
  <br></br>


            <br></br>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary"   type="submit"   onClick={submitHandler}    >
            Add Business Unit
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default TableList;
