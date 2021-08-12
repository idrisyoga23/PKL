import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from './Pages/HomePage'
import Login from './Pages/Login'
import Create_User from './Pages/Create_User'

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/create_user' component={Create_User} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router