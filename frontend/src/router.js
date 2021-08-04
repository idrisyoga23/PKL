import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from './Pages/HomePage'
import Login from './Pages/Login'

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/login' component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router