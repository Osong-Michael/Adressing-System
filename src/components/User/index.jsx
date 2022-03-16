import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUsers } from '../../Redux/actions';

import './index.css'


const User = () => {
    const [state, setState] = useState();
    const { userId } = useParams();

    const users = useSelector(state => state.users);
   
    useEffect(() => {
		const user = users.filter(user => user.id === parseInt(userId));
		user && setState(...user)
    }, [users]);

    return (
        <div className="container">
			<div className="row">
				<div className="col-12">
					{/* <!-- Page title --> */} 
					<div className="my-5">
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
											<input type="text" className="form-control" placeholder="" aria-label="First name" value={state?.name} />
										</div>
										{/* <!-- Last name --> */}
										<div className="col-md-6">
											<label className="form-label">Username</label>
											<input type="text" className="form-control" placeholder="" aria-label="Last name" value={state?.username} />
										</div>
										{/* <!-- Phone number --> */}
										<div className="col-md-6">
											<label className="form-label">Phone number</label>
											<input type="text" className="form-control" placeholder="" aria-label="Phone number" value={state?.phone} />
										</div>
										{/* <!-- Email --> */}
										<div className="col-md-6">
											<label className="form-label">Email</label>
											<input type="email" className="form-control" value={state?.email} />
										</div>
										{/* <!-- User ID --> */}
										<div className="col-md-6">
											<label className="form-label">User ID</label>
											<input type="text" className="form-control" placeholder="" aria-label="Phone number" disabled value={state?.id} />
										</div>
									</div> 
									{/* <!-- Row END --> */}
								</div>
							</div>
							{/* <!-- Upload profile --> */}
							<div className="col-xxl-4">
								<div className="bg-secondary-soft px-4 py-5 rounded">
									<div className="row g-3">
										<h4 className="mb-4 mt-0">Upload your profile photo</h4>
										<div className="text-center">
											{/* <!-- Image upload --> */}
											<div className="square position-relative display-2 mb-3">
												<i className="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></i>
											</div>
											{/* <!-- Profile Photo Buttons --> */}
											<input type="file" id="customFile" name="file" hidden="" />
											<label className="btn btn-success-soft btn-block">Upload</label>
											<button type="button" className="btn btn-danger-soft">Remove</button>
											{/* <!-- Content --> */}
											<p className="text-muted mt-3 mb-0"><span className="me-1">Note:</span>Minimum size 300px x 300px</p>
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
											<input type="text" className="form-control" placeholder="" aria-label="Region" value={state?.address?.city} />
										</div>
										{/* <!-- Street --> */}
										<div className="col-md-6">
											<label className="form-label">Town</label>
											<input type="text" className="form-control" placeholder="" aria-label="Town" value={state?.address?.street} />
										</div>
										{/* <!-- Quarter --> */}
										<div className="col-md-6">
											<label className="form-label">Quarter</label>
											<input type="text" className="form-control" placeholder="" aria-label="Quarter" value={state?.address?.suite} />
										</div>
										{/* <!-- Longitude --> */}
										<div className="col-md-6">
											<label className="form-label">Longitude</label>
											<input type="text" className="form-control" placeholder="" aria-label="Longitude" value={state?.address?.geo?.lng} />
										</div>
										{/* <!-- Latitude --> */}
										<div className="col-md-6">
											<label className="form-label">Latitude</label>
											<input type="text" className="form-control" placeholder="" aria-label="Latitude" value={state?.address?.geo?.lat} />
										</div>
										{/* <!-- Description --> */}
										<div className="col-md-6">
											<label className="form-label">Description</label>
											<textarea className="form-control" aria-label="Description" value={state?.description} />
										</div>
									</div> 
									{/* <!-- Row END --> */}
								</div>
							</div>

							{/* <!-- change password --> */}
							<div className="col-xxl-6">
								<div className="bg-secondary-soft px-4 py-5 rounded">
									<div className="row g-3">
										<h4 className="my-4">Geo Location</h4>
										<p>MAP AREA</p>
									</div>
								</div>
							</div>
						</div> 
						{/* <!-- Row END --> */}
						{/* <!-- button --> */}
						<div className="gap-3 d-md-flex justify-content-md-end text-center">
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