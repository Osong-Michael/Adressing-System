import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTable, useSortBy, useFilters, usePagination } from 'react-table';
import { Table, Row, Col, Button, Input } from 'reactstrap';
import { Filter, DefaultColumnFilter } from './filters';
import "./index.css";

const TableContainer = ({ columns, data }) => {
    let navigate = useNavigate();
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize }
    } = useTable(
        {
        columns,
        data,
        defaultColumn: { Filter: DefaultColumnFilter },
        initialState: { pageIndex: 0, pageSize: 10 },
        },
        useFilters,
        useSortBy,
        usePagination
    );

    const generateSortingIndicator = (column) => {
        return column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : '';
    };

    const onChangeInSelect = event => {
        setPageSize(Number(event.target.value))
    }
    
    const onChangeInInput = event => {
        const page = event.target.value ? Number(event.target.value) - 1 : 0
        gotoPage(page)
    }

    return (
        <div className="user-table">
            <Table bordered hover {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()} id='sub-columns'>
                        <div {...column.getSortByToggleProps()}>
                            {column.render("Header")}
                            {generateSortingIndicator(column)}
                        </div>
                        <Filter column={column} />
                    </th>
                    ))}
                </tr>
                ))}
            </thead>

            <tbody {...getTableBodyProps()} className="table-body">
                {page.map(row => {
                    prepareRow(row);
                return (
                    <tr {...row.getRowProps()} onClick={() => navigate(`/users/${row.original.id}`)} >
                    {row.cells.map((cell) => {
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                    })}
                    </tr>
                );
                })}
            </tbody>
            </Table>
            <Row className="table-btns">
                <Col md={3}>
                    <Button
                        color="primary"
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                        style={{marginLeft: '85px'}}
                    >
                        {"<<"}
                    </Button>
                    <Button
                        color="primary"
                        onClick={previousPage}
                        disabled={!canPreviousPage}
                    >
                        {"<"}
                    </Button>
                </Col>
                <Col md={2}>
                    Page{" "}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                </Col>
                <Col md={2}>
                    <Input
                        type="number"
                        min={1}
                        max={pageOptions.length}
                        defaultValue={pageIndex + 1}
                        onChange={onChangeInInput}
                    />
                </Col>
                <Col md={2}>
                    <Input type="select" value={pageSize} onChange={onChangeInSelect}>
                        {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                        ))}
                    </Input>
                </Col>
                <Col md={3}>
                    <Button  onClick={nextPage} disabled={!canNextPage}>
                        {">"}
                    </Button>
                    <Button
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                    >
                        {">>"}
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default TableContainer;