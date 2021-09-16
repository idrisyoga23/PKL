import React from "react";
import { Flex, Wrapper } from './styles';
import { Paper, Button} from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Modal from '@material-ui/core/Modal';
import  {Link} from 'react-router-dom'

const PopUp = (Props) => {

    return (
        <>
        <Modal
                open={Props.open}
                onClose={Props.handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
        >
        <Wrapper>
                <Flex direction="row" justify="center">
                    <Paper className="paper" >
                        <Flex direction="row" justify="center" className="flex-icon" >
                            <ErrorOutlineIcon className="icon-error" />
                        </Flex>
                        <Flex direction="column" alignItems="center">
                            <h2>Peringatan!</h2>
                            <p>Yakin Mau Lanjut?</p>
                        </Flex>
                        <Flex direction="row" justify="center" className="btn_wrap" >
                            <Link to='/detail-task'>
                            <Button variant="contained" color="primary" onClick={() => Props.handleClose() }>
                                Tidak
                            </Button>
                            </Link>
                            <Link to ='/validation-task'>
                            <Button variant="contained" color="primary" style={{marginLeft: '2em'}} onClick={() => Props.handleClose() }>
                                Ya Tentu
                            </Button>
                            </Link>
                        </Flex>
                    </Paper>
                </Flex>   
        </Wrapper>
        </Modal>
        </>

    )
}

export default PopUp

