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
    margin-top: 2em;
    
    .btn_wrap{
        button{
            background-color: #0072BC;       
        }
    }

    .text-box{
        width: 1000px;
        height: 50px;
        background: #0072BC;
        border-radius: 5px 5px 0 0;
        
        p{
            color: white;
            margin-left: 2em;
            font-weight: 600;
            font-size: 15px;
        }
    }
`