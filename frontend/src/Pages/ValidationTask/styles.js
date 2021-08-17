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
            margin-top: 2em;
            width: 142.11px;
            height: 42px;          
        }
    }

    .submission-box{
        width: 1000px;
        height: 250px;

        .upload-header{
            border-bottom: 1px solid black;
            padding: 10px;
        }

        .upload-btn{
            // width: 20em;
            color: #0072BC;
            margin-top: 2em;
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