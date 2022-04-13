import React from "react";
import { useSelector, useDispatch } from 'react-redux';
// import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { logUserOut } from "../../Redux/actions";


const NavBar = () => {
    const token = useSelector(state => state.token);
    const dispatch = useDispatch();

    return (
        <>
            {token && (
                <nav className="main-header navbar navbar-expand navbar-white navbar-light my-nav">
                    {/* <!-- Left navbar links --> */}
                    <ul className="navbar-nav">
                        <li className="nav-item d-none d-sm-inline-block">
                            <Link to="/users" className="nav-link">All Users</Link>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <Link to="/users/new-user" className="nav-link">Add User</Link>
                        </li>
                    </ul>

                    {/* <!-- Right navbar links --> */}
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <p className="nav-link sign-out" onClick={() => dispatch(logUserOut())}>Sign Out</p>
                    </li>
                    </ul>
                </nav>
            )}
        </>
    );
};

export default NavBar;