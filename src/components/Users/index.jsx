import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Button } from 'reactstrap';
import TableContainer from '../Table';

import { getUsers } from '../../Redux/actions';


const Users = () => {
  let navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const users = useSelector(state => state.users);

    const columns = useMemo(
        () => [
          {
            Header: 'Client Details',
            columns: [
              {
                Header: 'Name',
                accessor: 'name',
              },
              {
                Header: 'User Name',
                accessor: 'username',
              },
              {
                Header: 'Email',
                accessor: 'email',
              },
              {
                Header: 'Phone Number',
                accessor: 'phone',
              }
            ],
          },
          {
            Header: 'Client Adrress',
            columns: [
              {
                Header: 'Region',
                accessor: 'address.city',
              },
              {
                Header: 'Town',
                accessor: 'address.street',
              },
              {
                Header: 'Quarter ',
                accessor: 'address.suite',
              },
            ],
          }
        ],
        []
      );

    return (
        <>
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