import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PersonIcon from '@material-ui/icons/Person';

export const SideNavdata = [
    
    {
        title: "Home",
        icon: <HomeIcon style={{ fill: 'white' }}/>,
        path: "/homepage",
        cName:'nav-text'
    },
    {
        title: "Project",
        icon: <WorkIcon style={{ fill: 'white'}} />,
        path: "/daftar-project",
        cName:'nav-text'
    },
    {
        title: "Task",
        icon: <AssignmentIcon style={{ fill: 'white' }} />,
        path: "/daftar-task",
        cName:'nav-text'
    },
    {
        title: "User",
        icon: <PersonIcon style={{ fill: 'white' }} />,
        path: "/create-user",
        cName:'nav-text',
        
    },


]
    


