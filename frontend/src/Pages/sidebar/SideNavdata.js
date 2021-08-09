import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';

export const SideNavdata = [
    
    {
        title: "Home",
        icon: <HomeIcon style={{ fill: 'white' }}/>,
        path: "/Home",
        cName:'nav-text'
    },
    {
        title: "Project",
        icon: <WorkIcon style={{ fill: 'white'}} />,
        path: "/Project",
        cName:'nav-text'
    },
    {
        title: "Task",
        icon: <AssignmentIcon style={{ fill: 'white' }} />,
        path: "/Task",
        cName:'nav-text'
    },
    {
        title: "User",
        icon: <MailIcon style={{ fill: 'white' }} />,
        path: "/User",
        cName:'nav-text',
        
    },
    

]
    


