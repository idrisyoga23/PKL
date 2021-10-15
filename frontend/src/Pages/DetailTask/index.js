import React from 'react'
import { Flex, Wrapper } from './styles'
import { useState } from 'react';
import Navbar from '../Navbar2';
import { styled } from '@mui/material/styles';
import { Paper, Button } from '@material-ui/core';
import PopUp from '../PopUp'
import NoteAddIcon from '@material-ui/icons/NoteAdd'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import IconButton from '@mui/material/IconButton';
import {PhotoCamera} from '@mui/icons-material';
import BackupIcon from '@material-ui/icons/Backup';
import Modal from '@material-ui/core/Modal';
import axios from 'axios';
import {STATUS} from "../../enum";

import { Link, useLocation } from 'react-router-dom';
import qs from 'query-string';

import { headers } from '../../Config';
const Input = styled('input')({
    display: 'none',
});

const DetailTask = () => { 

    const location = useLocation();
    const [open, setOpen] = React.useState(false);
    const [file, setFile] = useState(null);
    const role = localStorage.getItem('role')
    const [data, setData] = useState(null);
    const id = qs.parse(location.search).id;



    React.useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/task/detail?id_task=${id}`,headers()).then((el)=>{

            setData(el.data.data);
        })


    },[])
    console.log(data)

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const onInputChange = (e) => {
        //   console.log(e.target.files)
          setFile(e.target.value)
      }
       const handleSumbit = (e) => {
          const data = new FormData();
          data.append('file',file);
          axios.post(`localhost:8000/upload`.data)
          .then((e) => {
              console.log('succes')
          })
          .catch( (e) => {
              console.error('Error',e)
          })
        };
        

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
                                <p>{data?.nama_task}</p>
                                <p>{data?.tanggal_mulai}</p>
                                <p>{data?.tanggal_akhir}</p>
                                <p>{data?.nama_karyawan.join(",")}</p>
                                <p>{data?.nama_status}</p>
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
                <Flex direction="row" justify="center" style={{marginTop: "2em"}}>
                    <Paper className="text-box">
                            <Flex direction="row">
                                <p>File Submission</p>
                            </Flex>
                    </Paper>
                </Flex>
                    <Flex direction="row" justify="center">
                    <Paper className="submission-box">
                        <Flex direction="row" alignItems="center" className="upload-header">
                            <NoteAddIcon fontSize="large" />
                        </Flex>
                        <Flex direction="row" justify="center" alignItems="center">
                        <label htmlFor="icon-button-file">
                            <Input accept="/" id="icon-button-file" type="file" onChange={onInputChange} name="file"/>
                            <IconButton color="primary" aria-label="upload picture" component="span">
                            <DownloadForOfflineIcon />
                            </IconButton>
                        </label>
                        </Flex>
                    </Paper>
                    </Flex>
                    
                    <Flex direction="row" justify="center" className="btn-wrap">
                    <Button method="post"variant="contained" color="primary" onClick={(e) => handleSumbit() }>
                        Submit
                    </Button>
                    </Flex>
                    {role==="manager" && 
                     <Flex direction="row" justify="center" className="btn_wrap" >
                   
                     <Button variant="contained" color="primary" onClick={() => handleOpen() }>
                         Terima
                     </Button>
                     
                     
                     <Button variant="contained" color="primary" style={{marginLeft: '5em'}} onClick={() => handleOpen() }>
                         Tolak
                     </Button>
                     
                 </Flex>}
               
                <PopUp open={open} handleClose={() => handleClose() } />
            </Wrapper> 
        </>
    )
}

export default DetailTask
