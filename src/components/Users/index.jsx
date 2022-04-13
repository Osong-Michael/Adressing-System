import React, { useEffect, useMemo } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import TableContainer from '../Table';

import { getUsers, checkStatus } from '../../Redux/actions';


const Users = () => {
  let navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
        dispatch(checkStatus())
    }, []);

    const users = useSelector(state => state.users);
    const token = useSelector(state => state.token);

    const columns = useMemo(
        () => [
          {
            Header: 'Client Details',
            columns: [
              {
                Header: 'First Name',
                accessor: 'firstName',
              },
              {
                Header: 'Last Name',
                accessor: 'lastName',
              },
              {
                Header: 'User Name',
                accessor: 'username',
              },
              {
                Header: 'Email',
                accessor: 'email',
              },
              // {
              //   Header: 'Phone Number',
              //   accessor: 'phone',
              // }
            ],
          },
          {
            Header: 'Client Adrress',
            columns: [
              {
                Header: 'Region',
                accessor: 'region',
              },
              {
                Header: 'City',
                accessor: 'city',
              },
              {
                Header: 'Address ',
                accessor: 'address',
                disableFilters: true
              },
            ],
          }
        ],
        []
      );

    return (
        <>
          {!token && <Navigate to='/login' replace />}
          {users.length && (
              <Container style={{ marginTop: 100, marginBottom: 100 }}>
                <div className="small-box bg-gradient-success users-number">
                  <div className="inner">
                    <h4>{users.length}</h4>
                    <p>USERS</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-user-plus" onClick={() => navigate("/users/new-user")}/>
                  </div>
                </div>
                <hr style={{ marginTop: 50, marginBottom: 50 }}/>
                  <TableContainer columns={columns} data={users} />
              </Container>
          )}
        </>
    )
};

export default Users;