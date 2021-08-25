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
    margin-top: 15em;
    
    .paper{
        width: 26vw;
        height: 50vh;

        h2{
            margin-bottom: 0;
            color: black;

        }

        p{
            margin-top: 2px;
            font-size: 13px;
        }
    }

    .flex-icon{
        margin-top: 4em;

    }

    .icon-error{
        font-size: 100px;
        color: #0072BC;


    }

    .btn_wrap{
        button{
            background-color: #0072BC;
            margin-top: 2em;
            width: 135px;
            height: 35px;          
        }
    }

`