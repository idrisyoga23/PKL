import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction};
    justify-content: ${({justify}) => justify};
    align-items: ${({alignItems}) => alignItems};
    flex-wrap: ${({wrap}) => wrap};
    width: 100%;
    // height: 100%;
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    
    }
`
export const Header = styled.div`
    .logo{
        width: 90px;
        height: 90px;
        margin-left:10px;
        margin-top:-30px;
        margin-bottom:10px;
    }
    .foto{
        width: 90px;
        height: 90px;
        margin-left:10px;
        margin-top:-30px;
        margin-bottom:10px;
    }
    .logout{
        width: 100px;
        background: #3C8CBA;
        position: absolute;
        right: 50px;
    }
    @media (max-width: 414px){
        .logo{
            width: 40px;
            height: 40px;
            margin-top: 20px;
        }
        .foto{
            width: 40px;
            height: 40px;
            margin-top: 20px;
        }
       
        }
        .logout{
            
        }
    }
`
