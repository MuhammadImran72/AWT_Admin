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
import axios from "axios";
function BusinessUnit() {
  const [modal, setModal] = React.useState(false);
  const [companies, setCompanies] = React.useState([]);
  const [img, setImg] = useState();
  const [units, setUnits] = React.useState([]);
  const toggle = () => setModal(!modal);
  
  const [state, setState] = useState({
    company_id:null,
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
    
    setState({
      ...state,
      [name]: value,
    });
  }

  const submitHandler = e => {
   
    
    e.preventDefault();

    axios
    .post(
      `https://api.zalimburgers.com//awt-api/company_service`,
      state,
      { headers: { 'content-type': 'application/json' } },
    )
    .then(response => {
     
      var formData = new FormData();
      formData.append('imageFile', img);
      console.log(img);
   
      //  console.log(response.data.data);
      axios
        .post(
          `https://api.zalimburgers.com/awt-api/company_service/updateCompanyImage/${response.data.data.results.insertId}`,
          formData,
       
          {},
         
        )
        .then(res => {
         
           getBusinessUnits()
           setState({
             title:'',
             description:'',
              company_id:null,
              image:''
           })

           setImg('')
           toggle()
         
        })
        .catch(error => {
         
      
          console.log(error);
        });

      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });


  }

  useEffect(() => {
  
   getBusinessCompanies()
   getBusinessUnits()
    
  }, []);

  
  function getBusinessCompanies(){
    axios
    .get(`https://api.zalimburgers.com/awt-api/company`)
    .then(res =>  setCompanies(res.data.data))
    .catch(err => console.log(err));
  }

  function getBusinessUnits(){
    axios
    .get(`https://api.zalimburgers.com/awt-api/company_service`)
    .then(res =>  setUnits(res.data.data))
    .catch(err => console.log(err));
  }


  return (
    <>
      <Container fluid>
        <Row>

         
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Business Units</Card.Title>
                <div className="samebox">
                <p className="card-category">
                In the dashboard, within the Business Unit section, we are incorporating the addition of Business Title, Business Description, and an image.
                </p>
                <button class="btn btn-primary" onClick={toggle}>
              Add Business Unit
            </button>
                </div>
               
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Title</th>
                      <th className="border-0">Description</th>
                      <th className="border-0">Image</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {units.map((unit,i)=>(
                          <tr>
                          <td>{i+1}</td>
                          <td>{unit.title}</td>
                          <td>{unit.description}</td>
                          <td><img style={{height:'60px',width:'60px'}} src={`https://api.zalimburgers.com/${unit.image}`}/></td>
                          </tr> 
                    ))
                     
                    }
                    
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            {/* <Card className="card-plain table-plain-bg">
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
            </Card> */}
          </Col>
        </Row>
      </Container>



      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <div     >
          <label for="validationDefault01" class="form-label">
              select Units
            </label>
          <select class="form-select" name="company_id" onChange={(e)=>handleChange(e)} aria-label="Default select example">
  <option selected>Open this select menu</option>
  {companies && companies.map((company)=>(
  <option value={company.id}> {company.name} </option>
  ))

  }

</select>
<br></br>
            <label for="validationDefault01" class="form-label">
              Title
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
          <Button color="primary"    onClick={(e)=>submitHandler(e)} >
            Add Business Unit
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default BusinessUnit;
