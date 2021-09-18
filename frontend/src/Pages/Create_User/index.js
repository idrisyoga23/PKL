import React from 'react'
import Navbar from '../Navbar2'
import PopUp from '../PopUp'
import { Wrapper } from './style'
import Button from '@material-ui/core/Button'
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select'
import axios from 'axios'
import { headers } from '../../Config'

const roles = [
  {
    value: 1,
    label: 'Admin',
  },
  {
    value: 2,
    label: 'User',
  },
  {
    value: 3,
    label: 'Manager',
  },
];

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
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  
export default function Create_User() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
      nama_depan:'',
      nama_bel:'',
      username:'',
      password:'',
      role: '',
      isError:false,
      })

    // const handleChange = (event) => {
    //   setRole(event.target.value);
    // };

    const handleInput=(form)=>(event)=>{
      const {value} = event.target;
      if(form==='nama_depan'){
          setValues(prev=>({...prev,nama_depan:value}))
      }
      if(form==='nama_bel'){
          setValues(prev=>({...prev, nama_bel:value}))
      }
      if(form==='role'){
        setValues(prev=>({...prev, role:value}))
      }
      if(form==='username'){
        setValues(prev=>({...prev, username:value}))
      }
      if(form==='password'){
        setValues(prev=>({...prev, password:value}))
      }
  }

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
      
    const handleClose = () => {
        setOpen(false);
    };
    const handlePost = ()=>{
      const register = {
          nama_depan: values.nama_depan,
          nama_bel: values.password,
          username: values.username,
          password: values.password,
          role: values.role,          
      }
      axios.post(`http://127.0.0.1:8000/api/register`, register , headers()).then(res =>{
          console.log(res.data)
          setValues({
            nama_depan:'',
            nama_bel:'',
            username:'',
            password:'',
            role: '',
        })
          
      })
  }
        return (
        <>
          <Navbar />  
          <Wrapper >
          
          <form className={classes.form} noValidate>
          <TextField
           values={values.nama_depan} onChange={handleInput('nama_depan')}
            variant="outlined"
            margin="normal"
           
            fullWidth
            id="front"
            label="Nama depan"
            name="Nama depan"
            autoFocus
          />
          <TextField
          values={values.nama_bel} onChange={handleInput('nama_bel')}
            variant="outlined"
            margin="normal"
            fullWidth
            name="Nama_belakang"
            label="Nama Belakang"
            type="nama_belakang"
            id="nama_bel"
          
          />
        <TextField
            variant="outlined"
            margin="normal"
            values={values.username} onChange={handleInput('username')}
            fullWidth
            name="username"
            label="username"
            type="username"
            id="username"
          
          />
          <TextField
            variant="outlined"
            margin="normal"
            values={values.password} onChange={handleInput('password')}
            fullWidth
            name="Password"
            label="password"
            type="password"
            id="password"
          
          />
          <TextField
          variant="outlined"
          margin="normal"
          id="outlined-select-role"
          select
          label="Select"
          value={values.role} onChange={handleInput('role')}
          fullWidt
          helperText="Please select Role"
        >
          {roles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

           <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => handlePost() }
          >
            Masukan 
          </Button>
          </form> 
          <PopUp open={open} handleClose={() => handleClose() } />
      
          </Wrapper>
        </>
    )
}


