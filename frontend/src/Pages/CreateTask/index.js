import React from 'react';
import axios from 'axios';
import Navbar from '../Navbar2'
import PopUp from '../PopUp'
import { Wrapper } from './style'
import Button from '@material-ui/core/Button'
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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

export default function Index() {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-08-18T21:11:54'));
    const [selectedDate1, setSelectedDate1] = React.useState(new Date('2020-08-18T21:11:54'));
    const id_user= localStorage.getItem('id_user')
    
    const handleDateChange = (date) => {
      setSelectedDate(date);

    };
    const handleDateChange1 = (date) => {
        setSelectedDate1(date);
  
    };

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
      
    const handleClose = () => {
        setOpen(false);
    };

    const handleInput=(form)=>(event)=>{
      const {value} = event.target;
      if(form==='nama_task'){
        setValues(prev=>({...prev,nama_task:value}))
      }
      if(form==='tanggal_mulai'){
        setValues(prev=>({...prev, tanggal_mulai:value}))
      }
      if(form==='tanggal_akhir'){
        setValues(prev=>({...prev, tanggal_akhir:value}))
      }
      if(form==='nama_karyawan'){
        setValues(prev=>({...prev, nama_karyawan:value}))
      }
      if(form==='deskripsi'){
        setValues(prev=>({...prev, deskripsi:value}))
      }
  }

    const [values, setValues] = React.useState({
      nama_task:'',
      tanggal_mulai:'',
      tanggal_akhir:'',
      nama_karyawan: '',
      deskripsi: '',
      isError:false,
      })

    const handlePost = ()=>{
      const createtask = {
          nama_task: values.nama_task,
          tanggal_mulai: selectedDate,
          tanggal_akhir: selectedDate1,
          nama_karyawan: values.nama_karyawan,
          deskripsi: values.deskripsi, 
          id_user:id_user         
      }
      axios.post(`http://127.0.0.1:8000/api/task`, createtask ).then(res =>{
            console.log(res.data)
            setValues({
              nama_task:'',
              tanggal_mulai:'',
              tanggal_akhir:'',
              nama_karyawan: '',
              deskripsi: '',
          })
            
        })
    }

    return (
        <>
         <Navbar />
         <Wrapper >
         <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <form className={classes.form} noValidate>
          <TextField
            values={values.nama_task} onChange={handleInput('nama_task')}
            variant="outlined"
            margin="normal"
           
            fullWidth
            id="Pname"
            label="Nama Task"
            name="Nama Task"
            autoFocus
          />
           <KeyboardDatePicker
           fullWidth
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
           fullWidth
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate1}
          onChange={handleDateChange1}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
          <TextField
            values={values.nama_karyawan} onChange={handleInput('nama_karyawan')}
            variant="outlined"
            margin="normal"
       
            fullWidth
            label="Nama karyawan"
          
          />
          <TextField
                values={values.deskripsi} onChange={handleInput('deskripsi')}
                id="standard-textarea"
                label="Deksripsi"
               margin="normal"
                variant="outlined"
               
                multiline
              
                fullWidth
            />
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
       
        </MuiPickersUtilsProvider>
        <PopUp open={open} handleClose={() => handleClose() } />
          </Wrapper>
        </>
    )
}


