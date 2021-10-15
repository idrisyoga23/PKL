import React,{useEffect, useState} from 'react'
import { Flex, Wrapper } from './styles'
import Navbar from '../Navbar2'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, Button, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import qs from 'query-string';
import { headers } from '../../Config';

import {STATUS} from "../../enum";
const columns = [
    { id: 'no', label: 'No', minWidth: 30 },
    { id: 'nama_task', label: 'Nama Task', minWidth: 100 },
    { id: 'nama_karyawan', label: 'Nama Karyawan', minWidth: 50 },
    { id: 'nama_status', label: 'Status', minWidth: 30 },
  
    
  ];
  
  function createData(no, nama_project, nama_karyawan, status) {
    return { no, nama_project, nama_karyawan, status };
  }
  
  const rows = [  
    createData( 1, "Donatur Banjir", "Budi Sudarsono", "Ditolak"),
    createData( 2, "Donatur Banjir", "Budi Sudarsono", "Ditolak"),
    createData( 3, "Donatur Banjir", "Budi Sudarsono", "Ditolak"),
    createData( 4, "Donatur Banjir", "Budi Sudarsono", "Ditolak"),
    createData( 5, "Donatur Banjir", "Budi Sudarsono", "Ditolak"),
  
  ];
  
  const useStyles = makeStyles({
    root: {
      width: '1000px',
    },
    container: {
      maxHeight: 440,
    },
  });

const DetailProject = () => {
  
    const location = useLocation();
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const id = qs.parse(location.search).id;
    const [data, setData] = useState(null);
    const [task, setTask] = useState([]);
    const id_user= localStorage.getItem('id_user')
    console.log(id_user)

 
  

    useEffect(()=>{

        axios.get(`http://127.0.0.1:8000/api/project/detail?id_project=${id}`,headers()).then((el)=>{
            setData(el.data.data);
        })

        axios.get(`http://127.0.0.1:8000/api/task?id_user=${id_user}&id_project=${id}`,headers()).then(res =>{
           setTask(res.data.data)
            
        })
    },[])
    console.log(task)
  
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
            <h1>Detail Project</h1>
                <Flex direction="row" justify="center">
                    <Paper className="box">
                        <Flex direction="row" className="title-wrap">
                            <Flex direction="column" alignItems="space-around" style={{color: "#0072BC"}}>
                                <p>Nama Project:</p>
                                <p>Tanggal Awal:</p>
                                <p>Tanggal Akhir:</p>
                                <p>Project Manager:</p>
                            </Flex>
                            <Flex direction="column" alignItems="space-around" style={{marginRight: "11em"}}>
                                <p>{data?.nama_project}</p>
                                <p>{data?.tanggal_mulai}</p>
                                <p>{data?.tanggal_akhir}</p>
                                <p>{data?.nama_manager}</p>
                            </Flex>
                        </Flex>
                    </Paper>
                    <Paper className="box">
                            <Flex direction="column" alignItems="space-around" className="title-wrap">
                                <p style={{color: "#0072BC"}}>Deskripsi:</p>
                                <p className="description">{data?.deskripsi}
                                </p>
                            </Flex>
                    </Paper>
                </Flex>
                <Flex direction="column">
                <Flex direction="row" justify="center" style={{marginTop: "2em"}}>
                    <Paper className="text-box">
                            <Flex direction="row">
                                <p>Task List</p>
                                <IconButton>
                                    <Link to="/create-task">
                                        <AddCircleIcon style={{color: "#FFFFFF"}} />
                                    </Link>
                                </IconButton>
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
                                {task.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column,idx) => {
                                        const value = column.id ==="no" ?idx+1 : column.id==="id_status" ? STATUS[row[column.id]]:  row[column.id];
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

export default DetailProject
