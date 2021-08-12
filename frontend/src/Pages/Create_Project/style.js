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
    
width: 80%;
display: flex;
position: fixed;
justify-content: center;
align-items: center;
border: 1px solid;
    margin-left: 20em;
    margin-top: 2em;
    
    .btn_wrap{
        button{
            background-color: #0072BC;       
        }
    }
`
export const formGroup = styled.div`

  alignItems: 'center';
`