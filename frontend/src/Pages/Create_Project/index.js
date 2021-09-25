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

import {Autocomplete} from '@material-ui/lab';
import { headers } from '../../Config';


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
    const [selectedDate, setSelectedDate] = React.useState(new Date('2021-08-18T21:11:54'));
    const [selectedDate1, setSelectedDate1] = React.useState(new Date('2021-08-18T21:11:54'));
    const [listManager, setListManager] = React.useState([]);
    const [listKaryawan, setListKaryawan]= React.useState([]);
    const id_user= localStorage.getItem('id_user')
    const handleDateChange = (date) => {
      setSelectedDate(date);
      console.log(date)
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
      if(form==='nama_project'){
        setValues(prev=>({...prev,nama_project:value}))
      }
      if(form==='tanggal_mulai'){
        setValues(prev=>({...prev, tanggal_mulai:value}))
      }
      if(form==='tanggal_akhir'){
        setValues(prev=>({...prev, tanggal_akhir:value}))
      }
      if(form==='nama_manager'){
        setValues(prev=>({...prev, nama_manager:value}))
      }
      if(form==='nama_karyawan'){
        setValues(prev=>({...prev, nama_karyawan:value}))
      }
      if(form==='deskripsi'){
        setValues(prev=>({...prev, deskripsi:value}))
      }
  }
  const [inputKaryawanValue, setInputKaryawanValue] = React.useState('');
  const [inputManagerValue, setInputManagerValue] = React.useState('');
    
    const [values, setValues] = React.useState({
      nama_project:'',
      tanggal_mulai:'',
      tanggal_akhir:'',
      nama_karyawan:"",
      nama_manager:"",
      id_manager:null,
      id_karyawan: null,
      deskripsi: '',
      isError:false,
      })

    const handlePost = ()=>{
      const createproject = {
          nama_project: values.nama_project,
          tanggal_mulai: selectedDate,
          tanggal_akhir: selectedDate1,
          nama_manager: values.nama_manager,
          nama_karyawan: values.nama_karyawan,
          deskripsi: values.deskripsi,      
          id_user:id_user    
      }
      axios.post(`http://127.0.0.1:8000/api/project`, createproject,headers() ).then(res =>{
            console.log(res.data)
            setValues({
              nama_project:'',
              tanggal_mulai:'',
              tanggal_akhir:'',
              nama_manager:'',
              nama_karyawan: '',
              deskripsi: '',
          })
            
        })
    }

    const getListManager = ()=>{
      axios.get(`http://127.0.0.1:8000/api/users?type=3`,headers() ).then(res =>{

        setListManager(res.data.data)
        
      })

    }

    const getListKaryawan = ()=>{
      axios.get(`http://127.0.0.1:8000/api/users?type=2`,headers() ).then(res =>{
      
        setListKaryawan(res.data.data)
        
      })

    }

React.useEffect(() => {
   getListKaryawan();
   getListManager()
    }, [])
    return (
        <>
         <Navbar />
         <Wrapper >
         <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <form className={classes.form} noValidate>
          <TextField
            values={values.nama_project} onChange={handleInput('nama_project')}
            variant="outlined"
            margin="normal"
           
            fullWidth
            id="Pname"
            label="Nama Project"
            name="Nama Project"
            autoFocus
          />
           <KeyboardDatePicker
           fullWidth
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="tanggal_mulai"
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
          label="tanggal_akhir"
          value={selectedDate1}
          onChange={handleDateChange1}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
 
 <Autocomplete
        value={values.id_manager}
        onChange={(event, newValue) => {

          setValues((prev)=>({...prev, id_manager:parseInt(newValue.id_user)}));
        }}
        inputValue={inputManagerValue}
        options={listManager}
        classes={{
          option: classes.option,
        }}
        autoHighlight
        getOptionLabel={(option) => {
        
          return option.id_user.toString()
        }}
        renderOption={({nama_depan, nama_bel}) => {
         
          return(
          <React.Fragment>
            {nama_depan} {nama_bel}
          </React.Fragment>
          )
         } }  
        
        onInputChange={(event, newInputValue) => {
          
          setInputKaryawanValue(newInputValue);
        }}
        
     
         id="country-select-demo"
 
        style={{ width: "100%" }}
        renderInput={(params) => <TextField {...params}  label="Nama Manager" />}
      /> 
       
<Autocomplete
        value={values.id_karyawan}
        onChange={(event, newValue) => {

          setValues((prev)=>({...prev, id_karyawan:parseInt(newValue.id_user)}));
        }}
        inputValue={inputKaryawanValue}
        options={listKaryawan}
        classes={{
          option: classes.option,
        }}
        autoHighlight
        getOptionLabel={(option) => {
        
          return option.id_user.toString()
        }}
        renderOption={({nama_depan, nama_bel}) => {
         
          return(
          <React.Fragment>
            {nama_depan} {nama_bel}
          </React.Fragment>
          )
         } }  
        
        onInputChange={(event, newInputValue) => {
          
          setInputKaryawanValue(newInputValue);
        }}
        
     
         id="country-select-demo"
 
        style={{ width: "100%"}}
        renderInput={(params) => <TextField {...params}  label="Nama Karyawan" />}
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


