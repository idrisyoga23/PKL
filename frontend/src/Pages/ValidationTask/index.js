import React from 'react'
import { Flex, Wrapper } from './styles'
import Navbar from '../Navbar2'
import PopUp from '../PopUp'
import { Paper, Button } from '@material-ui/core';
import NoteAddIcon from '@material-ui/icons/NoteAdd'
import BackupIcon from '@material-ui/icons/Backup';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicRoundedIcon from '@material-ui/icons/FormatItalicRounded';
import FormatUnderlinedRoundedIcon from '@material-ui/icons/FormatUnderlinedRounded';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
  

const ValidationTask = () => {
    
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
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
                                <p>Pengelolahan Sampah</p>
                                <p>12 April 2021</p>
                                <p>30 April 2021</p>
                                <p>Budi Sudarsono</p>
                                <p>Ditolak</p>
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
                            <BackupIcon className="upload-btn" />
                        </Flex>
                    </Paper>
                    </Flex>
                    <Flex direction="row" justify="center" style={{marginTop: "2em"}}>
                    <Paper className="text-box">
                            <Flex direction="row">
                                <p>Komentar</p>
                            </Flex>
                    </Paper>
                </Flex>
                    <Flex direction="row" justify="center">
                    <Paper className="submission-box">
                        <Flex direction="row" alignItems="center" className="upload-header">
                            <FormatBoldIcon fontSize="large" />
                            <FormatItalicRoundedIcon fontSize="large" />
                            <FormatUnderlinedRoundedIcon fontSize="large" />
                            <FormatAlignLeftIcon fontSize="large" style={{marginLeft: "0.5em"}} />
                            <FormatAlignCenterIcon fontSize="large" />
                            <FormatAlignRightIcon fontSize="large" />
                            <FormatAlignJustifyIcon fontSize="large" />
                            <FormatListBulletedIcon fontSize="large" style={{marginLeft: "0.5em"}} />
                            <FormatListNumberedIcon fontSize="large" />
                        </Flex>
                    </Paper>
                    </Flex>
                <Flex direction="row" justify="center" className="btn_wrap" >
                    <Button variant="contained" color="primary" onClick={() => handleOpen() }>
                        Kirim
                    </Button>
                </Flex>
                <PopUp open={open} handleClose={() => handleClose() } />
            </Wrapper> 
        </>
    )
}

export default ValidationTask
