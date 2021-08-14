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
    

    margin-left: 20em;
    margin-top: 5em;
    .box{
        width: 500px;
        height: 325px;
    }

    .title-wrap{
        margin-left: 40px;
        margin-top: 50px;
    }

    .description{
        margin-top: -0.8em;
        width: 25em;
    }

    .btn_wrap{
        button{
            background-color: #0072BC;       
        }
    }
    
`