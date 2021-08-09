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
// *{
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//     font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
// }
    margin-left: 20em;
    margin-top: 5em;
    
    .btn_wrap{
        button{
            background-color: #0072BC;
        }
    }
`