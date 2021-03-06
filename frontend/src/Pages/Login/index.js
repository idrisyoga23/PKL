import React from 'react'
import {Flex, Wrapper, Right, Left} from './styles'
import Logo from './Media/unknown.png'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Visibility, VisibilityOff} from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import { InputAdornment, IconButton } from '@material-ui/core';
import {ROLE} from "../../enum";

import axios from 'axios';
import {useHistory} from 'react-router-dom'

const Login = () => {
    const history = useHistory()
    const [values, setValues] = React.useState({
        username:'',
        password:'',
        isError:false,
        })
        const token = localStorage.getItem("token");
        const [isShowed,setIsShowed] = React.useState(false)
        const [isLoading, setIsLoading] = React.useState(false)
        const [isInvalid, setIsInvalid] = React.useState(false)
    
        const handleInput=(form)=>(event)=>{
            const {value} = event.target;
            if(form==='username'){
                setValues(prev=>({...prev,username:value}))
            }
            if(form==='password'){
                setValues(prev=>({...prev, password:value}))
            }
        }
        const handlePost = ()=>{
            const user = {
                username: values.username,
                password: values.password,
                
            }
            axios.post(`http://127.0.0.1:8000/api/login`, user , {headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
         Accept: 'application/json'
              }}).then(res =>{
                console.log(res.data)
                if(res.data.auth === false){
                    setValues({
                        username:'',
                        password:''
                        
                    })
                    setIsInvalid(true)
                }
                else{
                    const { token } = res.data;
                    const { username } = res.data;
                    const { id_role } = res.data;
                    const { id_user } = res.data;
                    localStorage.setItem('token', token);
                    localStorage.setItem('username', username)
                    localStorage.setItem("id_user", id_user)
                    localStorage.setItem('role', ROLE[id_role])
                    history.push('/homepage')
                }
            })
        }

        const handleOpenPass = ()=>{
            setIsShowed(!isShowed)
        }
    return (
        <Wrapper>
            <Left>
                <Flex direction="row" justify="center" alignItems="center">
                    <img src={Logo} alt='image-logo' />
                </Flex>
            </Left>
            <Right>
                <Flex direction="column" justify="Center" alignItems="center">
                    <h1>Masuk</h1>
                </Flex>
                <Flex direction="column" justify="center" alignItems="center"> 
                <TextField className="form" id="standard-basic" label="Username or Email" values={values.username} onChange={handleInput('username')}/>
                <TextField className="form" 
                values={values.password} onChange={handleInput('password')}
                id="standard-basic" 
                label="Password"
                type={isShowed===true ? "text":"password"}
                InputProps={{
                    endAdornment:(
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleOpenPass}
                            
                            // onMouseDown={handleMouseDownUlangiPassword}
                           
                            >
                            {isShowed===false ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    )
                  }}
               
                />
                {
                    values.isError===true?
                    <Typography style={{color:"red", marginTop:'4px'}}>*Username atau password salah</Typography>
                    :
                    null
                }
                </Flex>
                <Flex direction="column" justify="center" alignItems="center">
                <Button className="form" variant="contained" justify="center" onClick={()=>handlePost()} >
                    Masuk 
                </Button>
                {isInvalid && 
                    <p>Username atau Password salah</p>
                } 
                </Flex>   
            </Right>
        </Wrapper>

    )
}

export default Login