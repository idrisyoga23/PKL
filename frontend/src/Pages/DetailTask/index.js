import React from 'react'
import { Flex, Wrapper } from './styles'
import Navbar from '../Navbar2'
import { Paper, Button } from '@material-ui/core';
import NoteAddIcon from '@material-ui/icons/NoteAdd'
import BackupIcon from '@material-ui/icons/Backup';
  

const DetailTask = () => { 

    return (
        <>
            <Navbar />
            <Wrapper>
                <h1>Detail Task</h1>
                <Flex direction="row" justify="center">
                    <Paper className="box">
                        <Flex direction="row" className="title-wrap">
                            <Flex direction="column" alignItems="space-around" style={{color: "#0072BC"}}>
                                <p>Nama Project:</p>
                                <p>Tanggal Awal:</p>
                                <p>Tanggal Akhir:</p>
                                <p>Nama Karyawan:</p>
                                <p>Status:</p>
                            </Flex>
                            <Flex direction="column" alignItems="space-around" style={{marginRight: "11em"}}>
                                <p>Pengelolahan Sampah</p>
                                <p>12 April 2021</p>
                                <p>30 April 2021</p>
                                <p>Budi Sudarsono</p>
                                <p>Selesai</p>
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
                <Flex direction="row" justify="center" style={{marginTop: "2em"}}>
                    <Paper className="text-box">
                            <Flex direction="row">
                                <p>Task List</p>
                            </Flex>
                    </Paper>
                </Flex>
                    <Flex direction="row" justify="center">
                    <Paper className="submission-box">
                        <Flex direction="row" alignItems="center" className="upload-header">
                            <NoteAddIcon fontSize="large" />
                        </Flex>
                        <Flex direction="row" justify="center" alignItems="center">
                            <BackupIcon className="upload-btn" />
                        </Flex>
                    </Paper>
                    </Flex>
                <Flex direction="row" justify="center" className="btn_wrap" >
                    <Button variant="contained" color="primary">
                        Terima
                    </Button>
                    <Button variant="contained" color="primary" style={{marginLeft: '5em'}}>
                        Tolak
                    </Button>
                </Flex>
            </Wrapper> 
        </>
    )
}

export default DetailTask
