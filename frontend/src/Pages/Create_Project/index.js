import React from 'react';
import axios from 'axios';
import Navbar from '../Navbar2'
import PopUp from '../PopUp'
import { Wrapper } from './style'
import Button from '@material-ui/core/Button'
import { TextField, Select, MenuItem, FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
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
      id_karyawan: [],
      deskripsi: '',
      isError:false,
      })

    const handlePost = ()=>{
      const createproject = {
          nama_project: values.nama_project,
          tanggal_mulai: selectedDate,
          tanggal_akhir: selectedDate1,
          id_manager: values.id_manager,
          id_karyawan: values.id_karyawan,
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
    console.log(values)

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
  <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Nama Manager</InputLabel>
    <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={values.id_manager}
        label="Manager"
        onChange={(e)=>{
          setValues((prev)=>({...prev, id_manager:parseInt(e.target.value)}));
        }}
      >
        {listManager.map((el,idx)=>{
          return(
            <MenuItem value={el.id_user}>{el.nama_depan} {el.nama_bel}</MenuItem>
          )
        })}
      
      </Select>
    </FormControl>

    <FormControl fullWidth>
        <InputLabel id="demo-multiple-name-label">Nama Karyawan</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={values.id_karyawan}
          onChange={(event) => {
            const {
              target: { value },
            } = event;
            console.log(value);
            setValues(
             
              (prev)=>({...prev,id_karyawan:typeof value === 'string' ? value.split(',') : value,
             }) )}}
        
          MenuProps={MenuProps}
        >
          {listKaryawan.map((el) => (
            <MenuItem
              key={el.id_user}
              value={el.id_user}
             
            >
              {el.nama_depan}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
         
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


