import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, ButtonGroup  } from 'react-bootstrap';
import './index.css';


const AddNewUser = () => {
    let navigate = useNavigate();
    const regions = ['ADAMAWA REGION', 'CENTRE REGION', 'EAST REGION', 'FAR NORTH REGION', 'LITTORAL REGION', 'NORTH REGION', 'NORTH WEST REGION', 'WEST REGION', 'SOUTH REGION', 'SOUTH WEST REGION'];

    const handleChange = e => {
        console.log('MOI');
    };


    return( 
        <div className='add-user-form'>
            <div className="my-5">
                <h3>Add New User</h3>
                <hr />
            </div>
            <Form>
                <Row>
                    <Form.Group as={Col} controlId="formFirstName" >
                        <Form.Label className="label">First Name</Form.Label>
                        <Form.Control
                        type="text"
                        name="firstName"
                        required
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formLastName">
                        <Form.Label className="label">Last Name</Form.Label>
                        <Form.Control
                        type="text"
                        name="lastName"
                        required
                        />
                    </Form.Group>
                </Row>

                <Row style={{ marginTop: 30}}>
                    <Form.Group as={Col} controlId="formEmail">
                        <Form.Label className="label">Email Address</Form.Label>
                        <Form.Control
                        type="email"
                        name="email"
                        required
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formUserName">
                        <Form.Label className="label">Username</Form.Label>
                        <Form.Control
                        type="text"
                        name="username"
                        />
                    </Form.Group>
                </Row>

                <Form.Group controlId="formAddress" style={{ marginTop: 30}}>
                    <Form.Label>Full Address</Form.Label>
                    <Form.Control
                        type="text"
                        name="address"
                    />
                </Form.Group>

                <Row style={{ marginTop: 30}}>
                    <Form.Group as={Col} controlId="formState">
                        <Form.Label>Region</Form.Label>
                        <Form.Select name="region" onChange={handleChange}>
                            {regions.map(region => (<option value={region}>{region}</option>))}
                        </Form.Select >
                    </Form.Group>

                    <Form.Group as={Col} controlId="formCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                        type="text"
                        name="city"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="streetNumber">
                        <Form.Label>Street Number</Form.Label>
                        <Form.Control
                        type="text"
                        name="streetNumber"
                        />
                    </Form.Group>
                </Row>

                <Row style={{ marginTop: 30}}>
                    <Form.Group as={Col} controlId="lng">
                        <Form.Label>Longitude</Form.Label>
                        <Form.Control
                        type="text"
                        name="lng"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="lat">
                        <Form.Label>Latitude</Form.Label>
                        <Form.Control
                        type="text"
                        name="lat"
                        />
                    </Form.Group>
                </Row>

                <Row style={{ marginTop: 30, width: '50%'}}>
                    <ButtonGroup>
                        <Button variant="primary">Add User</Button>
                        <Button variant="primary" className="go-back" onClick={() => navigate('/users')}>Go Back</Button>
                    </ButtonGroup >
                </Row>
            </Form>
        </div>
    );
};

export default AddNewUser;