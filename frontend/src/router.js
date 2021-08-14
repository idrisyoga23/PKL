import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from './Pages/HomePage'
import Login from './Pages/Login'
import CreateUser from './Pages/Create_User'
import CreateProject from './Pages/Create_Project'
import CreateTask from './Pages/CreateTask'
import DaftarProject from './Pages/DaftarProject'
import DaftarTask from './Pages/DaftarTask'
import DetailProject from './Pages/DetailProject';

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/homepage' component={Homepage} />
                <Route exact path='/' component={Login} />
                <Route exact path='/create-user' component={CreateUser} />
                <Route exact path='/create-project' component={CreateProject} />
                <Route exact path='/create-Task' component={CreateTask} />
                <Route exact path='/daftar-project' component={DaftarProject} />
                <Route exact path='/daftar-task' component={DaftarTask} />
                <Route exact path='/detail-project' component={DetailProject} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router