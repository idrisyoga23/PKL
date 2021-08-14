import React from 'react'
import { Flex, Wrapper } from './styles'
import Navbar from '../Navbar2'
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { Paper, Table, Button, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';

const columns = [
    { id: 'no', label: 'No', minWidth: 30 },
    { id: 'nama_project', label: 'Nama Proejct', minWidth: 100 },
    { id: 'nama_karyawan', label: 'Nama Karyawan', minWidth: 50 },
    { id: 'status', label: 'Status', minWidth: 30 },
  
    
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
      width: '985px',
      marginTop: '2em',
    },
    container: {
      maxHeight: 440,
    },
  });

const DetailProject = () => {

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
                                <p>Pengelolahan Sampah</p>
                                <p>12 April 2021</p>
                                <p>30 April 2021</p>
                                <p>Budi Sudarsono</p>
                            </Flex>
                        </Flex>
                    </Paper>
                    <Paper className="box">
                            <Flex direction="column" alignItems="space-around" className="title-wrap">
                                <p style={{color: "#0072BC"}}>Deskripsi:</p>
                                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                                    remaining essentially unchanged. 
                                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                </p>
                            </Flex>
                    </Paper>
                </Flex>
                <Flex direction="row" className="btn_wrap" >
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<Icon>add</Icon>}
                >
                    Tambah Task
                </Button>
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
            </Wrapper> 
        </>
    )
}

export default DetailProject
