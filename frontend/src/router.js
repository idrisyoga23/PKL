import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from './Pages/HomePage'
import Login from './Pages/Login'
import Create_User from './Pages/Create_User'
import Create_Project from './Pages/Create_Project'
import Create_Task from './Pages/CreateTask'

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/homepage' component={Homepage} />
                <Route exact path='/' component={Login} />
                <Route exact path='/create_user' component={Create_User} />
                <Route exact path='/create_project' component={Create_Project} />
                <Route exact path='/createTask' component={Create_Task} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router