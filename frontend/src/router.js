import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './Pages/Navbar2'
import Homepage from './Pages/HomePage'
import Login from './Pages/Login'
import CreateUser from './Pages/Create_User'
import CreateProject from './Pages/Create_Project'
import CreateTask from './Pages/CreateTask'
import DaftarProject from './Pages/DaftarProject'
import DaftarTask from './Pages/DaftarTask'
import DetailProject from './Pages/DetailProject'
import DetailTask from './Pages/DetailTask'
import ValidationTask from './Pages/ValidationTask'
import UserList from './Pages/UserList'
import PopUp from './Pages/PopUp'
import { Redirect, useHistory } from 'react-router';
import { Public } from '@material-ui/icons';
import {ROLE} from './enum';

const Router = (childProps) => {
    const all_role = Object.values(ROLE);
    return(
        <BrowserRouter>
            <Switch>
                <PublicRoute exact path='/' component={Login} props={childProps} />
                <PrivateRoute exact path='/homepage' component={Homepage} roles={all_role} props={childProps}  />
                <PrivateRoute exact path='/create-user' component={CreateUser} roles={['Admin']} props={childProps} />
                <PrivateRoute exact path='/create-project' component={CreateProject} roles={['Admin']} props={childProps} />
                <PrivateRoute exact path='/create-task' component={CreateTask} roles={['Admin']} props={childProps} />
                
                <PrivateRoute exact path='/daftar-project' component={DaftarProject} roles={all_role} props={childProps} />
                <PrivateRoute exact path='/daftar-task' component={DaftarTask} roles={all_role} props={childProps} />
                <PrivateRoute exact path='/detail-project' component={DetailProject} roles={all_role} props={childProps} />
                <PrivateRoute exact path='/detail-task' component={DetailTask} roles={all_role} props={childProps} />
                <PrivateRoute exact path='/validation-task' component={ValidationTask} roles={["Manager"]} props={childProps} />
                <PrivateRoute exact path='/user-list' component={UserList} roles = {["Admin"]}props={childProps} />
                {/* <PrivateRoute exact path='/popup' component={PopUp} props={childProps} /> */}
            </Switch>
        </BrowserRouter>
    )
}
const PublicRoute = ({ component: Component, props:cProps,  ...rest }) => (
	<Route {...rest} render={
		props=>(<Component  {...props} {...cProps}  />)
	}
	/>
)

const PrivateRoute = ({ component: Component, props:cProps, roles=[],...rest }) => (
	<Route {...rest} render={
		props=>{
            const token = localStorage.getItem("token");
            const role = localStorage.getItem("role");
    
            if(token===null){
                return(
                    <Redirect to="/"/>
                )
            }
            
            else{
                if(roles.includes(role)){
                    return(
                        <Component  {...props} {...cProps}  />
                    )
                }
                else{
                    return(
                        <Redirect to="/homepage"/>
                    )
                }
               
            }
          
           
        }
		
		
	} />
)
export default Router