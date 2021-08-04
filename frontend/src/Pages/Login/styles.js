import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction};
    justify-content: ${({justify}) => justify};
    align-items: ${({alignItems}) => alignItems};
    flex-wrap: ${({wrap}) => wrap};
    width: 100%;
    // height: 100%;
`
export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    background-color: #0072BC;
`
export const Left = styled.div`
    width: 508px;
    height: 599px;
    background-color: #FAFAFB;
    border-radius: 20px 0 0 20px;
    img{
        width: 400px;
        margin-top: 100px;
    }
    @media (max-width: 500px){
        width: 360px;
        border-radius: 20px;
    }
`
export const Right = styled.div`
    width: 508px;
    height: 599px;
    background-color: white;
    border-radius: 0 20px 20px 0;
    .wrapper-form{
         margin-top: 50px;
    }
    
    .form{
        width: 300px;
        margin-left: 20px;
    }

    h1{
        font-size: 30px;
        margin-left: 20px;
    }

    @media (max-width: 500px){
        display: none;
    }
`