import React from 'react'
import {Flex, Wrapper, Right, Left} from './styles'
import Logo from './Media/unknown.png'
import TextField from '@material-ui/core/TextField';

const Login = () => {
    return (
        <Wrapper>
            <Left>
                <Flex direction="row" justify="center" alignItems="center">
                    <img src={Logo} alt='image-logo' />
                </Flex>
            </Left>
            <Right>
                <Flex direction="row" justify="flex-start">
                    <h1>Masuk</h1>
                </Flex>
                <Flex direction="column" justify="flex-start" className="wrapper-form"> 
                    <TextField id="standard-basic" label="Username" className="form"/>
                    <TextField id="standard-basic" label="Password" className="form"/>
                </Flex>    
            </Right>
        </Wrapper>

    )
}

export default Login