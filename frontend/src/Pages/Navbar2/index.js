import React from 'react';
import axios from 'axios';
import {headers} from '../../Config'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Flex, Header } from './styles';
import Profile from './Media/nama.jpg'
import { SideNavdata } from '../sidebar/SideNavdata';
import { Link } from 'react-router-dom';
import Logo from './Media/unknown.png'
import { Button } from '@material-ui/core';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      paddingTop:'40px',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:"#0072BC"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    
  },
}));

function ResponsiveDrawer(props) {
  const token = localStorage.getItem('token')
  // const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handlePath = (path) => {
    window.location.href = `${path}`
    console.log(path)
}
  const handleLogout = (path) => {
    axios.post(`http://127.0.0.1:8000/api/logout`, headers()).then((res) => {
      console.log(res.data)
      localStorage.removeItem('token')
      window.location.href= '/'
    })
  }

  const role = localStorage.getItem('role')
  const username = localStorage.getItem('username')

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Header>
      <Flex direction="row">
          <Flex direction="column">
            <img className="foto" src={Profile} />
          </Flex>
          <Flex direction="column">
              
              <p>{username}</p>
              <p>{role}</p>
          </Flex>
      </Flex>
      </Header>
      
      <Divider />
      <List>
      {SideNavdata.map((item, index) => {
              return (
                <ListItem button key={index} className={item.cName} onClick={() => handlePath(item.path)} >
                    
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText style={{color:'white'}} primary={item.title} />
                  
                </ListItem>
              );
            })}
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon /> }</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
      <Divider />
    </div>
  );



  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar style={{backgroundColor:'white'}} position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Header>
          <Flex direction="row" alignItems="flex-start" > 
            
                <img className="logo" src={Logo}></img>
                <Flex direction="column" alignItems="center">
                <p style={{color: 'black'}}>Pemerintahan Kota Administrasi </p>
                <p style={{color: 'black',fontSize: '20px', fontWeight: 700}}> Jakarta Utara</p> 
                </Flex>
                <Button className="logout" variant="contained" color="primary" onClick={handleLogout}>Logout</Button>   
            </Flex>
          </Header>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            // container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <Typography></Typography>
      </main>
    </div>
  );
}

export default ResponsiveDrawer;