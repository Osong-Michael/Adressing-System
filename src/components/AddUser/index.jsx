import React, { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Row, Col, ButtonGroup  } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import API from '../../Redux/api'

import { getUsers, checkStatus } from '../../Redux/actions';
import './index.css';


const AddNewUser = () => {
    const [fileUplaod, setFileUpload] = useState(null)
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        imageUrl: '',
        clientID: '',
        region: '',
        city: '',
        address: '',
        lng: '',
        lat: '',
        plusCodes: '',
        description: '',
    });

    useEffect(() => {
        checkStatus();
    })

    const dispatch = useDispatch();
    const token = useSelector(state => state.token);

    let navigate = useNavigate();
    const regions = ['ADAMAWA REGION', 'CENTRE REGION', 'EAST REGION', 'FAR NORTH REGION', 'LITTORAL REGION', 'NORTH REGION', 'NORTH WEST REGION', 'WEST REGION', 'SOUTH REGION', 'SOUTH WEST REGION'];

    const handleChange = e => {
       const { name, value } = e.target;
       setState({
           ...state,
           [name]: value
       });
    };

    const handleFileUpload = e => {
		setFileUpload(URL.createObjectURL(e.target.files[0]))
	}

    const handleSubmit = async e => {
        e.preventDefault()
        const { region } = state
        let id
        const regionArray = region.split(' ')

        if (regionArray.length > 2) {
            id = regionArray[0][0] + regionArray[0][1] + regionArray[1][0] + regionArray[1][1] + uuidv4()
        } else {
            id = regionArray[0][0] + regionArray[0][1] + uuidv4()
        }

        const body = { ...state, clientID: id }

        try {
            const response = await API.post('/clients', { ...body })
            if (response.status === 201) {
                setState({
                    firstName: '',
                    lastName: '',
                    email: '',
                    username: '',
                    imageUrl: '',
                    clientID: '',
                    region: '',
                    city: '',
                    address: '',
                    lng: '',
                    lat: '',
                    plusCodes: '',
                    description: '',
                });
                dispatch(getUsers())
                navigate('/users')
            }
        } catch (err) {
            console.log('ERR', err) 
        }

    }


    return( 
        <>
            {!token && <Navigate to='/login' replace />}
            <div className='add-user-form'>
                <div className="my-5">
                    <h3>Add New User</h3>
                    <hr />
                </div>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Form.Group as={Col} controlId="formFirstName" >
                            <Form.Label className="label">First Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formLastName">
                            <Form.Label className="label">Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                onChange={handleChange}
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
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formUserName">
                            <Form.Label className="label">Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Row>

                    <div className="col-xxl-4 pic-upload pic-add-user">
                        <div className="bg-secondary-soft px-4 rounded" style={{ padding: '15px'}}>
                            <div className="row g-2">
                                <h5 className="mb-4 mt-1" style={{ textAlign: 'center' }}>Upload your profile photo</h5>
                                <div className="text-center">
                                    {/* <!-- Image upload --> */}
                                    <div className="square position-relative display-2 mb-3 profile-pic">

                                        {fileUplaod ? (
                                            <img src={fileUplaod} alt='Profile Pic' />
                                        ) : (
                                            <i className="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary" />
                                        )}
                                    </div>
                                    {/* <!-- Profile Photo Buttons --> */}
                                    <div className="upload-btns">
                                        <label id="image-upload">
                                            <i className="fa fa-camera" />
                                            <input type="file" id="customFile" name="file" accept="image/*" onChange={handleFileUpload} />
                                        </label>
                                        <div className="remove-pic" onClick={() => setFileUpload(null)}>
                                            <i className="fa fa-trash" />
                                        </div>
                                    </div>
                                    {/* <!-- Content --> */}
                                    <p className="text-muted mb-0" style={{ fontSize: '12px'}}><span className="me-1">Note:</span>Minimum size 300px x 300px</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Row style={{ marginTop: 30}}>
                        <Form.Group as={Col} controlId="formState">
                            <Form.Label>Region</Form.Label>
                            <Form.Select name="region" onChange={handleChange} id="select">
                                {regions.map((region, idx) => (<option key={idx} value={region}>{region}</option>))}
                            </Form.Select >
                        </Form.Group>

                        <Form.Group as={Col} controlId="formCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                name="city"
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Row>

                    <Row style={{ marginTop: 30}}>
                        <Form.Group as={Col} controlId="lng">
                            <Form.Label>Longitude</Form.Label>
                            <Form.Control
                                type="text"
                                name="lng"
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="lat">
                            <Form.Label>Latitude</Form.Label>
                            <Form.Control
                                type="text"
                                name="lat"
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="pluscodes">
                            <Form.Label>Plus Codes</Form.Label>
                            <Form.Control
                                type="text"
                                name="plusCodes"
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Row>

                    <Form.Group as={Col} controlId="description" style={{ marginTop: 30}}>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            type="textarea"
                            name="description"
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Row style={{ marginTop: 30, width: '50%'}}>
                        <ButtonGroup>
                            <Button variant="primary" onClick={handleSubmit}>Add User</Button>
                            <Button variant="primary" className="go-back" onClick={() => navigate('/users')}>Go Back</Button>
                        </ButtonGroup >
                    </Row>
                </Form>
            </div>
        </>
    );
};

export default AddNewUser;