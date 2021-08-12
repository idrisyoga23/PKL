import React from 'react'
import Navbar from '../Navbar2'
import { Wrapper } from './style'
import Button from '@material-ui/core/Button'
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select'

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '80%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      marginLeft:'10px'
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
export default function Create_User() {
    const classes = useStyles();
    const [Role, setRole] = React.useState('');

    const handleChange = (event) => {
      setRole(event.target.value);
    };
        return (
        <>
          <Navbar />  
          <Wrapper >
          
          <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
           
            fullWidth
            id="front"
            label="Nama depan"
            name="Nama depan"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
       
            fullWidth
            name="Nama_belakang"
            label="Nama Belakang"
            type="nama_belakang"
            id="nama_bel"
          
          />
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={Role}
          onChange={handleChange}
          label= "role"
          variant="outlined"
          margin="normal"
          fullWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>User</MenuItem>
          <MenuItem value={20}>Project Manager</MenuItem>
         
        </Select>
        <TextField
            variant="outlined"
            margin="normal"
       
            fullWidth
            name="Id"
            label="Id"
            type="Id"
            id="Id"
          
          />
          <TextField
            variant="outlined"
            margin="normal"
       
            fullWidth
            name="Password"
            label="password"
            type="password"
            id="password"
          
          />
           <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Masukan 
          </Button>
          </form> 
       
      
          </Wrapper>
        </>
    )
}


