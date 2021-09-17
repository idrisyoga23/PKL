import React from 'react'
import { Flex, Wrapper } from './styles'
import Navbar from '../Navbar2'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {STATUS} from "../../enum";
// import './App.css'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, Button, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from '@material-ui/core';

const columns = [
    { id: 'no', label: 'No', minWidth: 30 },
    { id: 'nama_project', label: 'Nama Project', minWidth: 100 },
    { id: 'nama_manager', label: 'Manager', minWidth: 30 },
    { id: 'id_status', label: 'Status', minWidth: 30 },
    { id: 'detail', label: 'Detail', minWidth: 30 },
  
  
  
    
  ];
  

  
  const useStyles = makeStyles({
    root: {
      width: '1000px',
    },
    container: {
      maxHeight: 440,
    },
  });

const DaftarProject = () => {
const history = useHistory()
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [data, setData] = React.useState([])
    const id_user= localStorage.getItem('id_user')
    console.log(id_user)

    React.useEffect(()=>{
      axios.get(`http://127.0.0.1:8000/api/project?id_user=${id_user}`,).then(res =>{
        console.log(res.data.data)
       setData(res.data.data)
        
    })

    },[])
  
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
          <h1>Daftar Project</h1>
              <Flex direction="column">
              <Flex direction="row" justify="center" style={{marginTop: "2em"}}>
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
                              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,idx) => {
                              return (
                                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                  {columns.map((column) => {
                                 if(column.id=="detail"){
                                  return (
                                    <TableCell key={column.id} align={column.align}>
                                      <Button color="primary" onClick={()=>history.push('/detail-project')}>DETAIL</Button>
                                    </TableCell>
                                    );

                                }
                                else{
                                 const value = column.id ==="no" ?idx+1 : column.id==="id_status" ? STATUS[row[column.id]]:  row[column.id];
                                  return (
                                  <TableCell key={column.id} align={column.align}>
                                      {column.format && typeof value === 'number' ? column.format(value) : value}
                                  </TableCell>
                                  );
                                }
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
                          count={data.length}
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

export default DaftarProject