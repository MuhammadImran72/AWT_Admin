import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "react-bootstrap";

function MDMessage() {
  const [img, setImg] = useState();
  const  [data,setData]=useState({
    id:null,
    ranking:'',
    post:'',
    message:''
  })
  const [state,setState]=useState({
      rank:'',
      post:'',
      image:'',
      message:''
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setState({
      ...state,
      [name]: value,
    });
  }
  const handleImgChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imgg = e.target.files[0];
     
      setImg(imgg);
    }
  };


  
  const submitHandler = e => {
   
  
    e.preventDefault();

    axios
    .post(
      `https://api.zalimburgers.com//awt-api/md`,
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
          `https://api.zalimburgers.com/awt-api/md/updateMDImage/${response.data.data.results.insertId}`,
          formData,
       
          {},
         
        )
        .then(res => {
         
           getMDMessage()
           setState({
             rank:'',
             post:'',
              message:'',
              image:''
           })

           setImg('')
         
        })
        .catch(error => {
         
      
          console.log(error);
        });

      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
    };


    useEffect(() => {
      
  
  
      getMDMessage()
       
    
    
      
    }, []);
   
function getMDMessage() {
  axios
  .get(`https://api.zalimburgers.com/awt-api/md`)
  .then(res =>  setData(res.data.data))
  .catch(err => console.log(err));
}



  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    {/* <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Company (disabled)</label>
                        <Form.Control
                          defaultValue="Creative Code Inc."
                          disabled
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Username</label>
                        <Form.Control
                          defaultValue="michael23"
                          placeholder="Username"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                          placeholder="Email"
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col> */}
                  </Row>
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Rank</label>
                        <Form.Control
                          placeholder="Rank"
                          type="text"
                          name="rank"
                          value={state.rank}
                          onChange={(e)=>handleChange(e)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    
                  </Row>

                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label> Post</label>
                        <Form.Control
                          placeholder="Heading"
                          type="text"
                          name="post"
                          value={state.post}
                          onChange={(e)=>handleChange(e)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    
                  </Row>
                  <Row>
                    {/* <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col> */}
                  </Row>
                  <Row>
                    {/* <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>City</label>
                        <Form.Control
                          defaultValue="Mike"
                          placeholder="City"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col> */}
                    {/* <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Country</label>
                        <Form.Control
                          defaultValue="Andrew"
                          placeholder="Country"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col> */}
                    {/* <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Postal Code</label>
                        <Form.Control
                          placeholder="ZIP Code"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col> */}
                  </Row>
                   <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>About Me</label>
                        <Form.Control
                          cols="80"
                          
                          placeholder="Here can be your description"
                          rows="4"
                          as="textarea"
                          name="message"
                          value={state.message}
                          onChange={(e)=>handleChange(e)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row> 

                  <Row>
                    <Col>
                    <label class="form-label" for="customFile">
                       Picture
                     </label>
                    <input 
                      type="file" 
                      class="form-control" 
                      id="customFile"
                      name="imageFile"
                      accept='image/*'
                      onChange={(e) => handleImgChange(e)}
                    />
                    
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    variant="info"
                    onClick={(e)=>submitHandler(e)}
                  >
                    Update Profile
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={require("assets/img/photo-1431578500526-4d9613015464.jpeg")}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={`https://api.zalimburgers.com/${data.image}`}
                    ></img>
                    <h5 className="title">{data.post}</h5>
                  </a>
                  
                </div>
                
              </Card.Body>
              <hr></hr>
              <div className="text-center m-auto  p-3">
                <h3> {data.ranking}</h3>

                <p className="description">
                  {data.message}
                  </p>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MDMessage;
