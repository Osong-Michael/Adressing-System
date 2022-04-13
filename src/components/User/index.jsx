import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import API from '../../Redux/api';

import MapContainer from '../Map';

import './index.css'


const User = () => {
    const [state, setState] = useState();
	const [fileUplaod, setFileUpload] = useState(null)
	const [userData, setUserData] = useState({})
    const { userId } = useParams();

	const token = useSelector(state => state.token);
   
    useEffect(() => {
		getUser()
    }, []);

	const getUser = async () => {
		const response = await API.get(`/client/${userId}`)
		setUserData(response.data)
		console.log(response)
	}

	const handleChange = e => {
		const { name, value } = e.target

		setState({
			...state,
			[name]: value
		})
	};

	const handleSubmit = e => {
		// add code here
	};

	const handleFileUpload = e => {
		setFileUpload(URL.createObjectURL(e.target.files[0]))
	}

	

    return (
        <div className="container profile-ctn">
			{!token && <Navigate to='/login' replace />}
			<div className="row">
				<div className="col-12">
					{/* <!-- Page title --> */} 
					<div className="my-5 add-btn-ctn">
						<h3>User Profile</h3>
						<hr />
					</div>
					{/* <!-- Form START --> */}
					<form className="file-upload">
						<div className="row mb-5 gx-5">
							{/* <!-- Contact detail --> */}
							<div className="col-xxl-8 mb-5 mb-xxl-0">
								<div className="bg-secondary-soft px-4 py-5 rounded">
									<div className="row g-3">
										<h4 className="mb-4 mt-0">Contact Details</h4>
										{/* <!-- First Name --> */}
										<div className="col-md-6">
											<label className="form-label">Name</label>
											<input type="text" className="form-control" placeholder="" aria-label="First name" value={userData?.firstName} />
										</div>
										{/* <!-- Last name --> */}
										<div className="col-md-6">
											<label className="form-label">Username</label>
											<input type="text" className="form-control" placeholder="" aria-label="Last name" value={userData?.username} />
										</div>
										{/* <!-- Phone number --> */}
										<div className="col-md-6">
											<label className="form-label">Phone number</label>
											<input type="text" className="form-control" placeholder="" aria-label="Phone number" value={userData?.phone} />
										</div>
										{/* <!-- Email --> */}
										<div className="col-md-6">
											<label className="form-label">Email</label>
											<input type="email" className="form-control" value={userData?.email} />
										</div>
										{/* <!-- User ID --> */}
										<div className="col-md-6">
											<label className="form-label">User ID</label>
											<input type="text" className="form-control" placeholder="" aria-label="userID" disabled value={userData?._id} />
										</div>
										<div className="col-md-6">
											<label className="form-label">Plus Code</label>
											<input type="text" className="form-control" placeholder="" aria-label="Plus Code" value={userData?._id} />
										</div>
									</div> 
									{/* <!-- Row END --> */}
								</div>
							</div>
							{/* <!-- Upload profile --> */}
							<div className="col-xxl-4 pic-upload">
								<div className="bg-secondary-soft px-4 rounded" style={{ padding: '15px'}}>
									<div className="row g-2">
										<h5 className="mb-4 mt-1" style={{ textAlign: 'center' }}>Profile photo</h5>
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
						</div> 
						{/* <!-- Row END --> */}

						{/* <!-- Social media detail --> */}
						<div className="row mb-5 gx-5">
							<div className="col-xxl-6 mb-5 mb-xxl-0">
								<div className="bg-secondary-soft px-4 py-5 rounded">
									<div className="row g-3">
										<h4 className="mb-4 mt-0">Client's Address</h4>
										{/* <!-- City --> */}
										<div className="col-md-6">
											<label className="form-label">Region</label>
											<input type="text" className="form-control" placeholder="" aria-label="Region" value={userData?.region} />
										</div>
										{/* <!-- Street --> */}
										<div className="col-md-6">
											<label className="form-label">City</label>
											<input type="text" className="form-control" placeholder="" aria-label="Town" value={userData?.city} />
										</div>
										{/* <!-- Quarter --> */}
										<div className="col-md-6">
											<label className="form-label">Address</label>
											<input type="text" className="form-control" placeholder="" aria-label="Quarter" value={userData?.address} />
										</div>
										{/* <!-- Longitude --> */}
										<div className="col-md-6">
											<label className="form-label">Longitude</label>
											<input type="text" className="form-control" placeholder="" aria-label="Longitude" value={userData?.lng} />
										</div>
										{/* <!-- Latitude --> */}
										<div className="col-md-6">
											<label className="form-label">Latitude</label>
											<input type="text" className="form-control" placeholder="" aria-label="Latitude" value={userData?.lat} />
										</div>
										{/* <!-- Description --> */}
										<div className="col-md-12">
											<label className="form-label">Description</label>
											<textarea className="form-control" aria-label="Description" value={userData?.description} rows={7} />
										</div>
									</div> 
									{/* <!-- Row END --> */}
								</div>
							</div>

							{/* <!-- change password --> */}
							<div className="col-xxl-6 map-section">
								<h4 className="my-1">Geo Location</h4>
								{userData?.address?.geo && (
									<MapContainer coords={userData?.address?.geo} name={userData?.address?.street}/>
								)}
							</div>
						</div> 
						{/* <!-- Row END --> */}
						{/* <!-- buttons --> */}
						<div className="gap-3 d-md-flex justify-content-md-end text-center" style={{ marginTop: '-30px'}}>
							<button type="button" className="btn btn-danger btn-sm red">Delete profile</button>
							<button type="button" className="btn btn-primary btn-sm">Update profile</button>
						</div>
					</form> 
					{/* <!-- Form END --> */}
				</div>
			</div>
	</div>
    )
};

export default User;