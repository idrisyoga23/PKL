import React from 'react'
import { Flex, Wrapper } from './styles'
import Navbar from '../Navbar2'
// import './App.css'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, Button, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';

import {Link } from "react-router-dom";


const columns = [
    { id: 'no', label: 'No', minWidth: 30 },
    { id: 'nama_project', label: 'Nama Proejct', minWidth: 100 },
    { id: 'status', label: 'Status', minWidth: 30 },
  
    
  ];
  
  function createData(no, nama_project, status) {
    return { no, nama_project, status };
  }
  
  const rows = [  
    createData( 1, "Donatur Banjir", "Ditolak"),
    createData( 2, "Donatur Banjir", "Ditolak"),
    createData( 3, "Donatur Banjir", "Ditolak"),
    createData( 4, "Donatur Banjir", "Ditolak"),
    createData( 5, "Donatur Banjir", "Ditolak"),
  
  ];
  
  const useStyles = makeStyles({
    root: {
      width: '1000px',
    },
    container: {
      maxHeight: 440,
    },
  });

const Homepage = () => {

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    return (
        <>
        
        <Navbar /> 
        <Wrapper>
        <h1>Home</h1>
          <Flex direction="row" className="btn_wrap" >
            <Link to="/create-project">
              <Button variant="contained" color="primary">
                  Project
              </Button>
              </Link>
              <Link to="/create-task">
              <Button variant="contained" color="primary" style={{marginLeft: '2em'}}>
                  Task
              </Button>
              </Link>
          </Flex>
          <Flex direction="column">
                <Flex direction="row" justify="center" style={{marginTop: "1em"}}>
                    <Paper className="text-box">
                            <Flex direction="row">
                                <p>Daftar Project</p>
                            </Flex>
                    </Paper>
                </Flex>
                <Flex direction="row" justify="center">
                    <Paper className={classes.root}>
                        <TableContainer className={classes.container}>
                            <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    >
                                    {column.label}
                                    </TableCell>
                                ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                        <TableCell key={column.id} align={column.align}>
                                            {column.format && typeof value === 'number' ? column.format(value) : value}
                                        </TableCell>
                                        );
                                    })}
                                    </TableRow>
                                );
                                })}
                            </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </Flex>  
          </Flex> 
        </Wrapper>  
        </>
    )
}

export default Homepage