import React from 'react'
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

    return (
        <>
         <Navbar />
         <Wrapper >
         <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <form className={classes.form} noValidate>
          <TextField
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
            variant="outlined"
            margin="normal"
       
            fullWidth
            label="Nama karyawan"
          
          />
          <TextField
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
            onClick={() => handleOpen() }
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


