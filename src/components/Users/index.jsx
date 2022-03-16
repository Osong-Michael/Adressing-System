import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import TableContainer from '../Table';

import { getUsers } from '../../Redux/actions';


const Users = () => {
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
                    <TableContainer columns={columns} data={users} />
                </Container>
            )}
        </>
    )
};

export default Users;